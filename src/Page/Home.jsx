import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Products from "@/components/Products";



const Home = () => {

  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <div className="container mx-auto">
      <Products />
    </div>
  );
};

export default Home;