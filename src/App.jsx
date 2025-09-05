import './App.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'
import AddProducts from './components/AddProducts'
import ProductDetails from './components/ProductDetails'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditCard />} />
        <Route path="/delete/:id" element={<DeleteCard />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
  )
}

export default App
