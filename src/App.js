import React from "react";
import { Routes, Route} from "react-router-dom";
import Main from './pages/Main.jsx';
import Sub from './pages/Sub.jsx';
function App(commonInstance) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main commonInstance />}></Route>
        <Route path="/sub" element={<Sub commonInstance />}></Route>
      </Routes>
    </div>
  );
}

export default App;
