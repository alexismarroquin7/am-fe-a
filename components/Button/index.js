import styled from "styled-components"

const StyledButton = styled.button`
  width: ${({width}) => width ? width : 'auto'};
  background-color: ${({bgColor, theme}) => bgColor ? bgColor : theme.color.white};
  color: ${({color, theme}) => color ? color : theme.color.black};
  border: ${({border}) => border ? border : 'none'};
  border-radius: ${({borderRadius, theme}) => borderRadius ? borderRadius : theme.borderRadius.primary};
  padding: ${({padding, theme}) => padding ? padding : theme.padding.primary};
`

export const Button = (props) => {
  return (
  <StyledButton
    width={props.width}
    color={props.color}
    bgColor={props.bgColor}
    border={props.border}
    borderRadius={props.borderRadius}
    padding={props.padding}
    onClick={props.onClick ? props.onClick : () => {}}
  >{props.text ? props.text : ''}</StyledButton>
  )
}