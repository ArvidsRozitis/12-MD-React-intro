// cd vite-project
// npm install
// npm run dev
import './assets/reset.css'
import { useState } from 'react'
import { TaskCard } from './components/cards/task-card'; 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (    
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>     
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>     
      <TaskCard />
    </div>
  );
}

export default App
