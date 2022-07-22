// components
import { useEffect, useState } from "react";

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

// const StyledMobileMenu = styled.div`
//   .MobileMenu__Wrapper {
//     width: 100%
//   }

//   .MobileMenu__Wrapper__Text {
//     flex-flow: column wrap;
//     align-items: center;
//     gap: 2rem;
//   }
  
//   .MobileMenu__Wrapper__Text h6:hover {
//     color: white;
//   }
  
//   @media (min-width: 1025px){
//     .MobileMenu__Wrapper {
//       width: 10%;
//       box-shadow: 0rem 0px 5px black;
//     }
    
//     .MobileMenu__Wrapper__Text {
//       align-items: flex-start;
//     }
//   }
// `

export const MobileMenu = ({open = false, onClose}) => {

  return (
  <div
    className={`mobile-menu ${open ? 'open' : ''}`}
    onClick={(e) => {
      e.preventDefault();
      if(typeof onClose === 'function') onClose();
    }}
  >
    <section 
      className="mobile-menu-content" 
    >
      {routes.map(route => (
        <button
          className="link-button"
          key={route.route_id}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();

            const element = document
            .querySelector(route.href)
            
            element
            .scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });

            if(typeof onClose === 'function') onClose();

          }}
        >{route.name}</button>
        
      ))}
    </section>
    
    <style jsx>{`
      .mobile-menu {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: -100%;
        background: rgba(0,0,0,0.8);
        backdrop-filter: saturate(180%) blur(10px);
        z-index: 999;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        display: none;
        transition: all .2s;
      }
      
      .mobile-menu-content {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }

      .link-button {
        border: 0;
        padding: 2rem;
        width: 50%;
        background-color: transparent;
        color: red;
      }
      
      .open {
        display: flex;
        left: 0%;
      }

    `}</style>

  </div>
  );
}