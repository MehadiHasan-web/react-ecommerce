import product from '../../public/shopCart/1.png'

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
              <div className="grid grid-cols-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profile:</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-md w-full"
                  />
                </div>
              </div>
            </div>
            {/* userData section end */}
            {/* card section start */}
            <div className="w-full md:w-[45%] lg:w-[40%]">
              <div className="p-5 bg-base-100 rounded-lg shadow-lg">
                <ul className=" flex  justify-between items-center my-1">
                  <li>
                    <img src={product} className='w-20 h-14 rounded-md border-[1px] border-slate-300'></img>
                  </li>
                  <li>
                    <p className="xl:text-sm font-semibold">Dunk Low Light Bone</p>
                    <p className="xl:text-sm text-slate-500">36 EU - 4 Us</p>
                  </li>
                  <li className="xl:text-base font-bold">$1400.00</li>
                </ul>
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
