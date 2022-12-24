// data
import { footer } from "../../data";
// styles
import styles from "./index.module.css";

export const FooterSection = () => {
  return (
  
  <footer
    className={styles.footer_section}
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path 
        className={styles.path}
        d="M0,224L0,64L57.6,64L57.6,32L115.2,32L115.2,96L172.8,96L172.8,0L230.4,0L230.4,128L288,128L288,128L345.6,128L345.6,0L403.2,0L403.2,32L460.8,32L460.8,224L518.4,224L518.4,160L576,160L576,32L633.6,32L633.6,256L691.2,256L691.2,288L748.8,288L748.8,224L806.4,224L806.4,128L864,128L864,64L921.6,64L921.6,64L979.2,64L979.2,32L1036.8,32L1036.8,256L1094.4,256L1094.4,0L1152,0L1152,64L1209.6,64L1209.6,160L1267.2,160L1267.2,256L1324.8,256L1324.8,288L1382.4,288L1382.4,192L1440,192L1440,320L1382.4,320L1382.4,320L1324.8,320L1324.8,320L1267.2,320L1267.2,320L1209.6,320L1209.6,320L1152,320L1152,320L1094.4,320L1094.4,320L1036.8,320L1036.8,320L979.2,320L979.2,320L921.6,320L921.6,320L864,320L864,320L806.4,320L806.4,320L748.8,320L748.8,320L691.2,320L691.2,320L633.6,320L633.6,320L576,320L576,320L518.4,320L518.4,320L460.8,320L460.8,320L403.2,320L403.2,320L345.6,320L345.6,320L288,320L288,320L230.4,320L230.4,320L172.8,320L172.8,320L115.2,320L115.2,320L57.6,320L57.6,320L0,320L0,320Z"
      ></path>
    </svg>
    <div
      className={styles.footer_card}
    >
      <p>{footer.text.top}</p>
      <p className={styles.middle_text}>{footer.text.middle}</p>
      <p>{footer.text.bottom}</p>

    </div>
  </footer>

  )
}