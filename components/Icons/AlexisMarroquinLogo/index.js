import styled from "styled-components";

const StyledAlexisMarroquinLogo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  
  h5 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.terciary.value};
  }

  span {
    font-size: 2.4rem;
  }

  span:nth-child(1){
    color: ${({ theme }) => theme.color.black};
    padding: 0 .5rem;
  }
  
  span:nth-child(2){
    color: ${({ theme }) => theme.color.secondary.value};
  }

`

export const AlexisMarroquinLogo = () => {
  return (
  <StyledAlexisMarroquinLogo>
    <h5>
      {'<'}
      <span>{'AlexisMarroquin'}</span>
      <span>{'/'}</span>
      {'>'}
    </h5>
  </StyledAlexisMarroquinLogo>
  )
}