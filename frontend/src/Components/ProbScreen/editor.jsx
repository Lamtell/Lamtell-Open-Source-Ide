import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Editor from "@monaco-editor/react";
import loader from "@monaco-editor/loader"
import Footer from "../IdeComp/editorFooter";
import { addContent } from "../../actions";
import { sampleTestOutput } from "../../actions";
import { motion } from "framer-motion"
import { toast } from "react-toastify";
import { runTestCode } from "../../actions/outputAction";
import "./editor.css";

function EditorPS(props) {
  const [outputWindow, setoutputWindow] = useState(false);
  const [divInout, setDivInout] = useState(false);
  const [crStdin, setcrStdin] = useState("");
  const [customIn, setCustomIn] = useState('')
  const [crExOut, setcrExOut] = useState("");
  const [crYrOut, setcrYrOut] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const inout = useSelector((state) => state.inout);
  const file = useSelector((state) => state.file);
  const testOutput = useSelector((state) => state.testOutput);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  const editorLang = useSelector((state) => state.editorLang);
  const editorRef = useRef(null);
  const samples = useSelector((state) => state.samples);
  console.log(samples);
  const sampleOutput = samples;
  console.log(sampleOutput);
  const dispatch = useDispatch();
  let snippet;
  let editorLanguage = "c"
  if(editorLang==="python2" || editorLang==="python3"){
    editorLanguage = "python"
  }
  else if(editorLang==="cpp14" || editorLang==="cpp17" || editorLang==="cpp"){
    editorLanguage = "cpp"
  }else{
    editorLanguage = editorLang
  }
  // switch (file.name.split(".").pop()) {
  //   case "py":
  //     dispatch(changeLang("python"));
  //     break;
  //   case "cpp":
  //     dispatch(changeLang("cpp"));
  //     break;
  //   case "c":
  //     dispatch(changeLang("cpp"));
  //     break;
  //   case "js":
  //     dispatch(changeLang("javascript"));
  //     break;
  //   case "jsx":
  //     dispatch(changeLang("javascript"));
  //     break;
  //   case "java":
  //     dispatch(changeLang("java"));
  //     break;
  //   default:
  //     break;
  // }

  function handleEditorChange(value) {
    localStorage.setItem("usercode", JSON.stringify(value))
    dispatch(addContent(value));
  }
  
  function handleInput(e) {
    setCustomIn(e.target.value)
  }

  useEffect(() => {
    loader.init()
    .then((monaco) => {
      if(props.theme !== "vs-dark"){
        import(`../../theme/${props.theme}.json`).then((data) => {
            monaco.editor.defineTheme("definedTheme", data);
            setIsThemeLoaded(true);
        }); 
      }else{
        setIsThemeLoaded(false)
      }
    })
    .catch((error) =>
      console.error("An error occurred during initialization of Monaco: ", error)
    );
  }, [props.theme])
  
  function handleEditorDidMount(editor, monaco) {
    localStorage.setItem("usercode", JSON.stringify(file.content))
    editorRef.current = editor;
    if (
      localStorage.getItem("description") &&
      localStorage.getItem("tabtrigger") &&
      localStorage.getItem("snippet")
    ) {
      const description = localStorage.getItem("description");
      const labeltrigger = localStorage.getItem("tabtrigger");
      snippet = localStorage.getItem("snippet");
      monaco.languages.registerCompletionItemProvider("javascript", {
        provideCompletionItems: () => {
          return {
            suggestions: [
              {
                label: labeltrigger,
                kind: monaco.languages.CompletionItemKind.Snippet,
                documentation: description,
                insertText: [`${snippet}`].join("\n"),
              },
            ],
          };
        },
      });
    }
  }

  useEffect(() => {
    if (document.getElementsByClassName("inoutTextarea")[0]) {
      document.getElementsByClassName("inoutTextarea")[0].scrollIntoView();
    }
    document.documentElement.addEventListener("output", (e) => {
      setOutputValue(e.detail.output);
    });
  }, [divInout]);

    useEffect(() => {
      const outputCard = document.getElementsByClassName("outputCard")[0]
      document.documentElement.addEventListener("tcOutput", (e) => {
        setoutputWindow(e.detail.openWindow)
        outputCard.style.display = "flex"
        document.getElementsByClassName("inoutScreen")[0].style.display = "block"
      })
    setcrStdin(samples[0].i)
    setcrExOut(samples[0].o)
    setcrYrOut(testOutput[0].o)
    },[testOutput])

    function changeScreen(index){
      console.log(index)
      setcrStdin(samples[index].i)
      setcrExOut(samples[index].o)
      setcrYrOut(testOutput[index].o)
    }

    function handleInput(e) {
      inout[0].content = e.target.value;
    }

    return(
      <div style={{overflow:"auto", height: "calc(100vh - 2.4vh)"}}>
        <div className="ps_editor">
          <Editor
            width="100%"
            height="calc(100vh - 2.4vh)"
            theme={isThemeLoaded ? "definedTheme": props.theme}
            className="codeText ps_monaco"
            language={editorLanguage}
            defaultValue={file.content}
            value={JSON.parse(localStorage.getItem("usercode"))}
            onMount={handleEditorDidMount}
            onChange={handleEditorChange}
            options={{ fontSize: props.fSize,fontFamily:props.fStyle}}
            defaultLanguage="cpp"/>
          <div className="ps_editor_buttons">
          <button
            className="btn"
            onClick={() => {
              console.log("WORKING")
              setDivInout(true);
            }}
            style={{ marginRight: "10px" }}
          >
            Add Input
          </button>
          <button
            className="btn"
            onClick={() => {
              const id = toast.loading("Running Your Code!");
              dispatch(runTestCode(file.content, editorLang, customIn, samples)).then((e) => {
                dispatch(sampleTestOutput(e.data.output));
                const tcevent = new CustomEvent("tcOutput", {
                  detail: { openWindow: true, message: "success" },
                });
                toast.update(id, {
                  render: "Hurry!",
                  type: "success",
                  isLoading: false,
                  autoClose: 1000,
                  closeButton: true,
                });
                document.documentElement.dispatchEvent(tcevent);
              })
            }}
            style={{ backgroundColor: "green", color: "white !important" }}
          >
            Run TestCases
          </button>
        </div>
      </div>
      {divInout ? 
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type:"tween", duration: 0.2 }} 
          className="inoutTextarea">
             <textarea className="ps_inout"  placeholder = "Enter Input.." onChange={handleInput}/>
             <textarea className="ps_inout" placeholder = "Waiting for your output" defaultValue={outputValue} readOnly/>
          </motion.div> : ""}
          <div className="outputCard">
          <div className="left">
          {samples.map((element,index) => {
            if(element.i !== '' && outputWindow) {
              if(samples[index].o === testOutput[index].o) {
                return (
                  <button key={index+1} onClick={() => changeScreen(index)} className="inoutButton passed">Sample Test Case {index+1} Passed</button>
                ) 
              }else{
                return (
                  <button key={index+1} onClick={() => changeScreen(index)} className="inoutButton failed">Sample Test Case {index+1} Failed</button>
                ) 
              }
            }
            return (
              ''
            )
          })}
          </div>
        
          <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type:"tween", duration: 0.2 }} 
                      className="inoutScreen"
          >
            <div className={`inoutCard right`}>
                      <div className="stput">
                      <div className="inoutTitle">Input</div>
                      <textarea className="ps_inout" defaultValue={crStdin} readOnly/>
                      </div>
                      <div className="expectedOut">
                      <div className="inoutTitle">Expected Output</div>
                      <textarea className="ps_inout" defaultValue={crExOut} readOnly />
                      </div>
                      <div className="yourOut">
                      <div className="inoutTitle">Your Output</div>
                      <textarea className="ps_inout" defaultValue={crYrOut} readOnly/>
                      </div>
                    </div>
          </motion.div> 

          </div>  
          <Footer fileName={file.name} editor={editorRef} editorLang={editorLang} />
        </div>
    )
}

export default EditorPS;
