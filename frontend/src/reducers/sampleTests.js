
const sampleTestsArray = [
    {
        "i": "",
        "o": ""
    },
    {
        "i": "",
        "o": ""
    },
    {
        "i": "",
        "o": ""
    },
]


const sampleTests = (state = sampleTestsArray, action) => {
    switch(action.type){
        case "updateSampleTests":
          state = action.sampleTests;
          return state;
        default:
          return state;
      }
}


export default sampleTests