import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <EmployeesListItem key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {/* <EmployeesListItem name="Eugene A." salary={1000 + "$"}/>
            <EmployeesListItem name="Alex M." salary={200 + "$"}/>
            <EmployeesListItem name="Nick L." salary={600 + "$"}/> */}
            {elements}
        </ul>
    ) 
}

export default EmployeesList;