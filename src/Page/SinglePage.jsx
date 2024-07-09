import { useState } from "react";
import image from "../../public/singleImg.png";
import { FaDotCircle, FaDownload, FaRegHeart, FaPlus, FaMinus } from "react-icons/fa";

const SinglePage = () => {

  const [quantity, setQuantity] = useState(1)

  //incrementQuantity
  const incrementQuantity = (data) => {
    if(data){
      setQuantity(data + 1)
    }
  }
  //decrementQuantity
  const decrementQuantity = (data) => {
    if(data > 0){
      setQuantity(data - 1)
    }
  }

  return (
    <div className="mt-5">
      {/* content section start */}
      <div className="container mx-auto">
        {/* items section start */}
        <div className="sm:flex sm:justify-between gap-8">
          {/* left item section start */}
          <div className="w-full sm:w-[50%]">
            <img src={image} className="w-full h-96 rounded-xl"></img>
            <ul className="flex gap-3 mt-3">
              <li>
              <img src={image} className="w-24 h-20 rounded-xl"></img>
              </li>
              <li>
              <img src={image} className="w-24 h-20 rounded-xl"></img>
              </li>
              <li>
              <img src={image} className="w-24 h-20 rounded-xl"></img>
              </li>
              <li>
              <img src={image} className="w-24 h-20 rounded-xl"></img>
              </li>
              <li>
              <img src={image} className="w-24 h-20 rounded-xl"></img>
              </li>
              <li>
              <img src={image} className="w-24 h-20 rounded-xl"></img>
              </li>
            </ul>
          </div>
          {/* left item section end */}
          {/* right item section start */}
          <div className="w-full sm:w-[50%] space-y-4">
            {/* title section start */}
            <h3 className="text-[40px]">
              Bang & Olufsen BeoPlay A1 2nd Gen Portable Speaker
            </h3>
            {/* title section end */}
            {/* color button section start */}
            <ul className="flex gap-3">
              <li>
                <FaDotCircle className="btn text-red-500 text-[27px]"></FaDotCircle>
              </li>
              <li>
                <FaDotCircle className="btn text-blue-500 text-[27px]"></FaDotCircle>
              </li>
              <li>
                <FaDotCircle className="btn text-orange-500 text-[27px]"></FaDotCircle>
              </li>
              <li>
                <FaDotCircle className="btn text-black text-[27px]"></FaDotCircle>
              </li>
              <li>
                <FaDotCircle className="btn text-pink-500 text-[27px]"></FaDotCircle>
              </li>
            </ul>
            {/* color button section end */}
            {/* price and button section start */}
            <div className="flex justify-between items-center">
              {/* price section start */}
              <p className="xl:text-2xl font-semibold">$210.00-$250.00</p>
              {/* price section end */}
              {/* button section start */}
              <ul className="flex gap-3">
                <li className="border-[1px] border-black p-2 rounded-md">
                  <FaDownload></FaDownload>
                </li>
                <li className="border-[1px] border-black p-2 rounded-md">
                  <FaRegHeart></FaRegHeart>
                </li>
              </ul>
              {/* button section end */}
            </div>
            {/* price and button section end */}
            {/* select (size and color) section start */}
            <div className="flex gap-5 justify-between items-center">
              {/* size section start */}
              <select name="cars" id="cars" className="w-full bg-slate-200 p-1">
                <option disabled selected>Size</option>
                <option value="volvo">Xl</option>
                <option value="volvo">2Xl</option>
                <option value="volvo">3Xl</option>
              </select>
              {/* size section end */}
              {/* color section start */}
              <select name="cars" id="cars" className="w-full bg-slate-200 p-1">
                <option disabled selected>Color</option>
                <option value="volvo">Red</option>
                <option value="volvo">Green</option>
                <option value="volvo">Yellow</option>
              </select>
              {/* color section end */}
            </div>
            {/* select (size and color) section end */}
            {/* select shipping section start */}
            <select name="cars" id="cars" className="w-full bg-slate-200 p-1">
                <option disabled selected>Shipping Information</option>
                <option value="volvo">Cargo</option>
                <option value="volvo">Ship</option>
                <option value="volvo">Taller</option>
              </select>
            {/* select shipping section end */}
            {/* quantity & cart button section start */}
            <div className="flex justify-between items-center">
              <ul className="flex items-center gap-2 w-full">
                <li>Quantity (pieces)</li>
                <li className="flex gap-5 items-center border-[1px] border-black px-4 py-1 rounded-md"><FaMinus onClick={() => decrementQuantity(quantity)}></FaMinus><span>{quantity}</span><FaPlus onClick={() => incrementQuantity(quantity)}></FaPlus></li>
              </ul>
              <button type="button" className="btn bg-slate-900 w-full p-2 text-white rounded-md">Add to Cart</button>
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
