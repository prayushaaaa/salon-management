import React from 'react'
// import employees from '../assets/data/employees';
// import image from "../assets/images/"
// import Employee from "../assets/images/employee1.jpg"

const EmployeeCard = ({ item, index }) => {
    const { name, specialization, photo } = item;
    return <div className='p-3 lg:p-5'>
        <div>
            <img src={photo} alt='employee photo' />
        </div>

        <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>
            {name}
        </h2>

        <div className='mt-2 lg:mt-4 flex items-center justify-between'>
            <span className='bg-[#CCF0F3] text-[#297980] py-1 px-2 lg:py-2 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold'>{specialization}</span>
        </div>

    </div>
}

export default EmployeeCard;