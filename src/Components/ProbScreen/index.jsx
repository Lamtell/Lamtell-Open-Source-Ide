import React,{ useState} from "react";
import { motion } from "framer-motion"
import EditorPS from "./editor";
import "./index.css";
import Split from "react-split";
import Sidebar from "../IdeComp/editorSidebar";
import PS from "./problemStatement"


function Problem() {
  const [theme, setTheme] = useState("vs-dark");
  const [fontStyle, setFontStyle] = useState("none");
  const [fontSize, setFontSize] = useState(20);
  return (
    <>
      <motion.div       
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }} 
        className="problem"
      >
        {/* <Sidebar/> */}
        <Sidebar fSize={setFontSize} fStyle={setFontStyle} theme={setTheme}/>
        <div className="problem_screen">
          <Split
            sizes={[50, 50]}
            minSize={20}
            expandToMin={false}
            direction="horizontal"
            cursor="col-resize"
            className="split-flex"
          >

            <PS/>
            <EditorPS theme={theme} fStyle={fontStyle} fSize={fontSize}/>
          </Split>
        </div>
      </motion.div>
      
    </>
  );
}

export default Problem;
