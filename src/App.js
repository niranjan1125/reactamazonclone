import React, { useState } from 'react';
import './App.css';
import Subheader from './Components/Subheader';
import Card from './Components/Card';
import Shirt from './Components/Shirt';
import Pant from './Components/Pant';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';

function App() {
  let [inputState, setInputState]= useState('sample');

  return (
    <>
    <BrowserRouter>
    <Header setInputState={setInputState}/>
    <Subheader/>
    <Routes>
      <Route path='/' element={<Card inputState={inputState} />}/>
      <Route path='/shirt' element={<Shirt/>}/>
      <Route path='/pant' element={<Pant/>}/>
      
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
