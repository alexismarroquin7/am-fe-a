import { AlexisMarroquinLogo, MenuIcon } from "../../components";

export const Nav = ({open, onClick}) => {
  return (
  <div className="nav">
    <MenuIcon 
      open={open}
      onClick={(e) => {
        if(typeof onClick === 'function') onClick(e);
      }}
    />
    <AlexisMarroquinLogo/>
    <style jsx>{`
      .nav {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding: 2rem;
        border-bottom: 1px solid #eee;
        box-shadow: 1px 1px 1px #eee;
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 1000;
      }
    `}</style>
  </div>
  )
}