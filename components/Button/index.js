import styled from "styled-components"

const StyledButton = styled.button`
  width: ${({width}) => width ? width : 'auto'};
  background-color: ${({bgColor, variant, theme}) => {
    let bgColorToUse; 
    
    if(bgColor){
      bgColorToUse = bgColor;
      
    } else if(variant === 'outlined'){
      bgColorToUse = theme.color.secondary.value;
      
    } else if (variant === 'filled'){
      bgColorToUse = theme.color.white;
      
    } else {
      bgColorToUse = theme.color.white;

    }

    return bgColorToUse;
  }};
  color: ${({color, variant, theme}) => {
    let colorToUse;

    if(color){
      colorToUse = color;
    } else if(variant) {
      if(variant === 'outlined'){
        colorToUse = theme.color.white;

      }

    } else {
      colorToUse = theme.color.black;

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
      borderToUse = '.2rem solid white';

    } else {
      borderToUse = '0';
      
    }

    return borderToUse;
  }};
  border-radius: ${({borderRadius, theme}) => borderRadius ? borderRadius : theme.borderRadius.primary};
  padding: ${({padding, theme}) => padding ? padding : theme.padding.primary};
`

export const Button = (props) => {
  return (
  <StyledButton
    {...props}
    onClick={props.onClick ? props.onClick : () => {}}
  >{props.text && <p>{props.text}</p>}</StyledButton>
  )
}