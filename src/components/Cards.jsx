import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/slices/fetchProduct'
import { setAllProducts } from '../store/slices/searchProducts'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Edit, Trash2 } from 'lucide-react'
import ClipLoader from 'react-spinners/ClipLoader'

function Cards() {
  const dispatch = useDispatch()
  const searchResults = useSelector((state) => state.searchProduct.searchResults)

  const [confirmId, setConfirmId] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    dispatch(fetchProducts())
      .unwrap()
      .then((data) => {
        dispatch(setAllProducts(data))
      })
  }, [dispatch])

  const handleDelete = async (id) => {
    // show spinner in modal
    setIsDeleting(true)

    // show toast at top
    const toastId = toast.loading('Deleting product...')

    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`)

      // update redux list
      const newList = searchResults.filter((item) => item.id !== id)
      dispatch(setAllProducts(newList))

      // turn toast into success
      toast.update(toastId, {
        render: 'Product deleted successfully!',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })

      // close modal after success
      setConfirmId(null)
      setIsDeleting(false)
    } catch (error) {
      console.error(error)

      // turn toast into error
      toast.update(toastId, {
        render: 'Failed to delete product!',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      })

      // keep modal open but reset spinner
      setIsDeleting(false)
    }
  }

  return (
    <div className="bg-[#FAFAFA] py-10 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchResults.map((item) => (
          <div
            key={item.id}
            className="relative bg-white border border-[#E5E5E5] rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="relative group">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <NavLink to={`/edit/${item.id}`}>
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                    <Edit size={18} className="text-black" />
                  </button>
                </NavLink>
                <button
                  onClick={() => {
                    setIsDeleting(false)
                    setConfirmId(item.id)
                  }}
                  className="bg-red-500 p-2 rounded-full shadow hover:bg-red-600 cursor-pointer"
                >
                  <Trash2 size={18} className="text-white" />
                </button>
              </div>
            </div>

            <div className="p-4 relative z-30">
              <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-green-600 font-bold">${item.price}</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  ⭐ {item.rating.rate} ({item.rating.count})
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{item.category}</p>
              <NavLink to={`/product-details/${item.id}`}>
                <button className="mt-3 w-full bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation modal */}
      {confirmId && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-xl">
            <h2 className="text-lg font-semibold mb-2">Confirm Delete</h2>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to delete this product?
            </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setConfirmId(null)}
                  disabled={isDeleting}
                  className={`px-4 py-2 ${isDeleting ? "cursor-not-allowed":"cursor-pointer"} bg-gray-200 rounded hover:bg-gray-300`}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(confirmId)}
                  disabled={isDeleting}
                  className= {`px-4 py-2 bg-red-500 ${isDeleting ? "cursor-not-allowed":"cursor-pointer"} text-white rounded hover:bg-red-600`}
                >
                  Delete
                </button>
              </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" />
    </div>
  )
}

export default Cards
