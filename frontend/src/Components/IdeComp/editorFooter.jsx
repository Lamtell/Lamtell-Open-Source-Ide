import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFileName, savefile} from "../../actions";
import { motion } from "framer-motion"
import { changeLang } from "../../actions";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./editorFooter.css";
const env = process.env.NODE_ENV; // current environment
let url
if(env === "development") {
    url = 'http://localhost:5000/'
}else{
  url = 'https://lamtellbackend.herokuapp.com/'
}

//let closeLangOption = false
function Footer(props) {
  const [fileName, setFileName] = useState(props.fileName);
  const dispatch = useDispatch();
  const inout = useSelector((state) => state.inout);
  const editorLang = useSelector((state) => state.editorLang);
  const [ext, setExtension] = useState(".c")
  const [cookies] = useCookies(["cookie-name"]);
  const [Ln, setLn] = useState(1);
  const [Col, setCol] = useState(1);
  const file = useSelector((state) => state.file);
  const userName = useSelector((state) => state.user);
  const languageList = {
    "C": "c",
    "C-99": "c99",
    "C++": "cpp",
    "C++ 14": "cpp14",
    "C++ 17": "cpp17",
    "PHP": "php",
    "Perl": "perl",
    "Python 2": "python2",
    "Python 3": "python3",
    "Ruby": "ruby",
    "GO Lang": "go",
    "Scala": "scala",
    "Bash Shell": "bash",
    "SQL": "sql",
    "Pascal": "pascal",
    "C#": "csharp",
    "VB.Net": "vbn",
    "Haskell": "haskell",
    "Objective C": "objc",
    "Swift": "swift",
    "Groovy": "groovy",
    "Fortran": "fortran",
    "Lua": "lua",
    "TCL": "tcl",
    "Hack": "hack",
    "RUST": "rust",
    "D": "d",
    "Ada": "ada",
    "Java": "java",
    "R Language": "r",
    "FREE BASIC": "freebasic",
    "VERILOG": "verilog",
    "COBOL": "cobol",
    "Dart": "dart",
    "YaBasic": "yabasic",
    "Clojure": "clojure",
    "NodeJS": "nodejs",
    "Scheme": "scheme",
    "Forth": "forth",
    "Prolog": "prolog",
    "Octave": "octave",
    "CoffeeScript": "coffeescript",
    "Icon": "icon",
    "F#": "fsharp",
    "Assembler - NASM": "nasm",
    "Assembler - GCC": "gccasm",
    "Intercal": "intercal",
    "Nemerle": "nemerle",
    "Ocaml": "ocaml",
    "Unlambda": "unlambda",
    "Picolisp": "picolisp",
    "SpiderMonkey": "spidermonkey",
    "Rhino JS": "rhino",
    "CLISP": "clisp",
    "Elixir": "elixir",
    "Factor": "factor",
    "Falcon": "falcon",
    "Fantom": "fantom",
    "Nim": "nim",
    "Pike": "pike",
    "SmallTalk": "smalltalk",
    "OZ Mozart": "mozart",
    "LOLCODE": "lolcode",
    "Racket": "racket",
    "Kotlin": "kotlin",
    "Whitespace": "whitespace",
    "Erlang": "erlang",
    "J": "jlang",
    "Brainf**k":"brainfuck"
  };
  const extension = {
    "c": ".c",
    "c99": ".c",
    "cpp": ".cpp",
    "cpp14": ".cpp",
    "cpp17": ".cpp",
    "php": ".php",
    "perl": ".perl",
    "python2": ".py",
    "python3": ".py",
    "ruby": ".ruby",
    "go": ".go",
    "scala": ".scala",
    "bash": ".bash",
    "sql": ".sql",
    "pascal": ".pas",
    "csharp": ".csx",
    "vbn": ".vb",
    "haskell": ".ha",
    "objc": ".m",
    "swift": ".swift",
    "groovy": ".groovy",
    "fortran": ".f95",
    "lua": ".lua",
    "tcl": ".tcl",
    "hack": ".hack",
    "rust": ".rs",
    "d": ".d",
    "ada": ".adb",
    "java": ".java",
    "r": ".r",
    "freebasic": ".bas",
    "verolig": ".v",
    "cobol": ".cobc",
    "dart": ".dart",
    "yabasic": ".bas",
    "clojure": ".clj",
    "nodejs": ".js",
    "scheme": ".sc",
    "forth": ".fth",
    "prolog": ".pg",
    "octave": ".m",
    "coffeescript": ".coffee",
    "icon": ".icn",
    "fsharp": ".fs",
    "nasm": ".asm",
    "gccasm": ".s",
    "intercal": ".i",
    "nemerle": ".n",
    "ocaml": ".ml",
    "unlambda": ".un",
    "picolisp": ".pil",
    "spidermonkey": ".js",
    "rhino": ".js",
    "clisp": ".lisp",
    "elixir": ".exs",
    "factor": ".factor",
    "falcon": ".fl",
    "fantom": ".fan",
    "nim": ".nim",
    "pike": ".pike",
    "smalltalk": ".gst",
    "mozart": ".oza",
    "lolcode": ".lo",
    "racket": ".rkt",
    "kotlin": ".kt",
    "whitespace": ".ws",
    "erlang": ".erl",
    "jlang": ".jl",
    "brainfuck":".bf"
  }
  const handleNameChange = (event) => {
    setFileName(event.target.value);
    dispatch(changeFileName(event.target.value));
  };

  const handleFileSave = () => {
    dispatch(savefile(file, editorLang,cookies.sessId));
  };
  const changeLangFunc = (value) => {
    setExtension(extension[`${value}`])
    dispatch(changeLang(value))
  }
  const handleShareFile = (e) => {
    axios.post(url+'share',{
      code:file.content,
      input:inout[0].content,
      output:inout[1].content
    }).then(res => {
      navigator.clipboard.writeText(window.location.href + res.data.response._id);
      alert("Copied the text");
    })
  };

  useEffect(() => {
    setFileName(props.fileName);
  }, [props.fileName]);

  useEffect(() => {
    let isCtrl = false,
    langOptions = false;
    document.documentElement.addEventListener("click", (e) => {
      if(e.target.className !== 'footer_text l_footer change_lang'){
        if (langOptions === true) {
          console.log("WORKING")

          langOptions = false;
        }
      }
    })
    document
      .getElementsByClassName("change_lang")[0]
      .addEventListener("click", () => {
        if (langOptions === false) {
          langOptions = true;
        } else {
          langOptions = false;
        }
      });
    document.addEventListener('keydown', (e) => {
      if (e.key === 's' && e.ctrlKey) {
          e.preventDefault();
          dispatch(savefile(file,editorLang, cookies.sessId));
      }
    });
  
    const codeText = document.getElementsByClassName("codeText")[0];
    codeText.addEventListener("click", function () {
      //commented because creating error in ps screen
      setLn(props.editor.current.getPosition().lineNumber);
      setCol(props.editor.current.getPosition().column);
    });
    codeText.addEventListener("keypress", function () {
      //commented because creating error in ps screen
      setLn(props.editor.current.getPosition().lineNumber);
      setCol(props.editor.current.getPosition().column);
    });
    const select = document.getElementById("language");
    for (let key in languageList) {
      var option = document.createElement("option");
      option.text = key;
      option.value = languageList[key];
      option.className = extension[key]
      select.add(option);
    }
  }, []);

  return (    
    <motion.footer
      style={{zIndex:"6"}}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="texteditor_footer"
    >
      <div className="side_footer">
        <span className="footer_text l_footer">
          <i className="far fa-user"></i> {userName}
        </span>
        <span className="footer_text l_footer">
          <i className="fas fa-file-code"></i>{" "}
          <input
            className="file-name"
            onChange={handleNameChange}
            value={'main'+ext}
          />
        </span>
        <span className="footer_text l_footer error" onClick={handleFileSave}>
          <i className="far fa-save"></i> Save code
        </span>
        <span className="footer_text l_footer change_lang">
          <i className="fas fa-code"></i>
          <select name="language" id="language" onClick={ (e) => changeLangFunc(e.target.value)}></select>
        </span>

      </div>
      <div className="side_footer">
      <span className="footer_text r_footer line-col-num" onClick={handleShareFile}>Share</span>
        <span className="footer_text r_footer line-col-num">{`Ln ${Ln}, Col ${Col}`}</span>
        <span className="footer_text r_footer">Layout: US</span>
        <span className="footer_text r_footer">UTF-8</span>
      </div>
    </motion.footer>
  );
}

export default Footer;
