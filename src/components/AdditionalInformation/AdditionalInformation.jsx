import { Link, Outlet } from "react-router-dom";
import './AdditionalInformation.css'

const AdditionalInformation = () => {
  return (
    <div className="Container Info-container">    
      <h2 className="Info-title">Additional information</h2>
      
      <ul className="Info-list">
        <li className="Info-list__item">
          <Link to='cast'>Cast</Link>
        </li>
        
        <li className="Info-list__item">
          <Link to='reviews'>Reviews </Link></li>
      </ul>
      <Outlet />      
    </div>
  );
};

export default AdditionalInformation;