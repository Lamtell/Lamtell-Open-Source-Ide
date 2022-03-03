import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { addFile, loginUser } from "../../actions";
import { runCode } from "../../actions/outputAction";
import { useCookies } from "react-cookie";
import axios from "axios";
import { sampleTestOutput } from "../../actions";
import { motion } from "framer-motion"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import "./editorSidebar.css";
import { Link } from "react-router-dom"; 
const env = process.env.NODE_ENV; // current environment
let url;
if (env === "development") {
  url = "http://localhost:5000";
}

function Sidebar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [closeUserOption, setUserOption] = useState(false);
  const [closeSettingOption, setSettingOption] = useState(false);
  const file = useSelector((state) => state.file);
  const samples = useSelector((state) => state.samples);
  const inout = useSelector((state) => state.inout);
  const editorLang = useSelector((state) => state.editorLang);
  const userName = useSelector((state) => state.user);
  const [cookies, setCookie] = useCookies(["cookie-name"]);

  function openModal() {
    axios
      .post(url + "/share", {
        code: file.content,
        input: inout[0].content,
        output: inout[1].content,
      })
      .then((res) => {
        navigator.clipboard.writeText(window.location + res.data.response._id);
        alert("Copied the text");
      });
  }

  const handleLogout = () => {
    let logoutReq = axios.get(url + `/logout?id=${cookies.sessId}`);

    const id = toast.loading("Logging you out!");

    logoutReq.then((response) => {
      console.log(response);
      if (response.data.status === 200) {
        setCookie("sessId", response.data.sessId);
        dispatch(loginUser("Anonymous"));
        toast.update(id, {
          render: `See you soon, ${userName}`,
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        navigate("/");
      } else if (response.data.status === 401) {
        toast.error(response.data.message);
      }
    });
  };

  const logButton = (user) => {
    //User not logged in is a Lamtell User
    if (user !== "Anonymous") {
      return (
        <ul className="userWindow">
          <li>
            <button
              className="options-link logoutbutton"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
          <li>
            <Link className="options-link" to="/usercode">
              Saved Codes
            </Link>
          </li>
          <li>
            <Link className="options-link" to="/snippet">
              Create Snippet
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <ul className="userWindow">
        <li>
          <Link className="options-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
  };
  const settingButton = (user) => {
    return(
      <ul className="settingWindow">
        <li className="settingOptions">
        <input type="number" id="fontSize" className="options-link" name="quantity" min="1" defaultValue={20}
        onChange={(e) => props.fSize(e.target.value)}/>
        </li>
        <li className="settingOptions">
        <input type="number" id="fontWeight" className="options-link" name="quantity" min="400" defaultValue={400}
        onChange={(e) => props.fWeight(e.target.value)}/>
        </li>
        <li className="settingOptions">
        <select id="fontStyle" className="options-link" onChange={(e) => props.fStyle(e.target.value)}>
        <option value="none">None</option>
          <option value="cursive">Cursive</option>
          <option value="fandsong">Fangsong</option>
          <option value="monospace">Monospace</option>
          <option value="fantasy">Fantasy</option>
          <option value="sans-serif">Sans Serif</option>
        </select>
        </li>
        <li className="settingOptions">
        <select id="theme" className="options-link" onChange={(e) => props.theme(e.target.value)}>
          <option value="vs-dark">Vs dark</option>
          <option value="Active4D">Active 4D</option>
          <option value="All Hallows Eve">All Hallows Eve</option>
          <option value="Amy">Amy</option>
          <option value="Birds of Paradise">Birds of Paradise</option>
          <option value="Blackboard">Blackboard</option>
          <option value="Brilliance Black">Brilliance Black</option>
          <option value="Brilliance Dull">Brilliance Dull</option>
          <option value="Chrome DevTools">Chrome DevTools</option>
          <option value="Clouds Midnight">Cloud Midnight</option>
          <option value="Clouds">Clouds</option>
          <option value="Cobalt">Cobalt</option>
          <option value="Dawn">Dawn</option>
          <option value="Dominion Day">Dominion Day</option>
          <option value="Dracula">Dracula</option>
          <option value="Dreamweaver">Dreamweaver</option>
          <option value="Eiffel">Eiffel</option>
          <option value="Espresso Libre">Espresso Libre</option>
          <option value="GitHub">Github</option>
          <option value="IDLE">IDLE</option>
          <option value="idleFingers">Idle Finges</option>
          <option value="iPlastic">Iplastic</option>
          <option value="Katzenmilch">Katzenmilch</option>
          <option value="krTheme">Krtheme</option>
          <option value="Kuroir Theme">Kuroir Theme</option>
          <option value="LAZY">Lazy</option>
          <option value="MagicWB (Amiga)">MagicWB Amiga</option>
          <option value="Merbivore Soft">Merbivore Soft</option>
          <option value="Merbivore">Merbivore</option>
          <option value="monoindustrial">Monoindustrial</option>
          <option value="Monokai Bright">Monokai Bright</option>
          <option value="Monokai">Monokai</option>
          <option value="Night Owl">Night Owl</option>
          <option value="Oceanic Next">Oceanic Next</option>
          <option value="Pastels on Dark">Pastels on Dark</option>
          <option value="Slush and Poppies">Slush and Poppies</option>
          <option value="Solarized-dark">Solarized Dark</option>
          <option value="Solarized-light">Solarized Light</option>
          <option value="SpaceCadet">Spacecadet</option>
          <option value="Sunburst">Sunburst</option>
          <option value="Textmate (Mac Classic)">Textmate</option>
          <option value="themelist">Themelist</option>
          <option value="Tomorrow-Night-Blue">Tomorrow Night Blue</option>
          <option value="Tomorrow-Night-Bright">Tomorrow Night Bright</option>
          <option value="Tomorrow-Night-Eighties">Tomorrow Night Eighties</option>
          <option value="Tomorrow-Night">Tomorrow Night</option>
          <option value="Tomorrow">Tomorrow</option>
          <option value="Twilight">Twilight</option>
          <option value="Upstream Sunburst">Upstream Sunburst</option>
          <option value="Vibrant Ink">Vibrant Ink</option>
          <option value="Xcode_default">Xcode default</option>
          <option value="Zenburnesque">Zenburnesque</option>
        </select>
        </li>
      </ul>
    )
  };

  const openFile = async () => {
    let fileHandle;
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    dispatch(
      addFile({
        type: "file",
        name: file.name,
        id: nanoid(),
        children: [],
        content: contents,
      })
    );
  };

  const downloadFile = () => {
    var filename = file.name;
    var text = file.content;
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const codeRun = () => {
    const id = toast.loading("Running Your Code!");
    dispatch(runCode(file.content, editorLang, inout[0].content, samples)).then(
      (e) => {
        dispatch(sampleTestOutput(e.data.output));
        const tcevent = new CustomEvent("tcOutput", {
          detail: { openWindow: true, message: "success" },
        });
        document.documentElement.dispatchEvent(tcevent);
        inout[1].content = e.data.output;
        const data = {
          output: e.data.output,
        };
        const event = new CustomEvent("output", { detail: data });
        document.documentElement.dispatchEvent(event);
        toast.update(id, {
          render: "Hurry!",
          type: "success",
          isLoading: false,
          autoClose: 1000,
          closeButton: true,
        });
      }
    );
  };

  useEffect(() => {
    let userOption = false;
    let settingOption = false;
    document.documentElement.addEventListener("click", (e) => {
      //open or close user window when click on the icon 
      if(e.target.className === "far fa-user" || e.target.className === "profile sidenav-buttons"){
        if (userOption === false) {
          setUserOption(true);
          userOption = true;
        } else {
          setUserOption(false);
          userOption = false;
        }
      }
      //close user window when click on the icon 
      else if(e.target.className !== "far fa-user" || e.target.className !== "profile sidenav-buttons"){
        if (userOption === true) {
          console.log("WORKING");
          setUserOption(false);
          userOption = false;
        }
      } 
      //open or close setting window when click on the icon
      if(e.target.className === "fas fa-cog" || e.target.className === "settings sidenav-buttons"){
        if (settingOption === false) {
          setSettingOption(true);
          settingOption = true;
        } else {
          setSettingOption(false);
          settingOption = false;
        }
      }
      //close setting window when click on the icon
      else if((e.target.className !== "fas fa-cog" || e.target.className !== "settings sidenav-buttons") && e.target.className !== "settingWindow" && e.target.className !=="settingOptions" && e.target.className !=="options-link"){
        if (settingOption=== true) {
              console.log("WORKING");
            setSettingOption(false);
              settingOption = false;
          }
      }
    });
  }, []);

  return (
    <motion.div
      style={{ zIndex: "5" }}
      initial={{ x: "-50px", scale: 0.8 }}
      animate={{ x: "0px", scale: 1 }}
      transition={{ delay: 0.1, duration: 0.1 }}
      className="editor-sidebar"
    >
      {/* <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={ModalStyles}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
          ariaHideApp={false}
        >
          <button onClick={closeModal}>close</button>
          <input id="url_input" value={copyUrl} />
          <button onClick={handleCopy}>Copy Url</button>
        </Modal>
      </div> */}
      <div className="upper-icons">
        <button
          className="run_code sidenav-buttons"
          data-text="Run Code"
          onClick={codeRun}
        >
          <i className="fas fa-play" style={{ color: "green" }}></i>
        </button>
        <button
          className="suprise_button sidenav-buttons"
          data-text="Import Problem Statement"
          onClick={() => {
            navigate("/ps");
          }}
        >
          <i className="fas fa-file-import"></i>
        </button>
        <button
          className="folder sidenav-buttons"
          data-text="Open File"
          onClick={openFile}
        >
          <i className="far fa-folder"></i>
        </button>
        <button
          className="download sidenav-buttons"
          data-text="Download File"
          onClick={downloadFile}
        >
          <i className="fas fa-download"></i>
        </button>
        <button
          className="share sidenav-buttons"
          data-text="Share Code's Link"
          onClick={openModal}
        >
          <i className="fas fa-share"></i>
        </button>
      </div>

      <div className="lower-icons">
        <button className="profile sidenav-buttons" data-text="User Profile">
          {" "}
          <i className="far fa-user"></i>
        </button>

        <button className="settings sidenav-buttons" data-text="Settings">
          {" "}
          <i className="fas fa-cog"></i>
        </button>
      </div>

      {closeUserOption ? (
        <motion.div
          initial={{ x: "-50px", scale: 0.8 }}
          animate={{ x: "0px", scale: 1 }}
          transition={{ type: "tween", duration: 0.1 }}
          className="user-option"
        >
          {logButton(userName)}
        </motion.div>
      ) : null}
      {closeSettingOption ? (
        <motion.div
          initial={{ x: "-50px", scale: 0.8 }}
          animate={{ x: "0px",y:"-30px", scale: 1 }}
          transition={{ type: "tween", duration: 0.1 }}
          className="setting-option"
        >
          {settingButton(true)}
        </motion.div>
      ) : null}
    </motion.div>
  );
}

export default Sidebar;
