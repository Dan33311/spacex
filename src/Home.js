import useFetch from "./useFetch";
import InfoList from "./InfoList";


const Home = () => {
  const { data: info, isPending, error } = useFetch('https://api.spacexdata.com/v3/info')

  return (
    <>
      { error && <div>{ error }</div>}
      { isPending && <div>Loading ...</div> }
      { info && <InfoList info={info} />}
    </>
  )
}

export default Home;
