import {connect} from "react-redux";
import React, {Component} from 'react';
import {getEmployee, setEmployee, setStatus} from "../Actions/employeeAction";
import EmployeePage from "../Components/EmployeePage";

const storageName = 'userData'

class EmployeeContainerAPI extends Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem('userData')) {
            this.state = {
                employee: JSON.parse(localStorage.getItem('userData')).persons
            }
        }
    }

    componentDidMount() {
        if (this.state) {
            this.props.setEmployee(this.state.employee)
        } else {
            this.props.getEmployee()
        }
    }

    componentDidUpdate() {
        localStorage.setItem(storageName, JSON.stringify(this.props))
    }

    render() {
        if (this.props.persons != null) {
            return <div>
                <EmployeePage employee={this.props.persons} setStatus={this.props.setStatus}/>
            </div>
        } else {
            return <></>
        }
    }
}


const mapStateToProps = (state) => ({persons: state.employee.persons})

const EmployeeContainer = connect(mapStateToProps, {getEmployee, setStatus, setEmployee})(EmployeeContainerAPI);
export default EmployeeContainer;