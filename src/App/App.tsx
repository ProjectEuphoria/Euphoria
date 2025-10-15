
import './styles/App.css'
import {Route, Routes} from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import ChattingPage from './Pages/ChattingPage'
import ModernAuthUI from './Pages/ModernAuthUI'
function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/chat/:name" element={<ChattingPage/>}/>
      <Route path='/auth' element={<ModernAuthUI/>}/>
     </Routes>
  )
}

export default App
