// data
import { footer } from "../../data";

export const FooterSection = () => {
  return (
  
  <footer
    className="footer-section"
  >
    <p>{footer.text.top}</p>
    <p>{footer.text.middle}</p>
    <p>{footer.text.bottom}</p>

    <style jsx>{`
      .footer-section {
        padding: 2rem;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 2rem;
      }
    `}</style>
  </footer>

  )
}