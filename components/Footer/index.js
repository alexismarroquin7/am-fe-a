import styled from "styled-components";

const StyledFooter = styled.footer`
  width: ${({width}) => width ? width : `100%`};
  height: ${({height}) => height ? height : 'auto'};
  border: ${({border}) => border ? border : 'none'};
  
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  padding: ${({padding}) => padding ? padding : '4rem 0'};
  background-color: ${({bgColor, theme}) => bgColor ? bgColor : theme.color.white};
  color: ${({color, theme}) => color ? color : theme.color.black};
  
`;

export const Footer = (props) => {
  return (
  <StyledFooter
    width={props.width}
    height={props.height}
    border={props.border}
    padding={props.padding}
    color={props.color}
    bgColor={props.bgColor}
  >
    {props.children}
  </StyledFooter>
  );
};