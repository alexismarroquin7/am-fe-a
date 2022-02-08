import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { AlexisMarroquinLogo, Grid, MenuIcon } from "../../components";
import { NavAction } from "../../store";

export const Nav = () => {

  const nav = useSelector(s => s.nav);
  const dispatch = useDispatch();

  const theme = useTheme();
  
  return (
  <Grid
    justify="space-between"
    alignItems="center"
    width="100%"
    padding="1rem 4rem 1rem 4.5rem"
    boxShadow={`0px 0px 5px ${theme.color.black}`}
  >
    <MenuIcon 
      open={nav.menu.open}
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