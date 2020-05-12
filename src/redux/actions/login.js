import { LOGIN, EMPLOYEE_LIST, LOGOUT } from './types'
import { employeeDetailsList } from './employeesList'

//**************************** EDIT CMSLIST DATA ********************************************//
export const LoginActionCreator = (data) => async dispatch => {
  dispatch({ type: LOGIN, payload: data });
};
export const EmployeesListCreator = () => async dispatch => {
  dispatch({ type: EMPLOYEE_LIST, payload: employeeDetailsList });
};
export const Logout = () => async dispatch => {
  dispatch({ type: LOGOUT, payload: '' });
};


