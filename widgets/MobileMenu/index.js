
// data
import { routes } from "../../data";

// styles
import styles from "./index.module.css";

export const MobileMenu = ({open = false, onClose}) => {

  return (
  <div
    className={`${styles.mobile_menu} ${open ? styles.open : ''}`}
    onClick={(e) => {
      e.preventDefault();
      if(typeof onClose === 'function') onClose();
    }}
  >
    <section 
      className={styles.mobile_menu_content}
    >
      {routes.map(route => (
        <button
          className={styles.link_button}
          key={route.route_id}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            
            if(route.href === '/') {
              location = '/';
              return;
            }


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
    
  </div>
  );
}