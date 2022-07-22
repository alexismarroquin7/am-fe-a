import styled from "styled-components"

const StyledButton = styled.button`
  width: ${({width}) => width ? width : 'auto'};
  
  background-color: ${({bgColor, variant, theme}) => {
    let bgColorToUse = '';
  
    if(bgColor){
      bgColorToUse = bgColor;
      
    } else if(variant === 'outlined'){
      bgColorToUse = 'rgba( 255, 255, 255, 0 )'; 
      
    } else if (variant === 'filled'){
      bgColorToUse = theme.color.white;
    
    } else if (variant === 'text'){
      bgColorToUse = 'transparent';
    }

    return bgColorToUse;
  }};

  color: ${({color, variant, theme}) => {
    let colorToUse;

    if(color){
      colorToUse = color;
    
    } else if(variant) {
      if(variant === 'outlined'){
        colorToUse = theme.color.black;

      } else if(variant === 'filled'){
        colorToUse = theme.color.black;
      }

    }
    
    return colorToUse;
  }};
  border: ${({border, variant}) => {
    let borderToUse;
      
    if(border){
      if(typeof border === 'string'){
        borderToUse = border;
        
      } else {
        borderToUse = `1px solid red`;
      }
    
    } else if(variant === 'outlined'){
      borderToUse = '.2rem solid black';
      
    } else if (variant === 'filled') {
      borderToUse = '.2rem solid white';
    } else if (variant === 'text') {
      borderToUse = '0';
    }

    return borderToUse;
  }};

  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : '25px'};
  padding: ${({padding}) => padding ? padding : '1rem 2rem'};
  font-weight: bold;
`

export const Button = (props) => {
  return (
  <StyledButton
    {...props}
    onClick={props.onClick ? props.onClick : () => {}}
  >{props.text && <p>{props.text}</p>}</StyledButton>
  )
}