import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Products from "@/components/Products";


const Home = () => {

  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <div className="container">
      <Products />



    </div>
  );
};

export default Home;