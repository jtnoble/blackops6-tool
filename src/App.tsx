import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/indexPage'
import Multiplayer from './pages/multiplayer'
import Zombies from './pages/zombies'
import LibertyFalls from './pages/zombies/libertyfalls/libertyfalls_index'
import Terminus from './pages/zombies/terminus/terminus_index'
import Beamsmasher from './pages/zombies/terminus/beamsmasher'

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/multiplayer" element={<Multiplayer />} />
        <Route path="/zombies" element={<Zombies />} />
        <Route path="/zombies/liberty-falls" element={<LibertyFalls />} />
        <Route path="/zombies/terminus" element={<Terminus />} />
        <Route path="/zombies/terminus/beamsmasher" element={<Beamsmasher />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
