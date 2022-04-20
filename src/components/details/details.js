import './details.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Details() {

  return (
    <div className="details-container">
      <div className="details-title">
        <div className="details-icon">
          <FontAwesomeIcon icon="fa-solid fa-file-invoice-dollar" />
        </div>
        Opportunity Details
      </div>
      <div className="details-grid">
        <div className="categories">
          <div className="details-header">Categories</div>
          <div>
            <span className="label">APPEARANCE</span><span className="label">SOCIAL MEDIA</span>
          </div>
        </div>
        <div className="compliance">
          <div className="details-header">Compliance Officer</div>
          <div>peter.freeburg@knights.edu</div>
        </div>
        <div className="description">
          <div className="details-header">Description</div>
          <div>I will be appearing at Subway and posting to their Facebook account</div>
        </div>
      </div>
    </div>
  );
}

export default Details;
