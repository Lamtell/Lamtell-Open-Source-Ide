import Editor from "@monaco-editor/react";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion"
import "./snippet.css";

function SnippetScreen() {
  const [description, setDescription] = useState("");
  const [tabtrigger, setTabtrigger] = useState("");
  const [snippet, setSnippet] = useState("");
  let navigate = useNavigate();

  const handleSubmission = (event) => {
    event.preventDefault();
    localStorage.setItem("description", description);
    localStorage.setItem("tabtrigger", tabtrigger);
    localStorage.setItem("snippet", snippet);
    navigate("/");
  };
  return (
    <motion.div
      className="snippet-screen"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Link to="/" className="snippet-close-button">
        <i className="fas fa-times-circle"></i>
      </Link>
      <form className="snippet-form" onSubmit={handleSubmission}>
        <div className="upper-input">
          <input
            className="snippet-description"
            placeholder="snippet-description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
          />
          <input
            className="snippet-tabtrigger"
            placeholder="snippet-tabtrigger"
            onChange={(event) => {
              setTabtrigger(event.target.value);
            }}
            value={tabtrigger}
          />
        </div>
        <div>
          <Editor
            height="calc(70vh - 2.4vh)"
            theme="vs-dark"
            language="javascript"
            className="snipper-editor"
            defaultValue="//Type your snippet here"
            value={snippet}
            onChange={(value) => {
              setSnippet(value);
            }}
          />
          <button type="submit" className="snippet-submit btn mt-4">
            Save Snippet
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default SnippetScreen;
