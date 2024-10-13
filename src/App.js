import logo from './logo.svg';
import Home from './components/Home';
import {Router, Routes, Route}  from "react-router-dom"
import Message from './components/Message';
function App() {
  return (
    <div>
    

      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/message" element={<Message/>} />
      </Routes>
  
    </div>
  );
}

export default App;
