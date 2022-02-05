import { useTheme } from "styled-components";
import { AlexisMarroquinLogo, Grid, MenuIcon } from "../../components";

export const Nav = () => {
  const theme = useTheme();
  return (
  <Grid
    justify="space-between"
    alignItems="center"
    width="100%"
    padding="2.5% 5%"
    boxShadow={`0px 0px 5px ${theme.color.black}`}
  >
    <MenuIcon />
    <AlexisMarroquinLogo/>
  </Grid>
  )
}