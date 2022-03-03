import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion"
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions";
import "./styles.css";
const env = process.env.NODE_ENV; // current environment
let url
if(env === "development") {
    url = 'http://localhost:5000/'
}else{
  url = window.location.href
}


export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [, setCookie] = useCookies(["cookie-name"]);
  useEffect(() => {
    const submitButton = document.getElementById("submit");
    const userPassword = document.getElementById("password");
    const userEmail = document.getElementById("email");
    submitButton.addEventListener("click", () => {
      let loginReq = axios.post(
        url+"login",
        {
          email: userEmail.value,
          password: userPassword.value,
        }
      );
      const id = toast.loading("Logging you in!");
      loginReq.then((response) => {
        console.log(response)
        if(response.data.status === 200){
          setCookie("sessId", response.data.sessId);
          dispatch(loginUser(response.data.name));
          toast.update(id, {
            render: `Hi, ${response.data.name}`,
            type: "success",
            isLoading: false,
            autoClose:3000,
            closeButton: true,
          });
          navigate("/");
        }else if(response.data.status === 403){
          toast.update(id, {
            render: `Wrong Credential`,
            isLoading: false,
            autoClose: 1000,
            closeButton: true,
          });
        }else if(response.data.status === 404){
          toast.update(id, {
            render: `User not found`,
            isLoading: false,
            autoClose: 1000,
            closeButton: true,
          });
        }
      });
    });
  }, []);
  return (
    <motion.div
      className="login-screen"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div>
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Log In</h4>
                      <div className="form-group">
                        <input
                          type="email"
                          name="logemail"
                          className="form-style"
                          placeholder="Your Email"
                          id="email"
                          autoComplete="off"
                        />
                        <i className="input-icon uil uil-at">
                          <i className="fas fa-at"></i>
                        </i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          name="logpass"
                          className="form-style"
                          placeholder="Your Password"
                          id="password"
                          autoComplete="off"
                        />
                        <i className="input-icon uil uil-lock-alt">
                          <i className="fas fa-lock"></i>
                        </i>
                      </div>
                      <button id="submit" className="btn mt-4">
                        SignIn
                      </button>
                      <br />
                      <span>or</span>
                      <br />
                      <Link to="/signup">
                        <button id="signup" className="btn mt-1">
                          Create An Account
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
