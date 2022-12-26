import { useState, useEffect } from "react";
import { useToggle } from "../../hooks"
import { AlexisMarroquinLogo, MenuIcon } from "../../components";

import styles from "./index.module.css";
import { debounce } from "../../utils/debounce";

export const Nav = ({open, onClick}) => {
  const [ prevScrollPos, setPrevScrollPos ] = useState(0);
  const { toggled: visible, setToggled: setVisible } = useToggle(true);

  const handleScroll = debounce(() => {

    const currentScrollPos = window.scrollY;


    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);


    setPrevScrollPos(currentScrollPos);
  }, 100);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);


  return (
  <div className={`${styles.nav} ${visible ? styles.visible : ''}`}>

    <div
      className={styles.nav_wrapper}
    >
      <div className={styles.icons_container}>
        <MenuIcon 
          open={open}
          onClick={(e) => {
            if(typeof onClick === 'function') onClick(e);
          }}
        />

      </div>

      
      
      <AlexisMarroquinLogo/>
    </div>

  </div>
  )
}