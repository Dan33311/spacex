import spacexLogo from "./images/spacex-logo.png"


const Navbar = () => {
  return (  
    <div className="navbar">

      <div className="nav-left">
        <img className="nav-logo" src={spacexLogo} alt="logo" />
        <a className="link" href="/">Home</a>
      </div>

      <div className="links">
        <a className="link" href="/missions">Missions</a>
        <a className="link" href="/rockets">Rockets</a>
        <a className="link" href="/launches">Dragons</a>
      </div>

    </div>
  );
}
 
export default Navbar;