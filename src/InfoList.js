const InfoList = ({ info }) => {
  return (
    <div className="info">

      <div className="info-summary">
        <h3>SPACEX SUMMARY</h3>
        <div className="info-p">
          <p>{info.summary}</p>
        </div>
      </div>

      <div className="info-details">
        <h3>Company Info</h3>
        <div className="info-ul">
          <ul>
            <li><span className="title">founder: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.founder}</span></li>
            <li><span className="title">founded: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.founded}</span></li><br />
            <li><span className="title">employees: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.employees}</span></li>
            <li><span className="title">vehicles: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.vehicles}</span></li>
            <li><span className="title">launch sites: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.launch_sites}</span></li><br />
            <li><span className="title">ceo: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.ceo}</span></li>
            <li><span className="title">cto: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.cto}</span></li>
            <li><span className="title">coo: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.coo}</span></li>
            <li><span className="title">cto propulsion: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.cto_propulsion}</span></li><br />
            <li><span className="title">valuation: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.valuation}</span></li><br />
            <div className="headq">headquarters:
              <ul>
                <li><span className="title">address: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.headquarters.address}</span></li>
                <li><span className="title">city: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.headquarters.city}</span></li>
                <li><span className="title">state: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.headquarters.state}</span></li>
              </ul>
            </div>  
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default InfoList;