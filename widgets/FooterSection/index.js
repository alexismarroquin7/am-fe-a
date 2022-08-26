// data
import { footer } from "../../data";

export const FooterSection = () => {
  return (
  
  <footer
    className="footer-section"
  >
    <div
      className="footer-glass"
    >
      <p>{footer.text.top}</p>
      <p className="middle-text">{footer.text.middle}</p>
      <p>{footer.text.bottom}</p>

    </div>

    <style jsx>{`
      .footer-section {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        background-color: var(--sky-blue);  
      }
      
      .footer-glass {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 2rem;
        padding: 4rem 2rem;
        
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        background-color: rgba(255, 255, 255, .75);  
        backdrop-filter: blur(5px);
      }

      .middle-text {
        color: var(--blue);
      }

    `}</style>
  </footer>

  )
}