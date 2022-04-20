import '../../global.css'
import './tab.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Tab({text, icon, pro, activeTab, setActiveTab}) {
  function setTab() {
    setActiveTab(text.toLowerCase())
  }

  return (
    <div className={
      `tab 
      ${activeTab === text.toLowerCase() ? 'activeTab' : ''}
      ${pro ? 'pro' : ''}
      `} onClick={setTab}>
      <FontAwesomeIcon icon={`fa-solid ${icon}`} className="tab-icon" />
      {text}
    </div>
  );
}

export default Tab;
