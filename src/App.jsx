import { useState } from 'react'
import './App.css'
import './styles/main.css'
import Editor from './components/editor';
import Display from './components/display';
import cvState from './components/cvState';

function App() {

  const cvData = cvState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume Builder</h1>
      </header>
      <main>
        <Editor {...cvData} />
        <Display {...cvData} />
      </main>
    </div>
  )
}

export default App
