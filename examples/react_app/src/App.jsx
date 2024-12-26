import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GurubaseWidget from './components/GurubaseWidget'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <GurubaseWidget 
        widgetId="b_GSd67b_KVColq6d0YFygTkT-aaAOhonhP4JsWgP5k"
        text="Ask AI"
        margins={{ bottom: "20px", right: "20px" }}
        lightMode={false}
        // bgColor="#F5A51D"
        // iconUrl="https://avatars.githubusercontent.com/u/75415501?s=200&v=4"
        // name="Anteon"
      />
    </>
  )
}

export default App
