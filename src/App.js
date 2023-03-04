import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {
	const name = null;
  return(
    <div>
      {name || <h1>리액트읍네?</h1>}
    </div>
  )
  
}

export default App;
