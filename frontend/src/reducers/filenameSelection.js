export const DSAFiles = [
    {
        "type": "file",
        "name": "main.cpp",
        "id": "sa1GQ3eYSvOv1kRvhEoQV",
        "content": 
`#include<bits/stdc++.h>
using namespace std;
int main ()
{
   cout<<"Hello World"<<endl;
   return 0;
}
`

    },
    {
        "type": "file",
        "name": "main.py",
        "id": "6zgImNpHX5gcQq9AMCsGF",
        "content": "#some comments"
    },
    {
        "type": "file",
        "name": "main.java",
        "id": "o-KZ6TIhTfeClAUkKFhwF",
        "children": [],
        "content": ""
    }
]

const currentLang = "c"

const file = (state = DSAFiles[0], action) => {
    switch(action.type){
      case "changecontent":
        state.content = action.content;
        return state;
      case "addfile":
        DSAFiles.push(action.file)
        state = DSAFiles.at(-1);
        return state;
      case "changename":
        state.name = action.name;
        return state;
      default:
        return state;
    }
}

export const editorLang = (state = currentLang, action) => {
  switch(action.type){
    case "changelang":
      state = action.lang;
      return state;
    default:
      return state;
  }
}

export default file;