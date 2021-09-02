import { Link } from "react-router-dom"
import notfoundImage from "./images/notfoundimg.png";

const NotFound = () => {
  return (  
    <div className="not-found">
    
      <p className="spacex-text p1">Oops...</p>
      <h2>404</h2>
      <p className="spacex-text p2">Not Found from here to the Moon</p>
      <img src={notfoundImage} alt="notfound" />
      <Link className="spacex-link title" to="/" >Back to the home page</Link>

    </div>
  );
}
 
export default NotFound;