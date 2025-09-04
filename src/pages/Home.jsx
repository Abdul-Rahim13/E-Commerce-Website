import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import NavBar from '../components/NavBar'
import HeroSlider from '../components/HeroSlider'
import Cards from '../components/Cards'

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen">
        {/* NavBar skeleton */}
        <div className="bg-white px-8 py-4 flex items-center justify-between">
          {/* Logo skeleton */}
          <Skeleton variant="text" width={60} sx={{ bgcolor: '#f0f0f0' }} />

          {/* Searchbar skeleton */}
          <Skeleton
            variant="rectangular"
            width={250}
            height={36}
            sx={{ borderRadius: 9999, bgcolor: '#f0f0f0' }}
          />

          {/* Icons skeleton */}
          <div className="flex gap-6">
            <Skeleton variant="circular" width={30} height={30} sx={{ bgcolor: '#f0f0f0' }} />
            <Skeleton variant="circular" width={30} height={30} sx={{ bgcolor: '#f0f0f0' }} />
          </div>
        </div>

        {/* Categories skeleton */}
        <div className="flex justify-center gap-6 py-2 bg-gray-100">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} variant="text" width={50} sx={{ bgcolor: '#f0f0f0' }} />
          ))}
        </div>

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
              <div
                key={i}
                className="border border-[#E5E5E5] rounded-xl p-4 bg-white"
              >
                {/* image */}
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
      </div>
    )
  }

  return (
    <div className="bg-[#FAFAFA]">
      <NavBar />
      <HeroSlider />
      <Cards />
    </div>
  )
}

export default Home
