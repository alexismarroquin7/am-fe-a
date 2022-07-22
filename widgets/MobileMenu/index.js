// data
import { routes } from "../../data";

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
        color: var(--blue);
        font-weight: bold;
      }
      
      .open {
        display: flex;
        left: 0%;
      }

    `}</style>

  </div>
  );
}