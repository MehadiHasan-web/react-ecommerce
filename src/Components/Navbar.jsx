import { Link } from "react-router-dom";
import { FaCartPlus, FaHeart, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      {/* content section start */}
      <div className="container mx-auto">
        {/* top navbar section start */}
        <div className="flex justify-between items-center pt-3 pb-2">
          {/* search section start */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          {/* search section end */}
          {/* logo section start */}
          <span className="text-2xl font-bold">IFATIN</span>
          {/* logo section end */}
          {/* social logo section start */}
          <ul className="flex justify-end items-center gap-5">
            <li>
              <span className="text-red-500 text-base font-semibold">
                Try demo
              </span>
            </li>
            <li>
              <Link to="/">
                <FaHeart className="text-lg"></FaHeart>
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaUserCircle className="text-xl"></FaUserCircle>
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaCartPlus className="text-xl"></FaCartPlus>
              </Link>
            </li>
          </ul>
          {/* social logo section end */}
        </div>
        {/* top navbar section end */}
        {/* bottom navbar section start */}
        <div className="flex justify-between items-center pb-3 pt-2">
          {/* category section start */}
          <p className="flex gap-2 items-center">
            <GiHamburgerMenu className="text-sm"></GiHamburgerMenu>{" "}
            <span className="text-sm font-semibold">All Category</span>
          </p>
          {/* category section end */}
          {/* link item section start */}
          <ul className="flex gap-5">
            <li className="text-base">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base">
              <Link to="/shop-page">Shop</Link>
            </li>
            <li className="text-base">
              <Link to="/">About</Link>
            </li>
          </ul>
          {/* link item section end */}
        </div>
        {/* bottom navbar section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Navbar;
