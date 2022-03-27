// components
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { Grid, Section } from "../../components";

// store
import { NavAction } from "../../store";

// data
import { routes } from "../../data";
import styled from "styled-components";

const coordinates = {
  hidden: {
    left: "-100%"
  },
  active: {
    left: "0%"
  }
}

const StyledMobileMenu = styled.div`
  .MobileMenu__Wrapper {
    width: 100%
  }

  .MobileMenu__Wrapper__Text {
    flex-flow: column wrap;
    align-items: center;
    gap: 2rem;
  }
  
  .MobileMenu__Wrapper__Text h6:hover {
    color: white;
  }
  
  @media (min-width: 1025px){
    .MobileMenu__Wrapper {
      width: 10%;
      box-shadow: 0rem 0px 5px black;
    }
    
    .MobileMenu__Wrapper__Text {
      align-items: flex-start;
    }
  }
`

export const MobileMenu = () => {
  
  const [coor, setCoor] = useState(coordinates.hidden);

  const nav = useSelector(s => s.nav);

  const dispatch = useDispatch();

  const theme = useTheme();

  useEffect(() => {
    if(nav.menu.open){
      setCoor(coordinates.active);
    } else {
      setCoor(coordinates.hidden);
    }
  }, [nav.menu.open]);

  return (
  <StyledMobileMenu
    
  >
    <Section
      className="MobileMenu__Wrapper"
      position="fixed"
      zIndex="999"
      top="0"
      left={coor.left}
      transition={theme.transition.primary}
      height="100vh"
      bgColor={theme.color.secondary.value}
    >
      <Grid
        className="MobileMenu__Wrapper__Text"
        
      >
        {routes.map(route => (
          <h6
            key={route.route_id}
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
          >{route.name}</h6>
        ))}
      </Grid>

    </Section>
  </StyledMobileMenu>
  );
}