import { Link } from "react-router-dom";
import { FaCartPlus, FaHeart, FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className="bg-slate-300">
      {/* content section start */}
      <div className="container mx-auto">
        {/* top navbar section start */}
        <div className="flex justify-between items-center py-4">
          {/* search section start */}
          <div className="relative">
            <input type="text" placeholder="search" className="py-2 px-10 rounded-md"></input>
            <CiSearch className="text-xl absolute top-[10px] left-3"></CiSearch>
          </div>
          {/* search section end */}
          {/* logo section start */}
            <span className="text-2xl font-bold">IFATIN</span>
          {/* logo section end */}
          {/* social logo section start */}
          <ul className="flex justify-end items-center gap-5">
            <li><span className="text-red-500 text-base font-semibold">Try demo</span></li>
            <li><Link to="/"><FaHeart className="text-lg"></FaHeart></Link></li>
            <li><Link to="/"><FaUserCircle className="text-xl"></FaUserCircle></Link></li>
            <li><Link to="/"><FaCartPlus className="text-xl"></FaCartPlus></Link></li>
          </ul>
          {/* social logo section end */}
        </div>
        {/* top navbar section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Navbar;