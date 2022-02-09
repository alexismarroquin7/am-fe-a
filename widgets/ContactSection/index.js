// data
import { contact } from "../../data";

// components
import { Section, Grid } from "../../components";
import Image from 'next/image';

// style
import { useTheme } from "styled-components";

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
      <h3>{contact.title}</h3>

      <Grid
        alignItems="center"
        gap={theme.gap.secondary}
      >
        {contact.lines.map(line => (
          <Grid
            key={line.line_id}
          >
            <a 
              title={line.name}
              href={line.href}
              target={line.target}
            >
              <Image
                src={line.icon.src}
                width="50px"
                height="50px"
              />
            </a>
          </Grid>
        ))}
      </Grid>

    </Grid>  
  
  </Section>
  )
}