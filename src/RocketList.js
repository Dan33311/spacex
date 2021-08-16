const RocketsList = ({ rockets }) => {
  return (
    <div className="rockets-list">
      <h2>Rockets</h2>
      { rockets.map((rocket) => (
        <div key={rocket.id}>
          <h3>{rocket.rocket_name}</h3>
          <p>{rocket.description}</p>
          <ul>
            <li>First flight: {rocket.first_flight}</li>
            
            { rocket.active ? (<li>active</li>) : (<li>inactive</li>) } 
            { rocket.first_stage.reusable ? (<li>Reusable</li>) : (<li>No reusable</li>) }
            <li>Stages: {rocket.stages}</li>
            <li>Boosters: {rocket.boosters}</li>
            <li>Cost per launch: {rocket.cost_per_launch}</li>
            <li>Country: {rocket.country}</li>
            <li>Height:
              <ul>
                <li>meters: {rocket.height.meters}</li>
                <li>feet: {rocket.height.feet}</li>
              </ul>
            </li>  
            <li>Diameter:
              <ul>
                <li>meters: {rocket.diameter.meters}</li>
                <li>feet: {rocket.diameter.feet}</li>
              </ul>
            </li>
            <li><a href="/">wikipedia: {rocket.wikipedia}</a></li>
          </ul>
        </div>
      ))}
    </div>
  );
}
 
export default RocketsList;