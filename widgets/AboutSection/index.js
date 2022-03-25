// hooks
import { useTheme } from "styled-components";

// components
import { Section, Grid } from "../../components";
import Image from "next/image";

// data
import { about } from "../../data";

export const AboutSection = () => {
  const theme = useTheme();
  return (
    <Section
      bgColor={theme.color.secondary.value}
      id={about.id}
    >
      <Grid
        width="90%"
        direction="column wrap"
        alignItems="center"
        gap="2rem"
      >
        <Grid
          width="100%"
        >
          <h6>{about.title}</h6>
        </Grid>
        
        <Grid
          bgColor={theme.color.white}
          borderRadius={about.image.borderRadius}
          overflow="hidden"
        >
          <Image 
            src={about.image.src}
            alt={about.image.alt}
            width={about.image.width}
            height={about.image.height}
          />
        </Grid>

        <Grid
          width="100%"
          gap="2rem"
        >
          {about.description.map((paragraph, i, arr) => (
            <p
              key={paragraph.id}
              style={{
                color: i === arr.length - 1 ? theme.color.white : theme.color.black
              }}
            >{paragraph.text}</p>
          ))}
        </Grid>
        
      </Grid>
    </Section>
  )
};