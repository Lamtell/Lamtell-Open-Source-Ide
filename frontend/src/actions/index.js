import axios from "axios";
import { toast } from "react-toastify";
const env = process.env.NODE_ENV; // current environment
let url
if(env === "development") {
    url = 'http://localhost:5000'
}else{
    url = window.location.href
}




export const addContent = (con) => {
    return {
       type : "changecontent",
       content : con
    }
}

export const addFile = (fi) => {
    return {
        type : "addfile",
        file : fi
    }
}

export const savefile = (file, lang, sessionId) => async dispatch => {
    console.log(lang)
   return await axios.post(url+"/codesave/", {
    code: file.content,
    name: file.name,
    lang:lang,
    sessionId:sessionId
    }).then((response) => {
    if(response.data.status === 200){
        toast.success("Code Saved to Server");
    }else if(response.data.status === 401){
        toast.error(response.data.message)
    }
    })
}

export const changeFileName = (na) => {
    return {
        type : "changename",
        name : na
    }
}

export const changeLang = (la) => {
    return {
        type : "changelang",
        lang : la
    }
}

export const loginUser = (na) => {
    return {
        type : "login",
        user : na
    }
}

export const logoutUser = () => {
    return {
        type : "logout"
    }
}

export const updateSampleTests = (sample) => {
    return {
        type : "updateSampleTests",
        sampleTests : sample
    }
}

export const sampleTestOutput = (output) => {
    return {
        type : "sampleTestsOutput",
        output: output
    }
}