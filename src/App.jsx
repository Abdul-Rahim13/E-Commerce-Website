import './App.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'
import AddProducts from './components/AddProducts'
import ProductDetails from './components/ProductDetails'
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <NavBar loading={loading} /> 
      <Routes>
        <Route path="/" element={<Home loading={loading} />} />
        <Route path="/edit/:id" element={<EditCard />} />
        <Route path="/delete/:id" element={<DeleteCard />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
