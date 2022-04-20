import {useState} from "react";
import './opportunity.css'
import {tabs} from "../../documents/tabs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Tab from "../tab/tab";
import Summary from "../summary/summary";
import Details from "../details/details";
import Tasks from "../tasks/tasks";
import Notes from "../notes/notes";

function Opportunity() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div>
      <div className="opportunity-header">
        <div>
          <h1>Subway Appearance & Facebook Posting</h1>
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square"/>
        </div>
        <div className="opportunity-header-button">
          <FontAwesomeIcon icon="fa-solid fa-download"/>
          Export to PDF
        </div>
      </div>

      <div className="opportunity-tabs">
        <div className="tabs-container">
          {tabs.map((tab, i) => <Tab {...tab} activeTab={activeTab} setActiveTab={setActiveTab} key={i}/>)}
        </div>
      </div>
      <div className="opportunity-body">
        {activeTab === 'overview'
          ? <div className="opportunity-container">
              <Summary />
              <Details />
              <div className="fifty-fifty">
                <div>
                  <Tasks />
                </div>
                <div>
                  <Notes />
                </div>
              </div>
            </div>
          : <div className="opportunity-container">
              {tabs.find(tab => tab.text.toLowerCase() === activeTab).pro ? `Upgrade to Athliance PRO to unlock the ${activeTab} service` : `${activeTab} tab`}
            </div>
        }
      </div>
    </div>
  );
}

export default Opportunity;
