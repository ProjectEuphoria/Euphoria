
import './styles/App.css'
import { Route, Routes } from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import ChattingPage from './Pages/ChattingPage'
import ModernAuthUI from './Pages/ModernAuthUI'
import AboutPage from './Pages/AboutPage'
import CommunityPage from './Pages/CommunityPage'
import ProtectedRoute from '../Components/ProtectedRoute'
function App() {

  return (
    <Routes>
      {/* public */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/auth" element={<ModernAuthUI />} />

      {/* protected */}
      <Route element={<ProtectedRoute />}>
        <Route path="/:name" element={<ChattingPage />} />
      </Route>
    </Routes>
  )
}

export default App
