import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { searchProducts } from '../store/slices/searchProducts'
import { useDispatch } from 'react-redux'

function NavBar({ loading }) {
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    dispatch(searchProducts(e.target.value))
  }

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* top row */}
      <div className="flex items-center justify-between px-8 py-4">
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
            onChange={handleSearch}
            placeholder="Search"
            className="w-full rounded-full bg-[#F3F2ED] px-12 py-2
                      text-[#111111] placeholder-[#6C6C6C]
                      border border-[#E5E5E5]
                      focus:outline-none focus:ring-2 focus:ring-black"
          />
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
