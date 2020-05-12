import React, { useState } from 'react';
import { connect } from "react-redux";
import { validationMessages, LoginActionCreator, EmployeesListCreator } from '../redux/actions'
import { isEmpty } from 'lodash'
import { validateUsername, validatePassword, showErrorToast, showSuccessToast, DashboardPageRoutes } from '../utlis'
function Login({ LoginActionCreator, EmployeesListCreator, ...props }) {
  // variable declaration
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errors: {}
  })
  // handle change
  const handleChange = (e) => {
    if (e.target.value) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        errors: Object.assign(formData.errors, { [e.target.name]: "" }),
      });
    } else
      setFormData({
        ...formData,
        [e.target.name]: '',
        errors: Object.assign(formData.errors, { [e.target.name]: "Please enter " + [e.target.name] })
      });
  };
  // Form validation 
  const validateForm = () => {
    const { username, password, errors } = formData;
    //username
    if (formData.hasOwnProperty("username")) {
      if (isEmpty(username)) errors.username = validationMessages.PROVIDE_USERNAME;
      else if (!validateUsername(username))
        errors.username = validationMessages.PROVIDE_VALID_USERNAME;
      else delete errors.username;
    }
    //password
    if (formData.hasOwnProperty("password")) {
      if (isEmpty(password)) errors.password = validationMessages.PROVIDE_PASSWORD;
      else if (!validatePassword(password))
        errors.password = validationMessages.PROVIDE_VALID_PASSWORD;
      else delete errors.password;
    }
    const isFormValid = Object.keys(errors).length !== 0 ? false : true;
    setFormData({
      ...formData,
      errors: errors,
    });
    return isFormValid;
  }
  // Form submit 
  const SubmitLogin = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const { username, password } = formData;
      let user_name = "hruday@gmail.com", pass = "hruday123"
      if (username === user_name && password === pass) {
        let obj = { username: user_name, password: pass }
        LoginActionCreator(obj)
        EmployeesListCreator()
        localStorage.setItem('auth', true)
        showSuccessToast("Login success.")
        props.history.push(DashboardPageRoutes.EMPLOYEES_LIST)
      }
      else showErrorToast("Credentials does not match.please enter valid credentials.")
    }
  }
  let { username, password, errors } = formData;
  return (
    <div className="container">
      <div className="login-wrapper">
        <div className="title-header">
          <h2>Log In</h2>
          <p className="pb-0">Nice to see you again.</p>
        </div>
        <div className="form-wrapper">
          <form >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className={errors.username ? "form-control input-error" : "form-control"} id="username" name="username" placeholder="Enter username/email" value={username} onChange={(e) => handleChange(e)} />
              <span className="text-danger">{errors.username}</span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className={errors.password ? "form-control input-error" : "form-control"} id="password" name="password" placeholder="Enter password" value={password} onChange={(e) => handleChange(e)} />
              <span className="text-danger">{errors.password}</span>
            </div>
            <button type="submit" className="btn btn-success" onClick={SubmitLogin}>Login</button>
          </form>
        </div>

      </div>
    </div>

  )
}
export default connect(null, { LoginActionCreator, EmployeesListCreator })(Login);