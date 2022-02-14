import styled from "styled-components"

const StyledSection = styled.section`
  width: ${({width}) => width ? width : '100%'};
  height: ${({height}) => height ? height : 'auto'};
  border: ${({border}) => border ? border : 'none'};
  
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  padding: ${({padding}) => padding ? padding : '4rem 0'};
  background-color: ${({bgColor, theme}) => bgColor ? bgColor : theme.color.white};
  color: ${({color, theme}) => color ? color : theme.color.black};
  
  
`

export const Section = (props) => {
  return (
  <StyledSection
    width={props.width}
    height={props.height}
    border={props.border}
    padding={props.padding}
    bgColor={props.bgColor}
    color={props.color}
  >
    {props.children}
  </StyledSection>
  )
}