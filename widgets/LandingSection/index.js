// router
import { useRouter } from "next/router";

// data
import { home } from "../../data";

// components
import { Section, Button, Grid } from "../../components";
import Image from 'next/image';

// styles
import { useTheme } from "styled-components";
import styles from "../../styles/LandingSection.module.css";
import styled from "styled-components";

const StyledLandingSection = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 8rem 0 2rem 0;

  .LandingSection__Section {
    background-color: ${({theme}) => theme.color.secondary.value};
    color: ${({theme}) => theme.color.primary.value};
  }

  .LandingSection__Section__Wrapper {
    width: 90%;
    flex-flow: column wrap;
    align-items: center;
    gap: ${({theme}) => theme.gap.secondary};
  }
  
  
  .LandingSection__Section__Wrapper__Title {
    width: 100%;
    flex-flow: column wrap;
    gap: 1rem;
  }
  
  .LandingSection__Section__Wrapper__DescriptionContainer {
    width: 100%;
    flex-flow: column wrap;
    align-items: center;
    gap: 1rem;
  }
  
  .LandingSection__Section__Wrapper__DescriptionContainer p {
    font-weight: bold;
    text-align: center;
  }

  .LandingSection__Section__Wrapper__ButtonContainer {
    width: 100%;
    direction: column wrap;
    align-items: center;
    gap: 2rem;
  }

  .LandingSection__Section__Wrapper__ButtonContainer__Button {
    width: 100%;
  }
  
  
  @media (min-width: 1025px) {
    
    .LandingSection__Section__Wrapper {
      width: 50%;
    }
    
    .LandingSection__Section__Wrapper__Top {
      flex-flow: row wrap;
      justify-content: space-between;
    }
    
    .LandingSection__Section__Wrapper__DescriptionContainer {
      flex-flow: row-reverse wrap;
      justify-content: space-between;
    }

    .LandingSection__Section__Wrapper__DescriptionContainer p {
      width: 50%;
      text-align: left;

    }

    .LandingSection__Section__Wrapper__ButtonContainer {
      flex-flow: row wrap;
      justify-content: center;
    }

    .LandingSection__Section__Wrapper__ButtonContainer__Button {
      width: 20%;
    }

  }
`

export const LandingSection = () => {
  
  const router = useRouter();
  const theme = useTheme();

  return (
  <StyledLandingSection>

    <Section
      className="LandingSection__Section"
      id={home.id}
    >
      <Grid
        className="LandingSection__Section__Wrapper"  
      >
        
        <Grid
          className="LandingSection__Section__Wrapper__Title"
        >
          <p>{home.titleIntro}</p>
          <h2
            style={{
              color: theme.color.white
            }}
          >{home.title}</h2>
          <h2>{home.subTitle}</h2>
        </Grid>
        

        <Grid
          className="LandingSection__Section__Wrapper__DescriptionContainer"
          
        >
          <Grid
            border={home.headshot.border}
            borderRadius={home.headshot.borderRadius}
          >
            <Image
              className={styles.headshot}
              src={home.headshot.src}
              width={home.headshot.width}
              height={home.headshot.height}
              alt={home.headshot.alt}
              title={home.headshot.title}
            />
          </Grid>

          <p>{home.description}</p>

        </Grid>

        <Grid
          className="LandingSection__Section__Wrapper__ButtonContainer"
        >
          {home.buttons.map(button => (
            <Button
              className="LandingSection__Section__Wrapper__ButtonContainer__Button"
              key={button.button_id}
              text={button.text}
              onClick={() => {
                router.push(button.href);
              }}
              variant={button.variant}
            />
          ))}
        </Grid>

      </Grid>
    </Section>
  </StyledLandingSection>
  
  )
}