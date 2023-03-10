import { createContext, useEffect, useState, ReactNode } from "react";

interface DataW {
  width:number
}

interface AuthContextData{
  width: number;
  isMobile: boolean
  setWidth:({width}:DataW) => void;
}
interface AuthContextProviderProps {
  children:ReactNode
}
type MobileProps = { isMobile:boolean }


const inicialState: AuthContextData = {
  width: 0,
  isMobile: false,
  setWidth({ width }) {},
}
export const AuthContext = createContext<AuthContextData>(inicialState)

 function AuthProvider({children}: AuthContextProviderProps){
  
  const [width, setWidth] = useState<number>(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  let isMobile = width <= 425
  return (
    <AuthContext.Provider value={{isMobile: isMobile ,width: width, setWidth({width}){return width} }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
