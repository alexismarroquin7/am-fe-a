import styled from "styled-components";

const StyledCard = styled.div`
  width: ${({width}) => width ? width : 'auto'};
  border-radius: ${({borderRadius, theme}) => borderRadius ? borderRadius : theme.borderRadius.primary};
  color: ${({color, theme}) => color ? color : theme.color.black};
  background-color: ${({bgColor, theme}) => bgColor ? bgColor : theme.color.white};

  padding: ${({padding, theme}) => padding ? padding : theme.padding.primary};
`

export const Card = (props) => {
  return (
    <StyledCard
      width={props.width}
      borderRadius={props.borderRadius}
      color={props.color}
      bgColor={props.bgColor}
      padding={props.padding}
    >
      {props.children}
    </StyledCard>
  )
  
}