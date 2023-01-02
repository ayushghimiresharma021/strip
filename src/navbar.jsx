import React from "react";
import logo from './images/logo.svg'
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
    const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext() 
    const displaySubmenu = (e) => {
        const tempTarget = e.target.getBoundingClientRect()
        console.log(e.target.innerText)
        const center =( tempTarget.left+tempTarget.right)/2
        const bottom = tempTarget.bottom -3
        openSubmenu(e.target,{center,bottom})
    }
    const handleOver =(e) => {
        if (e.tareget.classList.contains('link-btn')){
            closeSubmenu()
        }
    }

    return (
        <nav className="nav" onMouseOver={handleOver}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className='nav-logo'></img>
                    <button className="btn toggle-btn" onClick={openSidebar}><FaBars/></button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
                    </li> 
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
                    </li> 
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>Company</button>
                    </li>   

                </ul>
                <button className="btn signin-btn">Sign In</button>
            </div>
        </nav>
    )
}
export default Navbar ;