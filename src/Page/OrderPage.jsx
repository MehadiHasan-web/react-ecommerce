import product from '../../public/shopCart/1.png'
import product2 from '../../public/shopCart/3.png'

const OrderPage = () => {
  return (
    <div className="mt-5 p-3 sm:p-5">
      {/* content section start */}
      <div className="container mx-auto">
        {/* form section start */}
        <form>
          <div className="md:flex md:justify-between md:gap-3">
            {/* userData section start */}
            <div className="w-full md:w-[55%] lg:w-[60%] bg-base-100 rounded-lg p-5 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name:</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={"xcode"}
                    placeholder="enter your name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email:</span>
                  </label>
                  <input
                    type="email"
                    defaultValue={"xcode@gmail.com"}
                    placeholder="enter your email"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Thana:</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={"CEPZ"}
                    placeholder="enter your thana"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">City:</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={"Chattagram"}
                    placeholder="enter your city"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address:</span>
                  </label>
                  <textarea
                    placeholder="Enter your Address"
                    className="textarea textarea-bordered textarea-md w-full"
                  ></textarea>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 lg:gap">
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone:</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={""}
                    placeholder="enter your phone number"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            {/* userData section end */}
            {/* card section start */}
            <div className="w-full mt-10 md:w-[45%] lg:w-[40%]">
              <div className="p-3 sm:p-5 bg-base-100 rounded-lg shadow-lg">
                {/* data section start */}
                <ul className="flex justify-between items-center mb-4">
                  <li className='relative'>
                    <img src={product} className='w-14 h-12 sm:w-20 sm:h-14 md:w-14 md:h-12 lg:w-20 lg:h-12 xl:w-24 xl:h-14 rounded-md border-[1px] border-slate-300'></img>
                    <p className='border-[1px] border-slate-400 rounded-full w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 flex justify-center items-center absolute -top-3 -right-3 bg-white text-xs lg:text-xs xl:text-sm'>1</p>
                  </li>
                  <li>
                    <p className="text-[10px] sm:text-sm md:text-[11px] lg:text-xs xl:text-base font-semibold">Dunk Low Light Bone</p>
                    <p className="text-[10px] sm:text-sm md:text-[11px] lg:text-xs xl:text-base text-slate-500">36 EU - 4 Us</p>
                  </li>
                  <li className="text-[11px] sm:text-sm md:text-xs lg:text-xs xl:text-base font-bold">$1400.00</li>
                </ul>

                {/* data section start */}
                {/* divider section start */}
                <div className="divider"></div>
                {/* divider section end */}
                {/* subtotal and shipping section start */}
                <ul className='space-y-1'>
                  <li className='flex items-center justify-between'>
                    <p className='text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-slate-400 font-medium'>Subtotal</p>
                    <p className='text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-black font-semibold'>$3000.00</p>
                  </li>
                  <li className='flex items-center justify-between'>
                    <p className='text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-slate-400 font-medium'>Shipping</p>
                    <p className='text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-black font-semibold'>$800.00</p>
                  </li>
                </ul>
                {/* subtotal and shipping section end */}
                {/* divider section start */}
                <div className="divider"></div>
                {/* divider section end */}
                {/* total section start */}
                <ul>
                  <li className='flex items-center justify-between'>
                    <p className='text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-medium'>Total</p>
                    <p><span className='text-sm text-slate-400'>EUR</span><span className='text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl ml-2'>$3000.00</span></p>
                  </li>
                </ul>
                {/* total section end */}
                {/* button section start */}
                <button className="btn btn-sm btn-neutral w-full mt-4">Order Now</button>
                {/* button section end */}
              </div>
            </div>
            {/* section end */}
          </div>
        </form>

        {/* form section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default OrderPage;
