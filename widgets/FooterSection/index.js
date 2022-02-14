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
    bgColor={theme.color.secondary.value}
    color={theme.color.primary.value}
    padding="0 0 4rem 0"
  >
    <Border
      width="90%"
      bgColor={theme.color.primary.value}
    />

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
          color: theme.color.white
        }}
      >{footer.text.middle}</p>
      <p>{footer.text.bottom}</p>
    </Grid>
  </Footer>
  )
}