import Employee from "./Employee";
import "../index.css";
const Employees = ({ employees, onDelete, onEdit }) => {
  return (
    <>
      {employees.map((employee) => (
        <Employee
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
};
export default Employees;
