import { useState } from 'react'
import './App.css'
import SearchInput from './components/searchInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Current count is {count}
        </button>
        <SearchInput />
      </div>
    </>
  )
}

export default App
