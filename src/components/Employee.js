import { FaPencilAlt, FaTimes } from "react-icons/fa";
import "../index.css";
const Employee = ({ employee, onDelete, onEdit }) => {
  return (
    <div>
      <div className="task">
        <div>
          <p className="taskName">
            <span className="textBold">First Name:</span> {employee.firstName}
          </p>
          <p className="taskDate">
            <span className="textBold">Surname:</span> {employee.surname}
          </p>
          <p className="taskDate">
            <span className="textBold">Mobile Number:</span>{" "}
            {employee.mobileNumber}
          </p>
          <p className="taskDate">
            <span className="textBold">E-mail ID:</span> {employee.emailID}
          </p>
        </div>
        <div>
          <p>
            <FaTimes
              onClick={() => onDelete(employee.id)}
              className="delIcon"
            />
          </p>
          <p>
            <FaPencilAlt
              onClick={() => onEdit(employee.id)}
              className="editIcon"
            />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Employee;
