import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Support } from './pages/Support'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { Term } from './pages/Term'
import { PrivacityPolitic } from './pages/PrivacityPolitic'
import { Ombudsman } from './pages/Ombudsman'
import { About } from './pages/About'
import { MediaPaymee } from './pages/MediaPaymee'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/support"  element={<Support />}/>
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/term-use"  element={<Term />}/>
        <Route path="/politic"  element={<PrivacityPolitic />}/>
        <Route path="/ombudsman"  element={<Ombudsman />}/>
        <Route path="/about"  element={<About />}/>
        <Route path="/login"  element={<Login />}/>
        <Route path="/create-account"  element={<Home />}/>
        <Route path="/media"  element={<MediaPaymee />}/>
      </Routes>
    </Router>
  )
}

export default App
