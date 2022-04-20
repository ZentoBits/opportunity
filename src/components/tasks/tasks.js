import '../../global.css'
import './tasks.css'
import {tasks} from "../../documents/tasks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Details() {

  return (
    <div className="tasks-container">
      <div className="tasks-title pro">
        <div className="tasks-icon">
          <FontAwesomeIcon icon="fa-solid fa-list-check" />
        </div>
        Recently Updated Tasks
      </div>
      <div className="tasks-list">
        <table className="tasks-table">
          <tr>
            <th>TASK</th>
            <th>ASSIGNED TO</th>
            <th>DUE DATE</th>
          </tr>
          {tasks.map(({task, assignedTo, dueDate, alerts}) => {
            return <tr className="table-rows">
                     <td>
                       <span className="task-icon-warning">
                         <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" /> {alerts}
                       </span>
                       {task}
                     </td>
                     <td>
                       <span className="task-icon-avatar">
                         <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                       </span>
                       {assignedTo}
                     </td>
                     <td>{dueDate}</td>
                   </tr>
          })}
        </table>
      </div>
      <div className="tasks-action">
        <span>View all ></span>
      </div>
    </div>
  );
}

export default Details;
