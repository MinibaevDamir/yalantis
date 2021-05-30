import {employeeAPI} from "../API/api";
import {EMP} from "../Reducers/employeeReducer";

export const getEmployee = () => (dispatch) => {
    employeeAPI.getEmployee().then(response => {
        if (response) {
            let temp = response.data
            temp.forEach(function (item) {
                item.status = false;
            })
            dispatch({type: EMP.SET_EMPLOYEE, persons: temp})
        }
    })
}
export const setEmployee = (persons) => ({type: EMP.SET_EMPLOYEE, persons: persons})
export const setStatus = (id, status) => ({type: EMP.STATUS_CHANGE, id, status})
