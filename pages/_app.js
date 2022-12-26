
// widgets
import { useState } from 'react';
import { Nav, MobileMenu } from '../widgets';

// styles
import "../styles/globals.css";

const initialMenuOpen = false;

function MyApp({ Component, pageProps }) {  
  
  const [ menuOpen, setMenuOpen ] = useState(initialMenuOpen);

  return (
  <div className="app">
    
    <Nav
      open={menuOpen}
      onClick={(e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
      }}
    />
    <MobileMenu 
      open={menuOpen}
      onClose={() => {
        setMenuOpen(false);
      }}
      onClick={(e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
      }}
    />
    <Component {...pageProps} />
  
    <style jsx>{`
      .app {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }
    `}</style>
  </div>
  )
}

export default MyApp
