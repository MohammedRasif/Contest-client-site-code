import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MdOutlineStar } from "react-icons/md";
import { LuBadgeDollarSign } from "react-icons/lu";


import img1 from "../../../image/frozen-red-fantasy-nature-blizzard-hd-wallpaper-preview.jpg"
import img2 from "../../../image/banner/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg"
import img3 from "../../../image/banner/moana-s85ecs0v8hng5rpd.jpg"
import img4 from "../../../image/banner/cartoons-epic-movie-movies-wallpaper-preview.jpg"
import img5 from "../../../image/banner/amazing-rio-movie-wallpaper-preview.jpg"
import img6 from "../../../image/dreamworks-movie-turbo-wallpaper-preview.jpg"
import img7 from "../../../image/movies-hollywood-movies-wallpaper-preview.jpg"
import img8 from "../../../image/banner/10825285.jpg"

const SpotLight = () => {
    return (
        <div className='mt-20'>
            <div className="flex items-center mb-20">
                <MdOutlineStar className="text-4xl mr-4 text-blue-500"></MdOutlineStar>
                <h1 className="text-4xl">SPOTLIGHT THIS MONTH</h1>
            </div>
            
            <Swiper
         slidesPerView={4}
         spaceBetween={30}
         centeredSlides={true}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination]}
         className="mySwiper"
       >
      >
        <SwiperSlide><img src={img1} className='h-80 w-64'  alt="" />
        <h1 className='text-xl text-blue-500 font-bold uppercase mt-5 ml-5 mb-1'>frozen red fantasy</h1>
        <div className='flex items-center ml-10 mb-5'>
            <MdOutlineStar className='font-bold text-blue-500 mr-2'></MdOutlineStar>
            <h1>9.0</h1>
            <div className='flex items-center ml-16'>
                    <h1 className='text-blue-500'>Animation</h1>
            </div>
            
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img2} className='h-80 w-64' alt="" />
        <h1 className='text-xl text-blue-500 font-bold uppercase mt-5 ml-20 mb-1'>avatar</h1>
        <div className='flex items-center ml-10 mb-5'>
            <MdOutlineStar className='font-bold text-blue-500 mr-2'></MdOutlineStar>
            <h1>9.4</h1>
            <div className='flex items-center ml-16'>
                           <h1 className='text-blue-500'>Animation</h1>

            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img3} className='h-80 w-64'alt="" />
        <h1 className='text-xl text-blue-500 font-bold uppercase mt-5 ml-20 mb-1'>Moana</h1>
        <div className='flex items-center ml-10 mb-5'>
            <MdOutlineStar className='font-bold text-blue-500 mr-2'></MdOutlineStar>
            <h1>8.4</h1>
            <div className='flex items-center ml-16'>
                           <h1 className='text-blue-500'>Animation</h1>

            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img4} className='h-80 w-64'alt="" />
        <h1 className='text-xl text-blue-500 font-bold uppercase mt-5 ml-28 mb-1'>epic</h1>
        <div className='flex items-center ml-10 mb-5'>
            <MdOutlineStar className='font-bold text-blue-500 mr-2'></MdOutlineStar>
            <h1>8.9</h1>
            <div className='flex items-center ml-16'>
                           <h1 className='text-blue-500'>Animation</h1>

            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img5} className='h-80 w-64'alt="" />
        <h1 className='text-xl text-blue-500 font-bold uppercase mt-5 ml-28 mb-1'>rio</h1>
        <div className='flex items-center ml-10 mb-5'>
            <MdOutlineStar className='font-bold text-blue-500 mr-2'></MdOutlineStar>
            <h1>9.0</h1>
            <div className='flex items-center ml-16'>
                           <h1 className='text-blue-500'>Animation</h1>

            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img6} className='h-80 w-64' alt="" />
        <h1 className='text-xl text-blue-500 font-bold uppercase mt-5 ml-20 mb-1'>turbo</h1>
        <div className='flex items-center ml-10 mb-5'>
            <MdOutlineStar className='font-bold text-blue-500 mr-2'></MdOutlineStar>
            <h1>9.1</h1>
            <div className='flex items-center ml-16'>
                           <h1 className='text-blue-500'>Animation</h1>

            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img7} className='h-80 w-64'alt="" />
        <h1 className='text-xl text-blue-500 font-bold uppercase mt-5 ml-28 mb-1'>epic</h1>
        <div className='flex items-center ml-10 mb-5'>
            <MdOutlineStar className='font-bold text-blue-500 mr-2'></MdOutlineStar>
            <h1>8.9</h1>
            <div className='flex items-center ml-16'>
                           <h1 className='text-blue-500'>Animation</h1>

            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img8} className='h-80 w-64'alt="" />
        <h1 className='text-xl text-blue-500 font-bold uppercase mt-5 ml-20 mb-1'>megamind</h1>
        <div className='flex items-center ml-10 mb-5'>
            <MdOutlineStar className='font-bold text-blue-500 mr-2'></MdOutlineStar>
            <h1>8.4</h1>
            <div className='flex items-center ml-16'>
                           <h1 className='text-blue-500'>Animation</h1>

            </div>
        </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default SpotLight;