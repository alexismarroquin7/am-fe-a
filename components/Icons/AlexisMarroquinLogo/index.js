

// const StyledAlexisMarroquinLogo = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
  
//   h5 {
//     display: flex;
//     flex-flow: row wrap;
//     justify-content: center;
//     align-items: center;
//     color: ${({ theme }) => theme.color.terciary.value};
//   }

//   span {
//     font-size: 2.4rem;
//   }

//   span:nth-child(1){
//     color: ${({ theme }) => theme.color.black};
//     padding: 0 .5rem;
//   }
  
//   span:nth-child(2){
//     color: ${({ theme }) => theme.color.secondary.value};
//   }

// `

export const AlexisMarroquinLogo = () => {
  return (
  <span
    className="wrapper"
  >
    {'<'}
    <span
      className="name"
    >{'AM'}</span>
    <span
      className="slash"
    >{'/'}</span>
    {'>'}

    <style jsx>{`
      .wrapper {
        color: red;
      }

      .name {
        color: black;
      }
      
      .slash {
        color: blue;
      }
    `}</style>
  </span>
  )
}