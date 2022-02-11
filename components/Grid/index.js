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
`

export const Grid = (props) => {
  return (
  <StyledGrid
    width={props.width}
    border={props.border}
    borderRadius={props.borderRadius}
    
    direction={props.direction}
    justify={props.justify}
    alignItems={props.alignItems}
    gap={props.gap}

    boxShadow={props.boxShadow}
    
    padding={props.padding}
    bgColor={props.bgColor}
  >{props.children}</StyledGrid>
  )
}