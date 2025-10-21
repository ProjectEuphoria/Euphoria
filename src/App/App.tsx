
import './styles/App.css'
import { Route, Routes } from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import ChattingPage from './Pages/ChattingPage'
import ModernAuthUI from './Pages/ModernAuthUI'
import ProtectedRoute from '../Components/ProtectedRoute'
import About from './Pages/About'
function App() {

  return (
    <Routes>
      {/* public */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<ModernAuthUI />} />
      <Route path='/about' element={<About />} />

      {/* protected */}
      <Route element={<ProtectedRoute />}>
        <Route path="/chat/:name" element={<ChattingPage />} />
      </Route>
    </Routes>
  )
}

export default App
