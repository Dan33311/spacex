import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spacexLogo from "./images/spacex-logo.png"


const Navbar = () => {

  const [scrolled,setScrolled]= useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }

  return (  
    <div className={x.join(" ")}>

      <div className="nav-left">
        <img className="nav-logo" src={spacexLogo} alt="logo" />
      </div>

      <div className="links">
        <Link className="link" to="/">COMPANY</Link>
        <Link className="link" to="/dragons">DRAGONS</Link>
        <Link className="link" to="/rockets">ROCKETS</Link>
      </div>

    </div>
  );
}
 
export default Navbar;