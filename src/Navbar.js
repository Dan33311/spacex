const Navbar = () => {
  return (  
    <div className="navbar">
      <h2>SpaceX</h2>
      <div className="links">
        <a href="/rockets">Rockets</a>
        <a href="/missions">Missions</a>
        <a href="/launches">Launches</a>
      </div>
    </div>
  );
}
 
export default Navbar;