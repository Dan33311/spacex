import useFetch from "./useFetch";
import RocketsList from "./RocketList";

// 'https://api.spacexdata.com/v3/rockets'
const Rockets = () => {

  const { data: rockets, isPending, error } = useFetch('https://api.spacexdata.com/v3/rockets')

  return (
    <div className="rockets">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading ...</div> }
      { rockets && <RocketsList rockets={rockets} />}
    </div>
  )
}
 
export default Rockets;