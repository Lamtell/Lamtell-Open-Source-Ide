import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./editorSettings.css";

function EditorScreen() {
  return (
    <motion.div
      className="editorsetting-screen"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div>
        <h2>Theme</h2>
        <button>Light</button>
        <button>Dark</button>
        <button>High Contrast</button>
      </div>
    </motion.div>
  );
}

export default EditorScreen;
