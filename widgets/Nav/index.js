import { AlexisMarroquinLogo, MenuIcon } from "../../components";

export const Nav = ({open, onClick}) => {
  return (
  <div className="nav">

    <div
      className="nav_wrapper"
    >
      <MenuIcon 
        open={open}
        onClick={(e) => {
          if(typeof onClick === 'function') onClick(e);
        }}
      />
      
      <AlexisMarroquinLogo/>
    </div>

    <style jsx>{`
      .nav {
        width: 100%;
        
        padding: 2rem 0;
        border-bottom: 1px solid #eee;
        box-shadow: 1px 1px 1px #eee;
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 1000;
        margin-bottom: 2rem;

        display: flex;
        flex-flow: row wrap;
        justify-content: center;
      }

      .nav_wrapper {
        width: 90%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }

      
    `}</style>
  </div>
  )
}