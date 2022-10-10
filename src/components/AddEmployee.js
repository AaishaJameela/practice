import { useState } from "react";
import Swal from "sweetalert2";

const AddEmployee = ({ onSave }) => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!firstName && !surname && !mobileNumber && !emailID) {
      Swal.fire({
        icon: "error",
        text: "Please fill in the details",
      });
    } else if (!firstName && surname && mobileNumber && emailID) {
      Swal.fire({
        icon: "error",
        text: "First name is required",
      });
    } else if (firstName && !surname && mobileNumber && emailID) {
      Swal.fire({
        icon: "error",
        text: "Surname is required",
      });
    } else if (firstName && surname && mobileNumber && !emailID) {
      Swal.fire({
        icon: "error",
        text: "E-mail ID is required",
      });
    } else if (firstName && surname && !mobileNumber && emailID) {
      Swal.fire({
        icon: "error",
        text: "Mobile number is required",
      });
    } else {
      onSave({ firstName, surname, mobileNumber, emailID });
    }
    setFirstName("");
    setSurname("");
    mobileNumber("");
    emailID("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>First Name</label>
        <input
          type="text"
          placeholder="Add employee's first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Surname</label>
        <input
          type="text"
          placeholder="Add employee's surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Mobile Number</label>
        <input
          type="text"
          placeholder="Add employee's mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>E-mail ID</label>
        <input
          type="text"
          placeholder="Add employee's e-mail id"
          value={emailID}
          onChange={(e) => setEmailID(e.target.value)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Add Employee" />
    </form>
  );
};
export default AddEmployee;
