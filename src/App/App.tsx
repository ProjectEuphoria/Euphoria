
import './styles/App.css'
import { Route, Routes } from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import ChattingPage from './Pages/ChattingPage'
import ModernAuthUI from './Pages/ModernAuthUI'
import AboutPage from './Pages/AboutPage'
import CommunityPage from './Pages/CommunityPage'

function App() {

  return (
    <Routes>
      {/* public */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/auth" element={<ModernAuthUI />} />
      
      {/* chat - now public */}
      <Route path="/:name" element={<ChattingPage />} />
    </Routes>
  )
}

export default App
