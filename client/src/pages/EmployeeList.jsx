import React from 'react'
import { employees } from "../assets/data/employees";
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
    return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {employees.map((employees, index) =>
            <EmployeeCard
                key={index}
                item={employees} />)}
    </div>
}

export default EmployeeList;