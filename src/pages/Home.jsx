import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import NavBar from '../components/NavBar'
import HeroSlider from '../components/HeroSlider'
import Cards from '../components/Cards'
import { NavLink } from 'react-router-dom'

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-[#FAFAFA] relative min-h-screen">
      
      {loading ? (
        <>
          {/* HeroSlider skeleton */}
          <div className="mx-auto w-[80%] max-w-5xl mt-4">
            <Skeleton
              variant="rounded"
              height={350}
              animation="wave"
              sx={{ bgcolor: '#f0f0f0' }}
            />
          </div>

          {/* Cards skeleton */}
          <div className="mx-auto w-[80%] max-w-6xl mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl p-4 bg-white">
                  <Skeleton
                    variant="rectangular"
                    height={150}
                    animation="wave"
                    sx={{ bgcolor: '#f0f0f0' }}
                  />
                  <div className="mt-3 space-y-2">
                    <Skeleton
                      variant="text"
                      width="80%"
                      animation="wave"
                      sx={{ bgcolor: '#f0f0f0' }}
                    />
                    <Skeleton
                      variant="text"
                      width="40%"
                      animation="wave"
                      sx={{ bgcolor: '#f0f0f0' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <HeroSlider />
          <Cards />

          {/* Floating Add Product Button */}
          <NavLink to="/add-product">
            <button className="fixed bottom-6 right-6 bg-[#111111] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#333333] transition">
              + Add Product
            </button>
          </NavLink>
        </>
      )}
    </div>
  )
}

export default Home
