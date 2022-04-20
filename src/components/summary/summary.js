import './summary.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Summary() {

  return (
    <div className="summary-container">
      <div className="summary-section">
        <div className="summary-icon">
          <FontAwesomeIcon icon="fa-solid fa-circle-user" />
        </div>
        <div className="summary-text">
          <div className="text-primary blue-text">John Watson</div>
          <div className="text-secondary grey-text">Football</div>
        </div>
      </div>

      <div className="summary-section">
        <div className="summary-icon">
          <FontAwesomeIcon icon="fa-solid fa-circle-user" />
        </div>
        <div className="summary-text">
          <div className="text-secondary blue-text">Contractor</div>
          <div className="text-primary grey-text">Subway</div>
        </div>
      </div>

      <div className="summary-section">
        <div className="summary-icon">
          <FontAwesomeIcon icon="fa-solid fa-circle-user" />
        </div>
        <div className="summary-text">
          <div className="text-secondary blue-text">Opportunity Value</div>
          <div className="text-primary grey-text">$10,000</div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
