import { useEffect, useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'

function NavBar() {
  const [searchValue, setSearchValue] = useState('')
  const [results, setResults] = useState([])
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async () => {
    if (searchValue.trim() === '') {
      setResults([])
      setHighlightIndex(-1)
      return
    }
    try {
      setLoading(true)
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(searchValue)}`
      )
      setResults(res.data.products)
      setHighlightIndex(-1)
    } catch (err) {
      console.error(err)
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [searchValue])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const visibleResults = results.slice(0, 7) 

  // handle keyboard navigation
  const handleKeyDown = (e) => {
    if (visibleResults.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightIndex((prev) =>
        prev < visibleResults.length - 1 ? prev + 1 : 0
      )
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightIndex((prev) =>
        prev > 0 ? prev - 1 : visibleResults.length - 1
      )
    }
    if (e.key === 'Enter') {
      if (highlightIndex >= 0 && highlightIndex < visibleResults.length) {
        setSearchValue(visibleResults[highlightIndex].title)
        setResults([])
      }
    }
  }

  const handleClickSuggestion = (title) => {
    setSearchValue(title)
    setResults([])
  }

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-8 py-4 relative">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#111111]">BR.</h1>
          <h1 className="text-2xl font-extrabold tracking-tight text-[#D8D7C3]">F</h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#6C6C6C]"
          />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search"
            className="w-full rounded-full bg-[#F3F2ED] px-12 py-2
                      text-[#111111] placeholder-[#6C6C6C]
                      border border-[#E5E5E5]
                      focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Suggestion dropdown */}
          {searchValue.trim() !== '' && visibleResults.length > 0 && (
            <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
              {visibleResults.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => handleClickSuggestion(item.title)}
                  className={`px-4 py-2 text-sm cursor-pointer ${
                    index === highlightIndex
                      ? 'bg-gray-100 text-black'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}

          {loading && searchValue.trim() !== '' && visibleResults.length === 0 && (
            <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="px-4 py-2 text-sm text-gray-500">Loading…</div>
            </div>
          )}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-6">
          <div className="relative flex flex-col items-center">
            <FontAwesomeIcon icon={faCartShopping} className="text-[#111111]" />
            <span className="mt-1 text-xs text-[#6C6C6C] font-semibold">Cart</span>
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-[#FEC84B] ring-2 ring-white" />
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faHeart} className="text-[#111111]" />
            <span className="mt-1 text-xs text-[#6C6C6C] font-semibold">Favorites</span>
          </div>
        </div>
      </div>

      {/* Categories row */}
      <nav className="border-t border-[#E5E5E5] px-8">
        <ul className="flex gap-6 py-2 text-sm justify-center">
          <li className="cursor-pointer text-[#111111] hover:text-[#6C6C6C] font-semibold">Women</li>
          <li className="cursor-pointer text-[#111111] hover:text-[#6C6C6C] font-semibold">Men</li>
          <li className="cursor-pointer text-[#111111] hover:text-[#6C6C6C] font-semibold">Kids</li>
          <li className="cursor-pointer text-[#111111] hover:text-[#6C6C6C] font-semibold">Sports</li>
          <li className="cursor-pointer text-[#111111] hover:text-[#6C6C6C] font-semibold">Brands</li>
          <li className="cursor-pointer text-[#111111] hover:text-[#6C6C6C] font-semibold">New</li>
          <li className="cursor-pointer text-[#E63946] font-semibold">Sale</li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
