import { useTheme } from "styled-components";
import { Section, Grid } from "../../components";
import { contact } from "../../data/contact";

export const ContactSection = () => {
  
  const theme = useTheme();

  return (
  <Section>

    <Grid
      width="90%"
      direction="column wrap"
      alignItems="center"
      gap={theme.gap.secondary}
    >
      <h2>{contact.title}</h2>
    </Grid>  
  
  </Section>
  )
}