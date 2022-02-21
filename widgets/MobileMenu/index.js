// components
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { Button, Grid, Section } from "../../components";

// store
import { NavAction } from "../../store";

// data
import { routes } from "../../data";

const coordinates = {
  hidden: {
    left: "-100%"
  },
  active: {
    left: "0%"
  }
}

export const MobileMenu = () => {
  
  const [coor, setCoor] = useState(coordinates.hidden);

  const nav = useSelector(s => s.nav);

  const dispatch = useDispatch();

  const theme = useTheme();

  useEffect(() => {
    if(nav.menu.open){
      setCoor(coordinates.active);
      document.body.style.overflow = "hidden";
    } else {
      setCoor(coordinates.hidden);
      document.body.style.overflow = "visible";
    }
  }, [nav.menu.open]);

  return (
  <Section
    position="fixed"
    zIndex="999"
    top="0"
    left={coor.left}
    transition={theme.transition.primary}
    height="100vh"
  >
    <Grid
      border="1px solid red"
      direction="column wrap"
      alignItems="center"
    >
      {routes.map(route => (
        <Button
          key={route.route_id}
          color={theme.color.black}
          text={route.name}
          onClick={() => {
            dispatch(NavAction.menu.close());
            const element = document
            .querySelector(route.href)
            
            element
            .scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });
          }}
        />
      ))}
    </Grid>

  </Section>
  );
}