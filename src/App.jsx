import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import About from './pages/About.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default App
