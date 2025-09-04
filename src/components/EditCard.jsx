import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function EditCard() {
  const [form, setForm] = useState({
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleInputs = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Product updated successfully!')
  }

  // Skeleton UI (matches your palette)
  if (loading) {
    return (
      <div className="flex justify-center items-start min-h-screen bg-[#FAFAFA] py-10">
        <div className="bg-white border border-[#E5E5E5] shadow-sm rounded-xl p-8 w-full max-w-lg">
          <Skeleton variant="text" width={200} height={35} sx={{ bgcolor: '#f5f5f5', mb: 3 }} />
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              height={i === 3 ? 80 : 40}
              sx={{ bgcolor: '#f5f5f5', mb: 2, borderRadius: 2 }}
            />
          ))}
          <Skeleton variant="rectangular" height={45} sx={{ bgcolor: '#f5f5f5', mt: 2, borderRadius: 2 }} />
        </div>
      </div>
    )
  }

  // Real form UI (matches your palette)
  return (
    <div className="flex justify-center items-start min-h-screen bg-[#FFFFFF] py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FAFAFA] border border-[#E5E5E5] shadow-sm rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Product</h2>

        {/* ID */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">ID</label>
          <input
            type="number"
            name="id"
            value={form.id}
            onChange={handleInputs}
            className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter product ID"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleInputs}
            className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Product title"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Price</label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={form.price}
            onChange={handleInputs}
            className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="0.00"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            rows="3"
            value={form.description}
            onChange={handleInputs}
            placeholder="Product description"
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleInputs}
            className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Category name"
          />
        </div>

        {/* Image */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            value={form.image}
            onChange={handleInputs}
            className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="http://example.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-800 text-white font-semibold px-5 py-3 rounded-lg shadow transition"
        >
          Update Product
        </button>
      </form>

      <ToastContainer position="top-center" />
    </div>
  )
}

export default EditCard
