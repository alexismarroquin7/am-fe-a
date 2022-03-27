// data
import { skills } from "../../data";

// components
import { Border, Grid, Section } from "../../components";
import Image from "next/image";

// styles
import { useTheme } from "styled-components";
import styled from "styled-components";

// utils
import { isEven, isOdd } from "../../utils";

const StyledSkillsSection = styled.div`
  width: 100%;
  
  .SkillsSection__Section__Wrapper {
    width: 100%;
    flex-flow: column wrap;
    align-items: center;
    gap: 2rem;
  }

  .SkillsSection__Section__Wrapper h6 {
    width: 90%;
    text-align: left;
  }

  .SkillsSection__Section__Wrapper__Border {
    width: 90%;
  }

  .SkillsSection__Section__Wrapper__Skill__Wrapper {
    width: 90%;
    flex-flow: column wrap;
    align-items: center;
    gap: 4rem;
  }

  .SkillsSection__Section__Wrapper__Skill__Wrapper__Text {
    flex-flow: column wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .SkillsSection__Section__Wrapper__Skill__Wrapper__Text h6 {
    font-weight: bold;
    text-align: center;
  }

  
  
  @media (min-width: 1025px) {
    .SkillsSection__Section__Wrapper h6 {
      width: 50%;
    }

    .SkillsSection__Section__Wrapper__Border {
      width: 50%;
    }
    
    .SkillsSection__Section__Wrapper__Skill__Wrapper {

      width: 50%;
      flex-flow: row-reverse wrap;
      align-items: center;
      justify-content: space-between;
    }

    .SkillsSection__Section__Wrapper__Skill__Wrapper__Text {
      width: 50%;
      justify-content: space-between;
    }

    .SkillsSection__Section__Wrapper__Skill__Wrapper__Text h6 {
      width: 100%;
      text-align: left;
    }
    
  }

`

export const SkillsSection = () => {
  const theme = useTheme();
  return (
  <StyledSkillsSection>
    <Section
      bgColor={theme.color.primary.value}  
      color={theme.color.secondary.value}  
      id={skills.id}
    >
      <Grid
        className="SkillsSection__Section__Wrapper"
        
        >

        
        <h6>{skills.title}</h6>

        <Border
          className="SkillsSection__Section__Wrapper__Border"
          bgColor={theme.color.secondary.value}
        />
        
        <Grid
          width="100%"
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
              padding="10rem 0"
            >
              <Grid
                className="SkillsSection__Section__Wrapper__Skill__Wrapper"
              >
                {/* Grid to be icon */}
                <Grid
                  padding="5rem"
                  borderRadius="50%"
                  border={isOdd(i) ? `.5rem solid ${theme.color.primary.value}` : ""}
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
                  className="SkillsSection__Section__Wrapper__Skill__Wrapper__Text"
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
  </StyledSkillsSection>
  )
}