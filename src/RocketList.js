import rocketImage from "./images/rocket.png";


const RocketsList = ({ rockets }) => {
  return (
    <div className="rockets-list">

      <div className="rc-2">
        <img className="r-img" src={rocketImage} alt="Rocket" />
      </div>

      <div className="rc-1">
        { rockets.map((rocket) => (
          <div className="rp" key={rocket.id}>
            <h3 className="rname spacex-title">{rocket.rocket_name}</h3>
            <div className="rbox spacex-box">
              <div className="rgroup1">
                <p className="rdiv1 title">Description: </p>
                <p className="rdiv2">{rocket.description}</p>
              </div>

              <div className="rgroup2">
                <div className="rdiv3">
                  <ul>
                    <li><span className="title">First flight: </span><span className="content">{rocket.first_flight}</span></li>
                    <li><span className="title">Country: </span><span className="content">{rocket.country}</span></li>
                    <li><span className="title">Active: </span><span className="content">{ rocket.active === true ? 'true' : 'false' }</span></li>
                    <li><span className="title">Stages: </span><span className="content">{rocket.stages}</span></li>
                    <li><span className="title">Boosters: </span><span className="content">{rocket.boosters}</span></li>
                    <li><span className="title">Cost per launch: </span><span className="content">{rocket.cost_per_launch}</span></li>
                  </ul>
                </div>

                <div className="rdiv4">
                  <ul>
                    <li><span className="title">First stage: </span> 
                      <ul>
                        <li><span className="title">Reusable: </span><span className="content">{ rocket.first_stage.reusable === true ? 'true' : 'false' }</span></li>
                        <li><span className="title">Engines: </span><span className="content">{rocket.first_stage.engines}</span></li>
                        <li><span className="title">Fuel amont tons: </span><span className="content">{rocket.first_stage.fuel_amount_tons}</span></li>
                        <li><span className="title">Burn time sec: </span><span className="content">{rocket.first_stage.burn_time_sec}</span></li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="rdiv5c">
                  <ul>
                    <li className="rdiv5"><span className="title">Diameter: </span>
                      <ul>
                        <li><span className="title">Meters: </span><span className="content">{rocket.diameter.meters}</span></li>
                        <li><span className="title">Feet: </span><span className="content">{rocket.diameter.feet}</span></li>
                      </ul>
                    </li>
                    <li className="rdiv6"><span className="title">Height: </span>
                      <ul>
                        <li><span className="title">Meters: </span><span className="content">{rocket.height.meters}</span></li>
                        <li><span className="title">Feet: </span><span className="content">{rocket.height.feet}</span></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
 
export default RocketsList;