export const MenuIcon = ({onClick, open}) => {
  return (
    <button
      onClick={(e) => {
        if (typeof onClick !== "function") return;
        onClick(e);
      }}
    >
      <span className={`top ${open ? 'open' : ''}`} />
      <span className={`middle ${open ? 'open' : ''}`} />
      <span className={`bottom ${open ? 'open' : ''}`} />
      
      <style jsx>{`
        button {
          display: flex;
          flex-flow: column wrap;
          border: 0;
          justify-content: space-between;
          background-color: transparent;
        }
        
        .top,
        .middle,
        .bottom {
          background-color: black;
          padding: .1rem 1.5rem;
          transition: all .2s;
        }

        .top,
        .bottom {
          transform-origin: left;
        }
        
        .top.open {
          transform: rotate(45deg);
        }

        .middle.open {
          opacity: 0;
        }

        .bottom.open {
          transform: rotate(-45deg);
        }

        .open {
          background-color: red;
        }

      `}</style>
    </button>
  );
};
