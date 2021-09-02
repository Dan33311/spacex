import useFetch from "./useFetch";
import RocketsList from "./RocketList";
import Footer from "./Footer";

// 'https://api.spacexdata.com/v3/rockets'
const Rockets = () => {

  const { data: rockets, isPending, error } = useFetch('https://api.spacexdata.com/v3/rockets')

  return (
    <div className="rockets">
      { error && <div>{ error }</div>}
      { isPending && <div className="spinner-container">
        <div className="spinner"></div></div> }
      { rockets && <><RocketsList rockets={rockets} />
      <Footer/></>}
    </div>
  )
}
 
export default Rockets;