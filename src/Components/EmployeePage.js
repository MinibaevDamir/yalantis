import moment from 'moment'
import data from '../Data/Data.json'

const EmployeePage = (props) => {

    let alphabet = data.alphabet
    let months = data.months
    const radioChange = (value, id) => {
        props.setStatus(id, value)
    }

    return (
        <div>
            <div className='main'>
                <div className='employeesBlock'>
                    <h1 className='employees-title'>
                        Employees
                    </h1>
                    <div className='byLetter'>
                        {alphabet.map(letter => (
                                <div className='letter'>
                                    <h2>
                                        {letter}
                                    </h2>
                                    <div>
                                        {props.employee.filter(e => e.lastName.match(letter)).map(filteredEmployee => (
                                                <div>
                                                    <h2 className={filteredEmployee.status ? "active" : "not-active"}>
                                                        {filteredEmployee.lastName} {filteredEmployee.firstName}
                                                    </h2>
                                                    <form>
                                                        <div>
                                                            <input type="radio" name="status"
                                                                   onChange={() => radioChange(true, filteredEmployee.id)}
                                                                   checked={filteredEmployee.status === true}/>
                                                            Active
                                                        </div>
                                                        <div>
                                                            <input type="radio" name="status"
                                                                   onChange={() => radioChange(false, filteredEmployee.id)}
                                                                   checked={filteredEmployee.status === false}/>
                                                            Not active
                                                        </div>
                                                    </form>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    {props.employee.filter(e => e.lastName[0].match(letter)).length === 0 ?
                                        <h2>-----------</h2> : <></>}
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className='birthdayBlock'>
                    <hr className="verticalLine"/>
                    <h1 className="birthday">
                        Employees birthday
                    </h1>
                    <hr/>
                    <div className="birthday">
                        {props.employee.filter(e => e.status).length === 0 ? <h2>Employees List is empty</h2> : <></>}
                        {months.map(m => (<div>
                            {props.employee.filter(e => e.status && m === moment(e.dob).format("MMMM")).length > 0 ?
                                <h2>{m}</h2> : <></>}
                            {props.employee.filter(e => e.status).map(filteredEmployee => (<div>
                                <ul>
                                    {m === moment(filteredEmployee.dob).format("MMMM") ?
                                        <li>
                                            <h3> {filteredEmployee.lastName} {filteredEmployee.firstName} - {moment(filteredEmployee.dob).format("D MMMM YYYY")}</h3>
                                        </li>
                                        : <h4></h4>}
                                </ul>
                            </div>))}
                        </div>))}
                    </div>
                </div>
            </div>
            <hr className="centralLine"/>
        </div>
    );
}

export default EmployeePage;
