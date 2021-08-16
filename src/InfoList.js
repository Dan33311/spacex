const InfoList = ({ info }) => {
  return (
    <div className="info">
      <h2>{info.name}</h2>
      <p>{info.summary}</p>
      <div className="info-details">
        <ul>
          <li>founder: {info.founder}</li>
          <li>founded: {info.founded}</li>
          <li>employees: {info.employees}</li>
          <li>vehicles: {info.vehicles}</li>
          <li>launch sites: {info.launch_sites}</li>
          <li>ceo: {info.ceo}</li>
          <li>cto: {info.cto}</li>
          <li>coo: {info.coo}</li>
          <li>cto propulsion: {info.cto_propulsion}</li>
          <li>valuation: {info.valuation}</li>
          <li>headquarters:
            <ul>
              <li>address: {info.headquarters.address}</li>
              <li>city: {info.headquarters.city}</li>
              <li>state: {info.headquarters.state}</li>
            </ul>
          </li>  
        </ul>
      </div>
    </div>
  );
}
 
export default InfoList;