import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/indexPage'
import Multiplayer from './pages/multiplayer'
import Zombies from './pages/zombies'
import LibertyFalls from './pages/zombies/libertyfalls/libertyfalls_index'
import Terminus from './pages/zombies/terminus/terminus_index'
import Beamsmasher from './pages/zombies/terminus/beamsmasher'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blackops6-tool" element={<IndexPage />} />
        <Route path="/blackops6-tool/multiplayer" element={<Multiplayer />} />
        <Route path="/blackops6-tool/zombies" element={<Zombies />} />
        <Route path="/blackops6-tool/zombies/liberty-falls" element={<LibertyFalls />} />
        <Route path="/blackops6-tool/zombies/terminus" element={<Terminus />} />
        <Route path="/blackops6-tool/zombies/terminus/beamsmasher" element={<Beamsmasher />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
