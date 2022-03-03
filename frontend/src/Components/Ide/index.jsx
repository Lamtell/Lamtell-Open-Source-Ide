import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import Footer from "../IdeComp/editorFooter";
import { addContent } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import Split from "react-split";
import Sidebar from "../IdeComp/editorSidebar";
import Editor from "@monaco-editor/react";
import loader from "@monaco-editor/loader"
import axios from "axios";
import { useParams } from "react-router";
const env = process.env.NODE_ENV;
let url
if(env === "development") {
    url = 'http://localhost:5000'
}


function DSA() {
  const { id,shareId } = useParams();
  const [theme, setTheme] = useState("vs-dark");
  const [fontStyle, setFontStyle] = useState("none");
  const [fontSize, setFontSize] = useState(20);
  const file = useSelector((state) => state.file);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  const [fontWeight, setFontWeight] = useState(400);
  const inout = useSelector((state) => state.inout);
  const [outputValue, setOutputValue] = useState("");
  const editorLang = useSelector((state) => state.editorLang);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const editorRef = useRef(null);
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

  function handleEditorChange(value) {
    dispatch(addContent(value));
  }

  useEffect(() => {
    if (id) {
      axios
        .get(url+`/usercode/code/${id}`)
        .then((response) => {
          console.log(response.data.code);
          file.content = response.data.code;
          setLoading(true);
        });
    } else if(shareId){
      console.log("WORKING")
      axios
      .get(url+`/share/${shareId}`)
      .then((response) => {
        file.content = response.data.code;
        setLoading(true);
      });
    } else {
      setLoading(true);
    }
    document.documentElement.addEventListener("output", (e) => {
      inout[1].content = e.detail.output
      setOutputValue(e.detail.output);
    });
  }, []);

  useEffect(() => {
    loader.init()
    .then((monaco) => {
      if(theme !== "vs-dark"){
        import(`../../theme/${theme}.json`).then((data) => {
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
  }, [theme])

  function handleInput(e) {
    inout[0].content = e.target.value;
  }
  //FOR SNIPPET DEV
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    if (
      localStorage.getItem("description") &&
      localStorage.getItem("tabtrigger") &&
      localStorage.getItem("snippet")
    ) {
      const description = localStorage.getItem("description");
      const labeltrigger = localStorage.getItem("tabtrigger");
      snippet = localStorage.getItem("snippet");
      monaco.languages.registerCompletionItemProvider(editorLanguage, {
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

  return (
    <>
      {!isLoading ? (
        ""
      ) : (
        <div>
          <div className="DSA">
            <Sidebar editorLang={editorLang} fSize={setFontSize} fStyle={setFontStyle} theme={setTheme} fWeight={setFontWeight}/>
            <Split
              sizes={[80, 20]}
              minSize={20}
              expandToMin={false}
              direction="horizontal"
              cursor="col-resize"
              className="split-flex"
            >
              <Editor
                height="calc(100vh - 2.4vh)"
                theme={isThemeLoaded ? "definedTheme": theme}
                language={editorLanguage}
                className="codeText"
                defaultValue={snippet}
                value={file.content}
                options={{ fontSize: fontSize,fontFamily:fontStyle, fontWeight:fontWeight}}
                onMount={handleEditorDidMount}
                onChange={handleEditorChange}
              />
              <Split
                sizes={[50, 50]}
                minSize={30}
                expandToMin={false}
                direction="vertical"
                cursor="row-resize"
                className="output-input"
              >
                <div className="input">
                  <div className="output-input-heading"> Input</div>
                  <textarea onChange={handleInput} className="input-textarea" />
                </div>

                <div className="output">
                  <div className="output-input-heading"> Output</div>
                  <textarea
                    className="output-textarea"
                    defaultValue={outputValue}
                    readOnly
                  />
                </div>
              </Split>
            </Split>
            <Footer
              fileName={file.name}
              editor={editorRef}
              editorLang={editorLang}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default DSA;
