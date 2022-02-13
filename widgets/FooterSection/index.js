// components
import { Footer } from "../../components";

// style
import { useTheme } from "styled-components";

export const FooterSection = () => {
  const theme = useTheme();
  return (
  <Footer
    bgColor={theme.color.primary.value}
  >
  </Footer>
  )
}