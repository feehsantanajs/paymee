import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Support } from './pages/Support'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { Term } from './pages/Term'
import { PrivacityPolitic } from './pages/PrivacityPolitic'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/support"  element={<Support />}/>
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/term-use"  element={<Term />}/>
        <Route path="/politic"  element={<PrivacityPolitic />}/>
        <Route path="/listening"  element={<Home />}/>
        <Route path="/login"  element={<Login />}/>
        <Route path="/create-account"  element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
