import dragonImage from "./images/spacex-dragons.png";

const DragonsList = ({ dragons }) => {

  const doubleWhiteSpace = '\u00A0\u00A0';

  return (
    <div className="dragons-list">

      <div className="dragon-content-1">
        <div className="div-1">
          <img className="dragon-img" src={dragonImage} alt="Dragon" />
        </div>
        <div className="div-2 spacex-box"> 
          <p className="spacex-text">Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).</p>
        </div>
      </div>

      <div className="dragon-content-2">

        { dragons.map((dragon) => (
          <div className="dragon-content-3" key={dragon.id}>
            <h3 className="div-3 spacex-title">{dragon.name}</h3>
            <div className="div-4 spacex-box spacex-text">
              <ul>
                <li><span className="title">Type: {'\u00A0'}{'\u00A0'}</span><span className="content">{dragon.type}</span></li>
                {/* {console.log(Object.keys(dragon)[2])} */}
                <li><span className="title">{Object.keys(dragon)[3]} {doubleWhiteSpace}</span><span className="content">true</span></li>
                <li><span className="title">Crew capacity: {'\u00A0'}{'\u00A0'}</span><span className="content">{dragon.crew_capacity}</span></li>
                <li><span className="title">Orbit duration yr: {'\u00A0'}{'\u00A0'}</span><span className="content">{dragon.orbit_duration_yr}</span></li>
                <li><span className="title">First flight: </span><span className="content">{dragon.first_flight}</span></li>
                <div><span className="title">Diameter: </span>
                  <ul>
                    <li><span className="title">Meters: {'\u00A0'}{'\u00A0'}</span><span className="content">{dragon.diameter.meters}</span></li>
                    <li><span className="title">Feet: {'\u00A0'}{'\u00A0'}</span><span className="content">{dragon.diameter.feet}</span></li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
 
export default DragonsList;