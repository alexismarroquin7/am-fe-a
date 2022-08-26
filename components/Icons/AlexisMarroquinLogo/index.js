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
        color: var(--blue);
      }

      .name {
        color: var(--black);
      }
      
      .slash {
        color: var(--sky-blue);
      }
    `}</style>
  </span>
  )
}