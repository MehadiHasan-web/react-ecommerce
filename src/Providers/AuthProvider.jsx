import { createContext, useState } from "react";

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  const [user, setUser] = useState('sohan');


  const userInfo = {user, setUser}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;