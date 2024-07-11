import { useEffect, useState } from "react";
import ShopCart from "./ShopCart";

const ShopPage = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    fetch("shopCart.json")
      .then((res) => res.json())
      .then((data) => setShopData(data));
  }, []);

  return (
    <div className="mt-5">
      {/* content section start */}
      <div className="container mx-auto px-2">
        {/* items section start */}
        <div className="md:flex md:justify-between md:gap-5">
          {/* shopSidebar section start */}
          <div className="hidden md:block md:w-[20%]">
            <div className="border-base-300 border p-5">
              <details className="collapse collapse-arrow  rounded-md border-base-300">
                <summary className="collapse-title text-sm bg-slate-100 font-medium ">
                  Men
                </summary>
                <div className="collapse-content py-2">
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2"><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /><span className="text-sm">one</span></li>
                    <li className="flex items-center gap-2"><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /><span className="text-sm">two</span></li>
                  </ul>
                </div>
              </details>
              <details className="collapse collapse-arrow  rounded-md border-base-300 border">
                <summary className="collapse-title text-base bg-slate-100 font-medium">
                  Kinds
                </summary>
                <div className="collapse-content py-2">
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2"><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /><span className="text-sm">one</span></li>
                    <li className="flex items-center gap-2"><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /><span className="text-sm">two</span></li>
                  </ul>
                </div>
              </details>
              <details className="collapse collapse-arrow  rounded-md border-base-300 border">
                <summary className="collapse-title text-base bg-slate-100 font-medium">
                  Brands
                </summary>
                <div className="collapse-content py-2">
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2"><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /><span className="text-sm">one</span></li>
                    <li className="flex items-center gap-2"><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /><span className="text-sm">two</span></li>
                  </ul>
                </div>
              </details>
              <details className="collapse collapse-arrow  rounded-md border-base-300 border">
                <summary className="collapse-title text-base bg-slate-100 font-medium">
                  Price
                </summary>
                <div className="collapse-content py-2">
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2"><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /><span className="text-sm">one</span></li>
                    <li className="flex items-center gap-2"><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /><span className="text-sm">two</span></li>
                  </ul>
                </div>
              </details>
              <details className="collapse collapse-arrow  rounded-md border-base-300 border">
                <summary className="collapse-title text-base bg-slate-100 font-medium">
                  Size
                </summary>
                <div className="collapse-content py-2">
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2"><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /><span className="text-sm">one</span></li>
                    <li className="flex items-center gap-2"><input type="checkbox" defaultChecked className="checkbox checkbox-sm" /><span className="text-sm">two</span></li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
          {/* shopSidebar section end */}
          {/* shopProducts section start */}
          <div className="w-full md:w-[80%]">
            {/* items data show and sorting start */}
            <div className="flex justify-stretch items-center">
              {/* items data show start */}
              <div className="w-[50%]">
                <p className="text-xs sm:text-sm md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl">
                  Showing 9 results from total 37 for "tops"
                </p>
              </div>
              {/* items data show end */}
              {/* sorting section start */}
              <div className="w-[50%] flex justify-end items-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-3">
                <span className="text-xs sm:text-sm md:text-[13px] lg:text-base xl:text-lg 2xl:text-xl font-semibold">
                  Sort by
                </span>
                <select className="select select-bordered select-xs lg:select-sm w-[65%] sm:w-[50%] md:w-[50%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%]">
                  <option disabled selected>
                    Normal
                  </option>
                  <option>Normal Apple</option>
                  <option>Normal Orange</option>
                  <option>Normal Tomato</option>
                </select>
              </div>
              {/* sorting section end */}
            </div>
            {/* items data show and sorting end */}
            {/* filter section start */}
            <div className="my-3 flex justify-start sm:items-center gap-1 w-full">
              {/* title start */}
              <p className="text-sm xl:text-xl w-40">Applied Filters : </p>
              {/* title end */}
              {/* filter data section start */}
              <div className="flex flex-wrap gap-2 w-full">
                {/* 1 */}
                <span className="badge gap-2 p-2">
                  <span className="text-xs xl:text-lg">Tops</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-4 w-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
                {/* 1 */}
                {/* 1 */}
                <div className="badge gap-2 p-2">
                  <span className="text-xs xl:text-lg">Tops</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-4 w-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
                {/* 1 */}
                {/* 1 */}
                <div className="badge gap-2 p-2">
                  <span className="text-xs xl:text-lg">Tops</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-4 w-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
                {/* 1 */}
              </div>
              {/* filter data section end */}
            </div>
            {/* filter section end */}
            {/* cart section start */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-5 2xl:gap-3">
              {shopData.map((data, index) => (
                <ShopCart key={index} data={data}></ShopCart>
              ))}
            </div>
            {/* cart section end */}
          </div>
          {/* shopProducts section end */}
        </div>
        {/* items section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default ShopPage;
