import styled from "styled-components"

const StyledGrid = styled.div`
  width: ${({width}) => width ? width : '100%'};
  border: ${({border}) => border ? border : '0'};
  
  display: flex;
  
  flex-flow: ${({direction}) => direction ? direction : 'row wrap'};
  justify-content: ${({justify}) => justify ? justify : 'flex-start'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'flex-start'};

  box-shadow: ${({boxShadow}) => boxShadow ? boxShadow : 'none'};
`

export const Grid = (props) => {
  return (
  <StyledGrid
    width={props.width}
    border={props.border}
    
    direction={props.direction}
    justify={props.justify}
    alignItems={props.alignItems}

    boxShadow={props.boxShadow}

  >{props.children}</StyledGrid>
  )
}