import React, { useState } from "react";
import axios from "axios";
import { useDispatch} from "react-redux";
import { updateSampleTests } from "../../actions";
import { cfEndMarkup, cfMarkup } from "./codeforcesTemplate";
import { toast } from "react-toastify";

let globalUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : window.location.hostname;

function PS() {
    const dispatch = useDispatch();
    const [url, setUrl] = useState("");
    var id;
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event)
      axios.get(globalUrl + "/ps?url=" + url).then((response) => {
        dispatch(updateSampleTests(response.data.sampleTests));
        let if_data = cfMarkup + response.data.markup + cfEndMarkup;
        var ifrm = document.createElement("iframe");
        ifrm.srcdoc = if_data;
        ifrm.style.width = "100%";
        ifrm.style.height = "100%";
        document.getElementsByClassName("iframe_div")[0].innerHTML = "";
        document.getElementsByClassName("iframe_div")[0].appendChild(ifrm);
        console.log("loaded")
        toast.update(id, {
          render: `loaded`,
          type: 'success',
          isLoading: false,
          autoClose:3000,
          closeButton: true,
        });
      });
    };

    return(
        <div className="iframe_div">
        <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div>
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Insert problem statement link</h4>
                      <div className="form-group">
                      <form onSubmit={handleSubmit}>
                      <input
                        className="url_input form-style"
                        placeholder="codeforces problem link"
                        onChange={(event) => {
                          setUrl(event.target.value);
                        }}
                        value={url}
                      />
                        <button id="submit" className="btn mt-4"  onClick = {() => {id = toast.loading("Loading your Problem Statement");}}>Submit</button>
                        <i className="input-icon uil uil-at">
                          <i className="far fa-question-circle"></i>
                        </i>
        </form>
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default PS;