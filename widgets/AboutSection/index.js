// hooks
import { useTheme } from "styled-components";

// components
import { Section, Grid } from "../../components";
import Image from "next/image";

// data
import { about } from "../../data";

import styled from "styled-components";

const StyledAboutSection = styled.div`

  .AboutSection__Wrapper {
    width: 90%;
    flex-flow: column wrap;
    align-items: center;
    gap: 2rem;
  }
  
  @media (min-width: 1025px) {
    .AboutSection__Wrapper {
      width: 50%;
    }
  }

`

export const AboutSection = () => {
  const theme = useTheme();
  return (
  <StyledAboutSection>
    <Section
      bgColor={theme.color.secondary.value}
      id={about.id}
    >
      <Grid
        className="AboutSection__Wrapper"
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
                color: i === arr.length - 1 ? theme.color.white : theme.color.black,
                width: "100%"
              }}
            >{paragraph.text}</p>
          ))}
        </Grid>
        
      </Grid>
    </Section>
  </StyledAboutSection>
  )
};