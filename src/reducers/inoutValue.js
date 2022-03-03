
const inoutValue = [
    {
        "name": "input",
        "content": ""
    },
    {
        "name": "output",
        "content": ""
    },
]


const inout = (state = inoutValue, action) => {
    switch(action.type){
      case "input":
        state = "input";
        return state;
      case "outout":
        state = "output";
        return state;
      default:
        return state;
    }
}


export default inout