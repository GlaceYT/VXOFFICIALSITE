
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import Server from './pages/Server'
import Feedbacks from './pages/Feedbacks'
import Vouches from './pages/Vouches'
import Processing from './components/Secure/Processing'
import ExchangeList from './pages/ExchangeList'
function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/vouches" element={<Vouches />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/server" element={<Server />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/exchangelist" element={<ExchangeList />} />
      </Routes>
    </Router>
  )
}

export default App
