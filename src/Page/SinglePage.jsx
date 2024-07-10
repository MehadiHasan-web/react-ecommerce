import { useState } from "react";
import image from "../../public/singleImg.png";
import {
  FaDotCircle,
  FaDownload,
  FaRegHeart,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SinglePage = () => {
  const [quantity, setQuantity] = useState(1);

  //incrementQuantity
  const incrementQuantity = (data) => {
    if (data) {
      setQuantity(data + 1);
    }
  };
  //decrementQuantity
  const decrementQuantity = (data) => {
    if (data > 0) {
      setQuantity(data - 1);
    }
  };

  return (
    <div className="mt-5">
      {/* content section start */}
      <div className="container mx-auto">
        {/* items section start */}
        <div className="sm:flex sm:justify-between gap-8">
          {/* left item section start */}
          <div className="w-full sm:w-[50%]">
            <img
              src={image}
              className="w-full h-44 sm:h-56 md:h-52 lg:h-60 xl:h-80 rounded-xl"
            ></img>
            <div className="overflow-hidden mt-3">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                '@1.50': {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
              <img
              src={image}
              className="w-full h-20 rounded-xl"
            ></img>
              </SwiperSlide>
              <SwiperSlide>
              <img
              src={image}
              className="w-full h-20 rounded-xl"
            ></img>
              </SwiperSlide>
              <SwiperSlide>
              <img
              src={image}
              className="w-full h-20 rounded-xl"
            ></img>
              </SwiperSlide>
              <SwiperSlide>
              <img
              src={image}
              className="w-full h-20 rounded-xl"
            ></img>
              </SwiperSlide>
              <SwiperSlide>
              <img
              src={image}
              className="w-full h-20 rounded-xl"
            ></img>
              </SwiperSlide>
              <SwiperSlide>
              <img
              src={image}
              className="w-full h-20 rounded-xl"
            ></img>
              </SwiperSlide>
            </Swiper>
            </div>
          </div>
          {/* left item section end */}
          {/* right item section start */}
          <div className="w-full sm:w-[50%] space-y-4 xl:space-y-5 mt-5 sm:mt-0">
            {/* title section start */}
            <h3 className="text-base sm:text-lg md:text-base lg:text-xl xl:text-4xl">
              Bang & Olufsen BeoPlay A1 2nd Gen Portable Speaker
            </h3>
            {/* title section end */}
            {/* color button section start */}
            <ul className="flex gap-3">
              <li>
                <FaDotCircle className="text-red-500 text-base sm:text-lg md:text-base lg:text-lg xl:text-3xl"></FaDotCircle>
              </li>
              <li>
                <FaDotCircle className="text-blue-500 text-base sm:text-lg md:text-base lg:text-lg xl:text-3xl"></FaDotCircle>
              </li>
              <li>
                <FaDotCircle className="text-orange-500 text-base sm:text-lg md:text-base lg:text-lg xl:text-3xl"></FaDotCircle>
              </li>
              <li>
                <FaDotCircle className="text-black text-base sm:text-lg md:text-base lg:text-lg xl:text-3xl"></FaDotCircle>
              </li>
              <li>
                <FaDotCircle className="text-pink-500 text-base sm:text-lg md:text-base xl:text-3xl"></FaDotCircle>
              </li>
            </ul>
            {/* color button section end */}
            {/* price and button section start */}
            <div className="flex justify-between items-center">
              {/* price section start */}
              <p className="text-base sm:text-lg md:text-base lg:text-xl xl:text-3xl font-semibold">
                $210.00-$250.00
              </p>
              {/* price section end */}
              {/* button section start */}
              <ul className="flex gap-3">
                <li className="border-[1px] border-black p-1 sm:p-1 md:p-1 lg:p-2 xl:p-2 rounded-md">
                  <FaDownload></FaDownload>
                </li>
                <li className="border-[1px] border-black p-1 sm:p-1 md:p-1 lg:p-2 xl:p-2 rounded-md">
                  <FaRegHeart></FaRegHeart>
                </li>
              </ul>
              {/* button section end */}
            </div>
            {/* price and button section end */}
            {/* select (size and color) section start */}
            <div className="flex gap-5 justify-between items-center">
              {/* size section start */}
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Size
                </option>
                <option value="volvo">Xl</option>
                <option value="volvo">2Xl</option>
                <option value="volvo">3Xl</option>
              </select>
              {/* size section end */}
              {/* color section start */}
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Color
                </option>
                <option value="volvo">Red</option>
                <option value="volvo">Green</option>
                <option value="volvo">Yellow</option>
              </select>
              {/* color section end */}
            </div>
            {/* select (size and color) section end */}
            {/* select shipping section start */}
            <select className="select select-bordered w-full">
              <option disabled selected>
                Shipping Information
              </option>
              <option value="volvo">Cargo</option>
              <option value="volvo">Ship</option>
              <option value="volvo">Taller</option>
            </select>
            {/* select shipping section end */}
            {/* quantity & cart button section start */}
            <div className="md:flex md:justify-between md:items-center gap-1 lg:gap-2 xl:gap-3">
              <ul className="flex items-center justify-between gap-2 w-full">
                <li className="text-sm sm:text-base md:text-xs lg:text-sm xl:text-lg">
                  Quantity (pieces)
                </li>
                <li className="flex gap-3 md:gap-2 xl:gap-5 items-center border-[1px] border-black px-4 md:px-2 lg:px-3 xl:px-4 py-1 md:py-[6px] rounded-md">
                  <FaMinus
                    className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base"
                    onClick={() => decrementQuantity(quantity)}
                  ></FaMinus>
                  <span className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base">
                    {quantity}
                  </span>
                  <FaPlus
                    className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base"
                    onClick={() => incrementQuantity(quantity)}
                  ></FaPlus>
                </li>
              </ul>
              <button
                type="button"
                className="bg-slate-900 w-full p-2 text-white rounded-md mt-3 md:mt-0 text-xs md:text-[9px] lg:text-[13px] xl:text-base"
              >
                Add to Cart
              </button>
            </div>
            {/* quantity & cart button section end */}
          </div>
          {/* right item section end */}
        </div>
        {/* items section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default SinglePage;
