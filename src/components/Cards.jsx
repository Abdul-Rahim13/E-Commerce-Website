import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/slices/fetchProduct'
import { NavLink } from 'react-router-dom'

function Cards() {
  const dispatch = useDispatch()
  const { data: products } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="bg-[#FAFAFA] py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative group bg-white border border-[#E5E5E5] rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Card content */}
            <div className="p-4 relative z-10">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-green-600 font-bold">${item.price}</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  ⭐ {item.rating.rate} ({item.rating.count})
                </span>
              </div>

              <p className="text-xs text-gray-400 mt-1">{item.category}</p>

              {/* Blur + dark overlay*/}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
            </div>

            {/* Edit/Delete buttons appear above blur */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
              <NavLink to={`/edit/${item.id}`}>
                <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition">
                  Edit
                </button>
              </NavLink>
              <NavLink to={`/delete/${item.id}`}>
                <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition">
                  Delete
                </button>
              </NavLink>
            </div>
              {/* “View Details” stays clickable */}
              <NavLink to={`/product-details/${item.id}`}>
                  <button className="relative z-30 mt-3 w-full bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800">
                     View Details
                  </button>
                </NavLink>
            </div>

            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
