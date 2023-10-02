import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../../utils/config.js';
import { AiOutlineDelete } from 'react-icons/ai';

const EmployeeProfile = () => {
    const [isEmployee, setIsEmployee] = useState(0);

    const user = useContext(AuthContext).user;

    const { data: appointments, loading, error } = useFetch(`${BASE_URL}/appointments`);

    const allAppointments = appointments.filter(appointment => appointment.employee == user._id);

    const itemsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const appointmentsToDisplay = allAppointments.slice(startIndex, endIndex);

    const totalPages = Math.ceil(allAppointments.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <section className='bg-gray-100 py-10'>
            <div className='container'>
                <div className='shadow-xl bg-white p-8 rounded-lg'>
                    {/* User Information */}
                    <div className='mb-8 text-center'>
                        {/* <img
                        src={userData.avatar}
                        alt='User Avatar'
                        className='w-32 h-32 rounded-full object-cover mx-auto mb-4'
                        /> */}
                        <h2 className='text-2xl font-bold'>{user.name}</h2>
                        <p className='text-gray-600'>{user.email}</p>
                    </div>

                    {/* Loyalty Points */}
                    <div className='text-center mb-8'>
                        <h2 className='text-2xl font-bold'>Loyalty Points</h2>
                        <p className='text-gray-600'>{user.points} points</p>
                    </div>

                    {/* Appointments Section */}
                    <div className='mb-8'>
                        <h2 className='text-2xl font-bold mb-4'>Upcoming Appointments</h2>
                        <ul className='space-y-4'>
                            {appointmentsToDisplay.map((appointment) => (
                                <li key={appointment._id}>
                                    <div className='bg-gray-200 p-4 rounded-lg shadow-md flex justify-between items-center'>
                                        <div>
                                            <h3 className='text-lg font-semibold'>{appointment.date}</h3>
                                            <p className='text-gray-600'>{appointment.time} - {appointment.service}</p>
                                            <p className='text-gray-600 mt-2'>{appointment.price}</p>
                                            <p className={`mt-2 text-sm font-semibold ${appointment.status === 'Confirmed' ? 'text-green-500' : 'text-blue-500'}`}>
                                                Status: {appointment.status}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteAppointment(appointment._id)}
                                            className='px-3 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center'
                                        >
                                            <AiOutlineDelete className='mr-1' />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Pagination */}
                    <div className='flex justify-center space-x-2'>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmployeeProfile;
