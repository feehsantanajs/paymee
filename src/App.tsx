import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Support } from './pages/Support'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/support"  element={<Support />}/>
        <Route path="/contact"  element={<Home />}/>
        <Route path="/term-use"  element={<Home />}/>
        <Route path="/politic"  element={<Home />}/>
        <Route path="/listening"  element={<Home />}/>
        <Route path="/login"  element={<Home />}/>
        <Route path="/create-account"  element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
