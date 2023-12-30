import { useState } from 'react'
import './App.css'
import Editor from './components/editor';
import Preview from './components/preview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume Builder</h1>
      </header>
      <main>
        <section className="editorsect">
          <Editor />
        </section>
        <section className="previewsect">
          <Preview />
        </section>
      </main>
    </div>
  )
}

export default App
