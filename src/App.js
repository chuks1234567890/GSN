import { useState } from "react";
import {Routes, Route,useNavigate } from 'react-router-dom';
import Main from "./main";
import Layout from "./layout";
import GamePage from "./gamepage";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/gamesnacks/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='games/'>
            <Route index element={ <GamePage/>} path=":gameName"/>
          </Route> 
          <Route path="*" element={<Layout/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
