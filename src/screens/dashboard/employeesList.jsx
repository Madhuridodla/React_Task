import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Logout } from '../../redux/actions'

function EmployeesList({ employee_details, login_details, Logout, ...props }) {
  // variable declaration 
  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    if (employee_details && employee_details.length) setEmployeeList(employee_details)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Logout 
  const logout = () => {
    Logout()
    props.history.push('/')
  }
  return (
    <div className="container">
      <h2>Login Details</h2>
      <p>Username: {login_details && login_details.username}</p>
      <p>Password: {login_details && login_details.password}</p>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            employeeList && employeeList.length && employeeList.map((data, key) => {
              return (
                <tr key={key}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>{data.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className="col-2 pull-right m-2">
        <button className="btn btn-lg btn-danger" type="button" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  login_details: state.reducer.loginData,
  employee_details: state.reducer.employeeDetails,
});
export default connect(mapStateToProps, { Logout })(EmployeesList);

