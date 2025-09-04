import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import NavBar from '../components/NavBar'
import HeroSlider from '../components/HeroSlider'

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="bg-[#FAFAFA]">
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
      </div>
    )
  }

  return (
    <div className="bg-[#FAFAFA]">
      <NavBar />
      <HeroSlider />
    </div>
  )
}

export default Home
