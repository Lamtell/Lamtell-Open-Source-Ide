var userName = 'Anonymous';
if(localStorage.getItem("lamtell-user")){
   userName = localStorage.getItem("lamtell-user");
}
const username = (state = userName, action) => {
    switch(action.type){
      case "login":
        state = action.user;
        localStorage.setItem("lamtell-user", state);
        return state;
      case "logout":
        state = "Lamtell User";
        localStorage.setItem("lamtell-user", state);
        return state;
      default:
        return state;
    }
}

export default username;
