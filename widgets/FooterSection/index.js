// components
import { Border, Footer, Grid } from "../../components";

// data
import { footer } from "../../data";

// style
import { useTheme } from "styled-components";

export const FooterSection = () => {
  const theme = useTheme();
  return (
  
  <Footer
    bgColor={theme.color.primary.value}
    color={theme.color.white}
    padding="0 0 4rem 0"
  >
    
    <Grid
      width="90%"
      direction="column wrap"
      alignItems="center"
      padding="2rem 0 0 0"
      gap={theme.gap.primary}
    >
      <p>{footer.text.top}</p>
      <p
        style={{
          color: theme.color.secondary.value
        }}
      >{footer.text.middle}</p>
      <p>{footer.text.bottom}</p>
    </Grid>
  </Footer>

  )
}