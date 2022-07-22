// data
import { footer } from "../../data";

export const FooterSection = () => {
  return (
  
  <footer
    className="footer-section"
  >
    <p>{footer.text.top}</p>
    <p className="middle-text">{footer.text.middle}</p>
    <p>{footer.text.bottom}</p>

    <style jsx>{`
      .footer-section {
        width: 100%;
        padding: 4rem 2rem;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 2rem;
        background-color: var(--blue);
      }

      .middle-text {
        color: white;
      }

    `}</style>
  </footer>

  )
}