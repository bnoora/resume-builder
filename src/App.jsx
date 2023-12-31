import { useState } from 'react'
import './App.css'
import Editor from './components/editor';
import Display from './components/display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume Builder</h1>
      </header>
      <main>
        <Editor />
        <Display />
      </main>
    </div>
  )
}

export default App
