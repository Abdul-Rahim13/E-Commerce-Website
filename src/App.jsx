import './App.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditCard />} />
        <Route path="/delete/:id" element={<DeleteCard />} />
      </Routes>
  )
}

export default App
