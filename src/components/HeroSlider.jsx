import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import clark from '../assets/clark-street.jpg'
import hanson from '../assets/hanson.jpg'
import becca from '../assets/becca.jpg'
import tessa from '../assets/tessa.jpg'
import segal from '../assets/segal.jpg'
import omid from '../assets/omid.jpg'

function HeroSlider() {
  return (
    <div className="w-full bg-[#FAFAFA] py-6"> 
      <div className="mx-auto w-[80%] max-w-5xl h-[350px]"> 
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass:
              'custom-bullet inline-block w-3 h-3 bg-gray-300 rounded-full mx-1 transition-colors',
            bulletActiveClass: 'bg-black',
          }}
          className="w-full h-full rounded-xl overflow-hidden shadow" 
        >
          {[clark, hanson, becca, tessa, segal, omid].map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                className="h-full w-full object-cover bg-white"
              />
            </SwiperSlide>
          ))}

          <div className="custom-pagination flex justify-center mt-2"></div>
          
        </Swiper>
      </div>
    </div>
  )
}

export default HeroSlider
