import { useState, useEffect } from "react";
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
        <a className="left-link" href="/">Home</a>
      </div>

      <div className="links">
        <a className="link" href="/missions">Missions</a>
        <a className="link" href="/rockets">Rockets</a>
        <a className="link" href="/dragons">Dragons</a>
      </div>

    </div>
  );
}


// const Navbar = () => {
//   return (  
//     <div className="navbar">

//       <div className="nav-left">
//         <img className="nav-logo" src={spacexLogo} alt="logo" />
//         <a className="left-link" href="/">Home</a>
//       </div>

//       <div className="links">
//         <a className="link" href="/missions">Missions</a>
//         <a className="link" href="/rockets">Rockets</a>
//         <a className="link" href="/dragons">Dragons</a>
//       </div>

//     </div>
//   );
// }
 
export default Navbar;