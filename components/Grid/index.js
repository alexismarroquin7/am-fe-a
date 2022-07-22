import styled from "styled-components"

const StyledGrid = styled.div`
  width: ${({width}) => width ? width : 'auto'};
  border: ${({border}) => border ? border : '0'};
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : '0'};
  
  display: flex;
  
  flex-flow: ${({direction}) => direction ? direction : 'row wrap'};
  justify-content: ${({justify}) => justify ? justify : 'flex-start'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'flex-start'};
  gap: ${({gap}) => gap ? gap : 'none'};

  box-shadow: ${({boxShadow}) => boxShadow ? boxShadow : 'none'};
  
  padding: ${({padding}) => padding ? padding : '0'};

  background-color: ${({bgColor}) => bgColor ? bgColor : 'none'};
  color: ${({color}) => color ? color : 'none'};

  position: ${({position}) => position ? position : 'static'};
  z-index: ${({zIndex}) => zIndex ? zIndex : '0'};

  top: ${({top}) => top ? top : 'auto'};
  bottom: ${({bottom}) => bottom ? bottom : 'auto'};
  left: ${({left}) => left ? left : 'auto'};
  right: ${({right}) => right ? right : 'auto'};

  transition: ${({transition}) => transition ? transition : 'none'};
  overflow: ${({overflow}) => overflow ? overflow : 'visible'};
  background-image: ${({bgImage}) => bgImage ? bgImage : 'none'};
`

export const Grid = (props) => {
  return (
  <StyledGrid
    {...props}
  >{props.children}</StyledGrid>
  )
}