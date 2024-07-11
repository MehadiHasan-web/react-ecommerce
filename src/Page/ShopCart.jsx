import { FaRegHeart } from "react-icons/fa";

const ShopCart = ({data}) => {
  return (
    <div className="relative">
      <img src={data.photo} className="h-56 w-full"></img>
      <ul className="my-2 flex justify-between items-center">
        <li className="xl:text-lg font-semibold">{data.name}</li>
        <li className="xl:text-lg font-bold">${data.price}</li>
      </ul>
      <ul className="my-2 flex justify-between items-center">
        <li className="xl:text-base text-slate-500">{data.color} Colors</li>
        <li className="xl:text-base text-slate-500">${data.price}</li>
      </ul>
      <button className="btn btn-sm bg-red-500 text-white hover:bg-red-500 w-full">Add To Cart</button>
      <div className="absolute top-5 left-2 right-2 flex justify-between">
      <button className="btn btn-xs btn-error text-white uppercase">sale</button>
      <FaRegHeart></FaRegHeart>
      </div>
    </div>
  );
};

export default ShopCart;