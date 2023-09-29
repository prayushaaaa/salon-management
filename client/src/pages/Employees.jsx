import React, { useEffect } from 'react';
import EmployeeList from './EmployeeList';

const Employees = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <>
        <div className='lg:w-[470px] mx-auto mt-12'>
            <h2 className='heading text-center'>Our employees</h2>
            <p className='text__para text-center'>
            </p>
        </div>

        {/* {content cards} */}
        <section>
            <div className='container'>
                <EmployeeList />
            </div>
        </section>
    </>
}

export default Employees;