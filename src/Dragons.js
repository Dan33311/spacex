import useFetch from "./useFetch";
import DragonsList from "./DragonsList";
import Footer from "./Footer";

const Dragons = () => {
  const { data: dragons, isPending, error } = useFetch('https://api.spacexdata.com/v3/dragons')

  return (  
    <div className="rockets">
      { error && <div>{ error }</div>}
      { isPending && <div className="spinner-container">
        <div className="spinner"></div></div> }
      { dragons && <><DragonsList dragons={dragons} />
      <Footer></Footer></>
      }
    </div>
  );
}
 
export default Dragons;