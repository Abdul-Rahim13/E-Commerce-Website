import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/slices/fetchProduct'
import { useParams } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton'

function ProductDetails() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { daa: products } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const product = products?.find((p) => p.id === Number(id))

if (!product) {
  return (
    <div className="bg-[#FAFAFA] min-h-screen py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {/* Image skeleton */}
        <div className="bg-white rounded-xl p-4 flex items-center justify-center">
          <Skeleton variant="rectangular" width={300} height={300} sx={{ bgcolor: '#f0f0f0' }} />
        </div>

        {/* Info skeleton */}
        <div className="space-y-4">
          <Skeleton variant="text" width="40%" height={20} sx={{ bgcolor: '#f0f0f0' }} />
          <Skeleton variant="text" width="80%" height={30} sx={{ bgcolor: '#f0f0f0' }} />
          <Skeleton variant="text" width="60%" height={20} sx={{ bgcolor: '#f0f0f0' }} />

          <Skeleton variant="text" width="30%" height={30} sx={{ bgcolor: '#f0f0f0' }} />

          <div className="flex gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="circular"
                width={30}
                height={30}
                sx={{ bgcolor: '#f0f0f0' }}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={40}
                height={30}
                sx={{ bgcolor: '#f0f0f0', borderRadius: '6px' }}
              />
            ))}
          </div>

          <Skeleton variant="rectangular" width="100%" height={50} sx={{ bgcolor: '#f0f0f0', borderRadius: '9999px' }} />

          <Skeleton variant="text" width="60%" height={15} sx={{ bgcolor: '#f0f0f0' }} />
        </div>
      </div>
    </div>
  )
}


  return (
    <div className="bg-[#FAFAFA] min-h-screen py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {/* Product image */}
        <div className="bg-white rounded-xl p-4 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[400px] object-contain"
          />
        </div>

        {/* Product info */}
        <div className="space-y-4">
          <h2 className="text-sm text-gray-500">{product.category}</h2>
          <h1 className="text-2xl font-bold text-[#111111]">{product.title}</h1>
          <div className="flex items-center gap-2">
            {/* stars placeholder */}
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm text-gray-500">42 reviews</span>
          </div>

          <p className="text-2xl font-semibold text-[#111111]">${product.price}</p>

          {/* Color selector placeholder */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-700">Color</p>
            <div className="flex gap-2">
              {/* Replace these with actual colors */}
              <button className="w-8 h-8 rounded border border-gray-300 bg-white"></button>
              <button className="w-8 h-8 rounded border border-gray-300 bg-gray-300"></button>
              <button className="w-8 h-8 rounded border border-gray-300 bg-black"></button>
            </div>
          </div>

          {/* Size selector placeholder */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-700">Size</p>
            <div className="flex flex-wrap gap-2">
              {['40', '41', '42', '43', '44'].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border border-gray-300 rounded hover:border-[#111111]"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart button */}
          <button className="w-full mt-4 bg-[#111111] text-white py-3 rounded-full hover:bg-[#333333] transition">
            Add to Cart
          </button>

          <p className="text-xs text-gray-500 flex items-center gap-2">
            <span>🚚</span> Free delivery on orders over $30
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
