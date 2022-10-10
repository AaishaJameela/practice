import "./App.css";
import Header from "./components/Header";
import Employees from "./components/Employees";
import AddEmployee from "./components/AddEmployee";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

function App() {
  const [loading, setloading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  const getEmployees = JSON.parse(localStorage.getItem("Employee added"));
  useEffect(() => {
    if (getEmployees == null) {
      setEmployees([]);
    } else {
      setEmployees(getEmployees);
    }
  }, []);

  const addEmployee = (employee) => {
    const id = uuidv4();
    const newEmployee = { id, ...employee };
    setEmployees([...employees, newEmployee]);
    Swal.fire({
      icon: "success",
      text: "Employee details added.",
    });
    localStorage.setItem(
      "Employee added",
      JSON.stringify([...employees, newEmployee])
    );
  };

  const deleteEmployee = (id) => {
    const deleteEmployee = employees.filter((employee) => employee.id !== id);
    setEmployees(deleteEmployee);
    Swal.fire({
      icon: "success",
      text: "You have deleted an employee!",
    });
    localStorage.setItem("Employee added", JSON.stringify(deleteEmployee));
  };

  const editEmployee = (id) => {
    const firstName = prompt("First name is required.");
    const surname = prompt("Surname is required");
    const mobileNumber = prompt("Mobile number is required");
    const emailID = prompt("E-mail ID is required");
    let data = JSON.parse(localStorage.getItem("taskAdded"));
    const myData = data.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          firstName: firstName,
          surname: surname,
          mobileNumber: mobileNumber,
          emailID: emailID,
          id: uuidv4(),
        };
      }
      return x;
    });
    Swal.fire({
      icon: "success",
      text: "Employee details edited.",
    });
    localStorage.setItem("Employee added", JSON.stringify(myData));
    window.location.reload();
  };

  return (
    <>
      {loading ? (
        <div className="spinnerContainer">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <Header
            showForm={() => setShowAddEmployee(!showAddEmployee)}
            changeTextAndColor={showAddEmployee}
          />
          {showAddEmployee && <AddEmployee onSave={addEmployee} />}
          <h3>Number of Employees: {employees.length}</h3>
          {employees.length > 0 ? (
            <Employees
              employees={employees}
              onDelete={deleteEmployee}
              onEdit={editEmployee}
            />
          ) : (
            "No Employee Found!"
          )}
        </div>
      )}
    </>
  );
}
export default App;
