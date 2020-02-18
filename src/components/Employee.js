import React from "react";

function Employee(props) {
  console.log(props);
  
  return (
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(emp => (
          <tr>
            <td>
              <img src={emp.picture.thumbnail} alt="Employee" />
            </td>
            <td>{emp.name.first + " " + emp.name.last}</td>
            <td>{emp.phone}</td>
            <td>{emp.email}</td>
            <td>{emp.dob.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Employee;
