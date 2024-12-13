
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import Server from './pages/Server'
import Feedbacks from './pages/Feedbacks'
import Vouches from './pages/Vouches'
function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/vouches" element={<Vouches />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/server" element={<Server />} />
      </Routes>
    </Router>
  )
}

export default App
