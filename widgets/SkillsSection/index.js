// data
import { skills } from "../../data";

// components
import { Grid, Section } from "../../components";

// styles
import { useTheme } from "styled-components";
import { isEven, isOdd } from "../../utils";

export const SkillsSection = () => {
  const theme = useTheme();
  return (
  <Section
    bgColor={theme.color.primary.value}  
    color={theme.color.secondary.value}  
  >
    <Grid
      direction="column wrap"
      alignItems="center"
      gap={theme.gap.secondary}
    >

      <h3>{skills.title}</h3>
    
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
              gap={theme.gap.secondary}
            >
              {/* Grid to be icon */}
              <Grid
                padding="5rem"
                borderRadius="50%"
                border=".5rem solid #fff"
              ></Grid>
              <h6>{skill.name}</h6>
              <p>{skill.description}</p>
            </Grid>
          </Grid>
        ))}
      </Grid>
    
    </Grid>

  </Section>
  )
}