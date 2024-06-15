import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { FaShoppingCart } from "react-icons/fa";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";



import img1 from "../../../image/topDeals/aaaa.jpg"
import img2 from "../../../image/topDeals/cccc.jpeg"
import img3 from "../../../image/topDeals/ooooooo.jpg"
import img4 from "../../../image/topDeals/rrrrrr.jpg"
import img5 from "../../../image/topDeals/tttt.jpg"
import img7 from "../../../image/topDeals/ttjpg.jpg"
import img8 from "../../../image/topDeals/nnnn.jpg"
import img9 from "../../../image/topDeals/sssssss.jpg"

import img10 from "../../../image/topDeals/pixar.png"



const TopDeals = () => {
    return (
        <div className='mt-20'>
            <div className="flex items-center mb-5">
                <FaShoppingCart className="text-4xl mr-4 text-blue-500"></FaShoppingCart>
                <h1 className="text-4xl font-bold">TOP DEALS</h1>
            </div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} className='h-96 w-94' alt="" />
        <div className='bg-blue-500 text-white py-3'>
            <h1 className='text-4xl font-bold uppercase pl-4'>avatar</h1>
            <div className='flex items-center space-x-1 pt-2 text-2xl pl-4'>
                <PiCurrencyCircleDollarBold></PiCurrencyCircleDollarBold>
                <h1>70</h1>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img2} className='h-96 w-94' alt="" />
        <div className='bg-blue-500 text-white py-3'>
            <h1 className='text-4xl font-bold uppercase pl-4'>car</h1>
            <div className='flex items-center space-x-1 pt-2 text-2xl pl-4'>
                <PiCurrencyCircleDollarBold></PiCurrencyCircleDollarBold>
                <h1>75</h1>
            </div>
        </div></SwiperSlide>
        <SwiperSlide><img src={img3} className='h-96 w-94' alt="" />
        <div className='bg-blue-500 text-white py-3'>
            <h1 className='text-4xl font-bold uppercase pl-4'>zootopia</h1>
            <div className='flex items-center space-x-1 pt-2 text-2xl pl-4'>
                <PiCurrencyCircleDollarBold></PiCurrencyCircleDollarBold>
                <h1>99</h1>
            </div>
        </div></SwiperSlide>
        <SwiperSlide><img src={img4} className='h-96 w-94' alt="" />
        <div className='bg-blue-500 text-white py-3'>
            <h1 className='text-4xl font-bold uppercase pl-4'>rio</h1>
            <div className='flex items-center space-x-1 pt-2 text-2xl pl-4'>
                <PiCurrencyCircleDollarBold></PiCurrencyCircleDollarBold>
                <h1>73</h1>
            </div>
        </div></SwiperSlide>
        <SwiperSlide><img src={img5} className='h-96 w-94' alt="" />
        <div className='bg-blue-500 text-white py-3'>
            <h1 className='text-4xl font-bold uppercase pl-4'>mekmah</h1>
            <div className='flex items-center space-x-1 pt-2 text-2xl pl-4'>
                <PiCurrencyCircleDollarBold></PiCurrencyCircleDollarBold>
                <h1>69</h1>
            </div>
        </div></SwiperSlide>
        <SwiperSlide><img src={img7} className='h-96 w-94' alt="" />
        <div className='bg-blue-500 text-white py-3'>
            <h1 className='text-4xl font-bold uppercase pl-4'>turbo</h1>
            <div className='flex items-center space-x-1 pt-2 text-2xl pl-4'>
                <PiCurrencyCircleDollarBold></PiCurrencyCircleDollarBold>
                <h1>80</h1>
            </div>
        </div></SwiperSlide>
        <SwiperSlide><img src={img8} className='h-96 w-94' alt="" />
        <div className='bg-blue-500 text-white py-3'>
            <h1 className='text-4xl font-bold uppercase pl-4'>the good dinosaur</h1>
            <div className='flex items-center space-x-1 pt-2 text-2xl pl-4'>
                <PiCurrencyCircleDollarBold></PiCurrencyCircleDollarBold>
                <h1>80</h1>
            </div>
        </div></SwiperSlide>
        <SwiperSlide><img src={img9} className='h-96 w-94' alt="" />
        <div className='bg-blue-500 text-white py-3'>
            <h1 className='text-4xl font-bold uppercase pl-4'>spider man</h1>
            <div className='flex items-center space-x-1 pt-2 text-2xl pl-4'>
                <PiCurrencyCircleDollarBold></PiCurrencyCircleDollarBold>
                <h1>85</h1>
            </div>
        </div></SwiperSlide>

      </Swiper>

        <img src={img10} className='w-full mt-20 ' alt="" />
        </div>
    );
};

export default TopDeals;