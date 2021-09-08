import companyImage from "./images/spacex-Ptd-iTdrCJM-unsplash.jpg"

const InfoList = ({ info }) => {
  return (
    <div className="info">

      <div className="info-summary">
        <h3 className='spacex-title'>SPACEX SUMMARY</h3>
        <div className="info-p spacex-box">
          <p className='spacex-text'>{info.summary}</p>
        </div>
        <img src={companyImage} alt="company image" />
      </div>

      <div className="info-details">
        <h3 className='spacex-title'>Company Info</h3>
        <div className="info-ul spacex-box">
          <ul className='spacex-text'>
            <li><span className="title">Founder: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.founder}</span></li>
            <li><span className="title">Founded: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.founded}</span></li><br />
            <li><span className="title">Employees: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.employees}</span></li>
            <li><span className="title">Vehicles: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.vehicles}</span></li>
            <li><span className="title">Launch sites: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.launch_sites}</span></li><br />
            <li><span className="title">CEO: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.ceo}</span></li>
            <li><span className="title">CTO: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.cto}</span></li>
            <li><span className="title">COO: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.coo}</span></li>
            <li><span className="title">CTO Propulsion: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.cto_propulsion}</span></li><br />
            <li><span className="title">Valuation: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.valuation}</span></li><br />
            <div className="headq">Headquarters:
              <ul>
                <li><span className="title">Address: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.headquarters.address}</span></li>
                <li><span className="title">City: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.headquarters.city}</span></li>
                <li><span className="title">State: {'\u00A0'}{'\u00A0'}</span><span className="content">{info.headquarters.state}</span></li>
              </ul>
            </div>  
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default InfoList;