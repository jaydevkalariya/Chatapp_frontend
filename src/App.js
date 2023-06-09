
import './App.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Join from "./component/Join/Join.js";
import Chat from "./component/Chat/Chat"




function App() {

  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Join/>} /> 
       <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
