import '../../global.css'
import './notes.css'
import {notes} from "../../documents/notes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Notes() {
  return (
    <div className="notes-container">
      <div className="notes-title pro">
        <div className="notes-icon">
          <FontAwesomeIcon icon="fa-solid fa-message" />
        </div>
        Notes
      </div>
      <div className="notes-list">
        <table className="notes-table">
          <tr>
            <th>FROM</th>
            <th>NOTE</th>
            <th>DATE</th>
          </tr>
          {notes.map(({from, note, date}) => {
            return <tr className="table-rows">
                     <td width="130">
                       <span className="note-icon-avatar">
                         <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                       </span>
                       {from}
                     </td>
                     <td>
                       {note}
                     </td>
                     <td>{date}</td>
                   </tr>
          })}
        </table>
      </div>
      <div className="notes-action">
        <span>View all ></span>
      </div>
    </div>
  );
}

export default Notes;
