const sampleTestOutput = 

[
{"o":''},
{"o":''},
{"o":''}
]


const testCasesOutput = (state = sampleTestOutput, action) => {
    switch(action.type){
        case "sampleTestsOutput":
           console.log(action.output)
           state = action.output;
           return state;
        default:
          return state;
      }
}


export default testCasesOutput