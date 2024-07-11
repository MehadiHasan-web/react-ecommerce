
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";



const Layout = () => {
  return (
    <div>
      {/* navbar section start */}
      {/* <Navbar></Navbar> */}
      {/* navbar section end */}
      {/* components section start */}
      <Outlet></Outlet>
      {/* components section end */}
    </div>
  );
};

export default Layout;