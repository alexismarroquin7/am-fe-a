// data
import { skills } from "../../data";

// components
import { Grid, Section } from "../../components";

// styles
import { useTheme } from "styled-components";

export const SkillsSection = () => {
  const theme = useTheme();
  return (
  <Section>
    <Grid
      width="90%"
      direction="column wrap"
      alignItems="center"
      gap={theme.gap.secondary}
    >

      <h3>{skills.title}</h3>
    
      <Grid
        direction="column wrap"
        alignItems="center"
        gap={theme.gap.secondary}
      >
        {skills.list.map((skill) => (
          <Grid
            key={skill.skill_id}
            direction="column wrap"
            alignItems="center"
            gap={theme.gap.primary}
          >
            <h6>{skill.name}</h6>
            <p>{skill.description}</p>
          </Grid>
        ))}
      </Grid>
    
    </Grid>

  </Section>
  )
}