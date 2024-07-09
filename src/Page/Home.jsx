import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Home = () => {

  const {user} = useContext(AuthContext)
  console.log(user)

  return (
    <div>
      <h5>this is home page</h5>
    </div>
  );
};

export default Home;