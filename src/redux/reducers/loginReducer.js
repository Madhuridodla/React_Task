import { LOGIN, EMPLOYEE_LIST, LOGOUT } from '../actions'
const INTIAL_STATE = {
    loginData: {},
    employeeDetails: []
}
export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, { loginData: action.payload })
        case EMPLOYEE_LIST:
            return Object.assign({}, state, { employeeDetails: action.payload })

        case LOGOUT:
            return INTIAL_STATE
        default:
            return state;
    }

}