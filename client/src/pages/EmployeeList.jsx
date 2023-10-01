import React from 'react'
import EmployeeCard from './EmployeeCard';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const EmployeeList = () => {
    const { data: employees } = useFetch(`${BASE_URL}/employees`);

    return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-30px] lg:mt-[30px]'>
        {employees.map((employees, index) =>
            <EmployeeCard
                key={index}
                item={employees} />)}
    </div>
}

export default EmployeeList;