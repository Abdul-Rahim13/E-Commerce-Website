import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsDetails } from '../store/slices/fetchProductDetails'
import { useParams } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton'

function ProductDetails() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { data: product, isLoading } = useSelector((state) => state.productDetails)

  useEffect(() => {
    dispatch(fetchProductsDetails(id))
  }, [dispatch, id])

  // Skeleton while loading
  if (isLoading || !product) {
    return (
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-sm rounded-2xl p-6">
            {/* Image skeleton */}
            <div className="bg-gray-100 rounded-xl flex items-center justify-center">
              <Skeleton variant="rectangular" width={250} height={250} sx={{ bgcolor: '#f0f0f0' }} />
            </div>

            {/* Info skeleton */}
            <div className="space-y-4">
              <Skeleton variant="text" width="60%" height={30} sx={{ bgcolor: '#f0f0f0' }} />
              <Skeleton variant="text" width="80%" height={25} sx={{ bgcolor: '#f0f0f0' }} />
              <Skeleton variant="text" width="40%" height={20} sx={{ bgcolor: '#f0f0f0' }} />
              <Skeleton variant="rectangular" width="100%" height={50} sx={{ bgcolor: '#f0f0f0', borderRadius: '8px' }} />
              <Skeleton variant="rectangular" width="100%" height={50} sx={{ bgcolor: '#f0f0f0', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Actual content
  return (
    <div className="bg-gray-50 min-h-screen py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        {/* Sticky Product Card */}
        <div className=" bg-gray-50 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-sm rounded-2xl p-6">
            {/* Product image */}
            <div className="flex items-center justify-center bg-gray-100 rounded-xl">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-[250px] object-contain p-6"
              />
            </div>

            {/* Product info */}
            <div className="space-y-5">
              <div>
                <h2 className="text-sm uppercase tracking-wide text-gray-500">{product.category}</h2>
                <h1 className="mt-2 text-2xl font-bold text-gray-900">{product.title}</h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="text-sm text-gray-500">42 reviews</span>
              </div>

              {/* Price */}
              <p className="text-2xl font-semibold text-gray-900">${product.price}</p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-sm">{product.description}</p>

              {/* Color selector */}
              <div>
                <p className="text-sm font-medium text-gray-700">Color</p>
                <div className="flex gap-3 mt-1">
                  <button className="w-6 h-6 rounded-full border border-gray-300 bg-white hover:ring-2 hover:ring-gray-400"></button>
                  <button className="w-6 h-6 rounded-full border border-gray-300 bg-gray-300 hover:ring-2 hover:ring-gray-400"></button>
                  <button className="w-6 h-6 rounded-full border border-gray-300 bg-black hover:ring-2 hover:ring-gray-400"></button>
                </div>
              </div>

              {/* Size selector */}
              <div>
                <p className="text-sm font-medium text-gray-700">Size</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['40', '41', '42', '43', '44'].map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1 border border-gray-300 rounded-md hover:border-black focus:border-black focus:ring-2 focus:ring-black text-sm"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to cart */}
              <button className="w-full bg-black text-white py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition">
                Add to Cart
              </button>

              <p className="text-xs text-gray-500 flex items-center gap-2">
                <span>🚚</span> Free delivery on orders over $30
              </p>
            </div>
          </div>
        </div>

        {/* Reviews (scrollable area) */}
        <div className="bg-white shadow-sm rounded-2xl p-6 max-h-[400px] overflow-y-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Reviews</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((r) => (
              <div key={r} className="border-b pb-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-800">User {r}</span>
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  This product is amazing! Quality exceeded expectations. Shipping was fast too.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
