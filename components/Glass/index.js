import styled from "styled-components";
const StyledGlass = styled.div`
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 25px;
  display: flex;
  flex-flow: ${({direction}) => direction ? direction : 'row wrap'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'flex-start'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'flex-start'};
  padding: ${({padding}) => padding ? padding : '2rem'};
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  width: ${({width}) => width ? width : 'auto'};
  gap: ${({gap}) => gap ? gap : '0'};
`

export const Glass = (props) => {
  return <StyledGlass
    {...props}
  >
    {props.children}
  </StyledGlass>
}