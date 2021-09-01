import useFetch from "./useFetch";
import DragonsList from "./DragonsList";

const Dragons = () => {
  const { data: dragons, isPending, error } = useFetch('https://api.spacexdata.com/v3/dragons')

  return (  
    <div className="rockets">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading ...</div> }
      { dragons && <DragonsList dragons={dragons} />}
    </div>
  );
}
 
export default Dragons;