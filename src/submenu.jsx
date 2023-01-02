import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";

const Submenu =() => {
    const container = useRef(null)
    const {isSubmenuOpen,location,pages:{page,links}} = useGlobalContext() 
    const [columns,setColumns] = useState('col-2')
    useEffect(() => {
        const curr = container.current
        const {center,bottom} = location 
        curr.style.left = `${center}px`
        curr.style.top = `${bottom}px`
        if (links.length==='3'){
            setColumns('col-3')
        }
        else{
            setColumns('col-4')
        }
    },[links,location])

    
    return (
        <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
    )
    
}
export default Submenu ;
