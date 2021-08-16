import useFetch from "./useFetch";
import InfoList from "./InfoList";
import backgroundImage from "./images/spacex-Ptd-iTdrCJM-unsplash.jpg"


const Home = () => {
  const { data: info, isPending, error } = useFetch('https://api.spacexdata.com/v3/info')

  return (
    <div className="info">
      <img src={backgroundImage} alt="background" />
      { error && <div>{ error }</div>}
      { isPending && <div>Loading ...</div> }
      { info && <InfoList info={info} />}
    </div>
  )
}

export default Home;
