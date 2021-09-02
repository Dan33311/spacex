import useFetch from "./useFetch";
import InfoList from "./InfoList";
import Footer from "./Footer";


const Home = () => {
  const { data: info, isPending, error } = useFetch('https://api.spacexdata.com/v3/info')

  return (
    <>
      { error && <div>{ error }</div>}
      { isPending && <div className="spinner-container">
        <div className="spinner"></div></div> }
      { info && <><InfoList info={info} />
        <Footer/></>}
    </>
  )
}

export default Home;
