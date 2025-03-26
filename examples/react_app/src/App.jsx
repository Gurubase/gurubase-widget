import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import GurubaseWidget from './components/GurubaseWidget'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <main style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <GurubaseWidget 
          widgetId="YOUR_WIDGET_ID"
          text="Ask AI"
          margins={{ bottom: "20px", right: "20px" }} // Optional
          lightMode="auto" // Optional
          bgColor="YOUR_BG_COLOR" // Optional
          iconUrl="YOUR_ICON_URL" // Optional
          name="YOUR_NAME" // Optional
          overlapContent="false" // Optional
        />
      </div>
    </Router>
  )
}

export default App
