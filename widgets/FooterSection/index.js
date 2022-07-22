// components
import { Border, Footer, Grid } from "../../components";

// data
import { footer } from "../../data";

export const FooterSection = () => {
  return (
  
  <footer
    // bgColor={theme.color.primary.value}
    // color={theme.color.white}
    // color={theme.color.secondary.value}
    // padding="0 0 4rem 0"
  >
    
    <div
      // width="90%"
      // direction="column wrap"
      // alignItems="center"
      // padding="2rem 0 0 0"
      // gap={theme.gap.primary}
    >
      <p>{footer.text.top}</p>
      <p
        // style={{
        // }}
      >{footer.text.middle}</p>
      <p>{footer.text.bottom}</p>
    </div>
  </footer>

  )
}