import axios from "axios";
export const runCode = ( code,language,input,testcases) => async dispatch => {
    const env = process.env.NODE_ENV; // current environment
    let url
    if(env === "development") {
        url = 'http://localhost:5000/'
    }else{
        url = 'https://lamtellbackend.herokuapp.com/'
    }
    console.log(input, language)
    if(language === "python"){
        language = "python3"
    }if(language === "cpp"){
        language = "cpp14"
    }
    if(language === "python"){
        language = "python3"
    }
    return await axios.post(url+'runcode', {
        language: language, 
        stdin:input,
        versionIndex: (language === "cpp") ? "5" : "0",
        script:code,
        testcases:testcases
    })
}

export const runTestCode = ( code,language,input,testcases) => async dispatch => {
    const env = process.env.NODE_ENV; // current environment
    let url
    if(env === "development") {
        url = 'http://localhost:5000/'
    }else{
        url = 'https://lamtellbackend.herokuapp.com/'
    }
    console.log(input, language)
    if(language === "python"){
        language = "python3"
    }if(language === "cpp"){
        language = "cpp14"
    }
    if(language === "python"){
        language = "python3"
    }
    return await axios.post(url+'runcode/test', {
        language: language, 
        stdin:input,
        versionIndex: (language === "cpp") ? "5" : "0",
        script:code,
        testcases:testcases
    })
}