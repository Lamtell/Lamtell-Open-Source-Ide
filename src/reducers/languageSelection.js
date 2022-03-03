const languageReducer = (state="c", action) => {
      switch(action.type){
        case "c":
          state = "c";
          return state;
        case "c99":
          state = "c99";
          return state;
        case "cpp":
          state = "cpp";
          return state;
        case "cpp14":
          state = "cpp14";
          return state;
        case "cpp17":
          state = "cpp17";
          return state;
        case "python2":
          state = "python2";
          return state;
        case "python3":
          state = "python3";
          return state;
        default:
          return state;
      }
    }
    
    export default languageReducer;
    