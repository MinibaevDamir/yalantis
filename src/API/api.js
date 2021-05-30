import axios from "axios";

export const employeeAPI = {
    getEmployee() {
        return axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    }
}