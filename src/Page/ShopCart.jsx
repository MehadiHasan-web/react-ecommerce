import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ShopCart = ({data}) => {

  const [wishlist, setWishlist] = useState(false)

  return (
    <div className="relative">
      <img src={data.photo} className="h-36 sm:h-40 md:h-36 lg:h-40 xl:h-52 w-full"></img>
      <ul className="my-2 flex justify-between items-center">
        <li className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-lg font-semibold">{data.name}</li>
        <li className="text-[13px] sm:text-sm md:text-[13px] lg:text-xs xl:text-lg font-bold">${data.price}</li>
      </ul>
      <ul className="my-2 flex justify-between items-center">
        <li className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base text-slate-500">{data.color} Colors</li>
        <li className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base text-slate-500">${data.price}</li>
      </ul>
      <button className="btn btn-xs sm:btn-xs md:btn-xs lg:btn-sm xl:btn-sm bg-red-500 text-white hover:bg-red-500 w-full">Add To Cart</button>
      <div className="absolute top-5 left-2 right-2 flex justify-between">
      <button className="btn btn-xs btn-error text-white uppercase text-[9px]text-[10px] md:text-[11px] lg:text-[9px] xl:text-xs">sale</button>
      {
        wishlist ? <FaHeart onClick={() => setWishlist(!wishlist)} className="text-red-500 text-sm sm:text-sm lg:text-sm xl:text-xl"></FaHeart> : <FaRegHeart onClick={() => setWishlist(!wishlist)} className="text-red-500 text-sm sm:text-sm lg:text-sm xl:text-xl"></FaRegHeart>
      }
      
      </div>
    </div>
  );
};

export default ShopCart;