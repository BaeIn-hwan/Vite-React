import React, { useState } from 'react'
import '@/assets/scss/App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/router'
import logo from '@/assets/images/logo.svg'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <BrowserRouter>
      <div className="App">
        <img src={logo} alt="test"></img>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;

{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>Hello Vite + React!</p>

  <p>
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </button>
  </p>

  <p>
    Edit <code>App.tsx</code> and save to test HMR updates.
  </p>

  <p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    {' | '}
    <a
      className="App-link"
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Vite Docs
    </a>
  </p>


  <button type="button" onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </button>
</header> */}