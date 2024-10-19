import logo from './logo.svg';
import Home from './components/Home';
import {Router, Routes, Route}  from "react-router-dom"
import Message from './components/Message';
import Success from './components/Success';
function App() {
  return (
    <div>
    

      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
  
    </div>
  );
}

export default App;
