import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { AlexisMarroquinLogo, Grid, MenuIcon } from "../../components";
import { NavAction } from "../../store";


const navTopValues = {
  active: "0rem",
  hidden: "-8rem"
}

export const Nav = () => {

  const nav = useSelector(s => s.nav);
  const dispatch = useDispatch();

  const [navTop, setNavTop] = useState(navTopValues.active);

  const theme = useTheme();
  
  const [y, setY] = useState(0);

  const handleScroll = e => {
    const scrollDown = y < window.scrollY;

    if(scrollDown || y === 0){
      // scrolling down
      setNavTop(navTopValues.hidden)
    } else {
      // scrolling up
      setNavTop(navTopValues.active)
    }
    setY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
  <Grid
    justify="space-between"
    alignItems="center"
    width="100%"
    padding="1rem 2rem 1rem 2.5rem"
    boxShadow={`0px 0px 5px ${theme.color.black}`}
    zIndex={"1000"}
    position="fixed"
    top={navTop}
    bgColor={theme.color.white}
    transition={theme.transition.primary}
  >
    <MenuIcon 
      onClick={() => {
        nav.menu.open 
        ? dispatch(NavAction.menu.close())
        : dispatch(NavAction.menu.open());
      }}
    />
    <AlexisMarroquinLogo/>
  </Grid>
  )
}