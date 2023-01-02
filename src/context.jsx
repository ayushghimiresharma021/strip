import React, { createContext, useContext, useState } from "react";
import sublinks from "./data";

const AppContext = React.createContext() ;

const AppProvider = ({children}) => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false) ;
    const [isSubmenuOpen,setisSubmenuOpen ] = useState(false) ;
    const [pages,setPages] = useState({page:'', links:[]}) ;
    const [location,setLocation] = useState({}) ;
    
    const openSidebar = () => {
        return setIsSidebarOpen(true)
    }
    const closeSidebar =() =>{ 
        return setIsSidebarOpen(false)
    }
    const openSubmenu = (text,{center,bottom}) => {
        const p = text.innerText
        const page01 = sublinks.find((link) => link.page===p)
        setPages(page01)
        setLocation({center,bottom})
        return setisSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        return setisSubmenuOpen(false)
    }
    return (
        <AppContext.Provider value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        pages
        }}>
            {children}
        </AppContext.Provider>
    )

}
const useGlobalContext =() => {
    return useContext(AppContext)
}
export  {useGlobalContext,AppContext,AppProvider} ;
 


