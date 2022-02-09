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

export const LandingSection = () => {
  
  const router = useRouter();
  const theme = useTheme();

  return (
  <Section
    bgColor={theme.color.secondary.value}
  >
    <Grid
      width="90%"
      direction="column wrap"
      alignItems="center"
      gap={theme.gap.secondary}
    >
      
      <Grid
        direction="column wrap"
        gap={theme.gap.primary}
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
    
      <Grid
        direction="column wrap"
        gap={theme.gap.primary}
      >
        <h5>{home.description}</h5>
      </Grid>

      <Grid
        width="100%"
        direction="column wrap"
        gap={theme.gap.secondary}
      >
        {home.buttons.map(button => (
          <Button
            key={button.button_id}
            width="100%"  
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
  )
}