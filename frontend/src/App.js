import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import allReducer from './reducers';
import DSA from './Components/Ide';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Problem from './Components/ProbScreen';
import UserCode from './Components/SavedCode';
import SnippetScreen from './Components/IdeComp/snippet';
import { ToastContainer } from "react-toastify";

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducer,
  composeEnhancer(applyMiddleware(...middleware))
);

function App() {
  return (
    <div>
      <ToastContainer
        autoClose={5000}
        theme="dark"
        position="bottom-right"
        closeOnClickrtl={true}
      />
     <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DSA/>}/>
          <Route path="/:shareId" element={<DSA/>}/>
          <Route path="/ps" element={<Problem/>}/>
          <Route path="/snippet" element={<SnippetScreen/>}/>
          <Route path="/usercode/:id" element={<DSA/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/usercode" element={<UserCode/>}/>
        </Routes>
      </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
