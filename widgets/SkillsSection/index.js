// data
import { skills } from "../../data";

// components
import { Border, Grid, Section } from "../../components";

// styles
import { useTheme } from "styled-components";
import { isEven, isOdd } from "../../utils";

import Image from "next/image"

export const SkillsSection = () => {
  const theme = useTheme();
  return (
  <Section
    bgColor={theme.color.primary.value}  
    color={theme.color.secondary.value}  
    id={skills.id}
  >
    <Grid
      direction="column wrap"
      alignItems="center"
      gap={theme.gap.secondary}
    >

      <h3>{skills.title}</h3>

      <Border
        width={"90%"}
        bgColor={theme.color.secondary.value}
      />

      <Grid
        direction="column wrap"
        alignItems="center"
      >
        {skills.list.map((skill, i) => (
          <Grid
            key={skill.skill_id}
            width="100%"
            bgColor={isOdd(i) ? theme.color.secondary.value : theme.color.primary.value}
            color={isEven(i) ? theme.color.secondary.value : theme.color.primary.value}
            direction="column wrap"
            alignItems="center"
            padding="20rem 0"
          >
            <Grid
              width="90%"
              direction="column wrap"
              alignItems="center"
              gap="4rem"
            >
              {/* Grid to be icon */}
              <Grid
                padding="5rem"
                borderRadius="50%"
                border={isOdd(i) ? ".5rem solid #fff" : ""}
                bgColor={theme.color.secondary.value}
              >

                <Image
                  src={skill.icon.src}
                  width="50px"
                  height="50px"
                  alt={skill.icon.alt}
                />
              </Grid>

              <Grid
                direction="column wrap"
                alignItems="center"
                gap="2rem"
              >
                <h6>{skill.name}</h6>
                <p>{skill.description}</p>
              </Grid>

            </Grid>
          </Grid>
        ))}
      </Grid>
    
    </Grid>

  </Section>
  )
}