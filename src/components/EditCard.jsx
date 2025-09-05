import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProuctByid, fetchupdatedProduct} from '../store/slices/editProduct'

function EditCard() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const {data: product} = useSelector((state) =>  state.editproductDetails)

  const [form, setForm] = useState({
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  })

  useEffect(() => {
    dispatch(fetchProuctByid(id))
  }, [dispatch, id])

  useEffect(() => {
    if (product) {
      setForm({
        id: product.id || '',
        title: product.title || '',
        price: product.price || '',
        description: product.description || '',
        category: product.category || '',
        image: product.image || '',
      })
    }
  }, [product])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleInputs = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  if (
    form.id === '' ||
    form.title === '' ||
    form.price === '' ||
    form.description === '' ||
    form.category === '' ||
    form.image === ''
  ) {
    toast.error('Please fill all fields!')
  } else {
    try {
      await dispatch(fetchupdatedProduct({ id, updatedData: form })).unwrap()
      toast.success('Product updated successfully!')
    } catch (error) {
      toast.error('Failed to update product!')
      console.error(error)
    }
  }
}


  // Skeleton UI while loading
  if (loading) {
    return (
      <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10">
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-8 w-full max-w-2xl">
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

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 shadow-md rounded-xl p-6 w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Product</h2>

        {/* ID */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
          <input
            type="number"
            name="id"
            value={form.id}
            onChange={handleInputs}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter product ID"
          />
        </div>

        {/* Title & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleInputs}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Product title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={form.price}
              onChange={handleInputs}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            rows="3"
            value={form.description}
            onChange={handleInputs}
            placeholder="Product description"
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleInputs}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Category name"
          />
        </div>

        {/* Image */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            value={form.image}
            onChange={handleInputs}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="http://example.com"
          />
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="h-32 object-contain mx-auto mt-3 border rounded-md"
            />
          )}
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
