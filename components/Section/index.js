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
  
  position: ${({position}) => position ? position : 'static'};
  z-index: ${({zIndex}) => zIndex ? zIndex : '0'};

  top: ${({top}) => top ? top : 'auto'};
  bottom: ${({bottom}) => bottom ? bottom : 'auto'};
  left: ${({left}) => left ? left : 'auto'};
  right: ${({right}) => right ? right : 'auto'};

  transition: ${({transition}) => transition ? transition : 'none'};
  
  overflow: ${({overflow}) => overflow ? overflow : 'visible'};
`

export const Section = (props) => {
  return (
  <StyledSection
    {...props}
    id={props.id || ''}
  >
    {props.children}
  </StyledSection>
  )
}