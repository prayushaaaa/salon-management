import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../../utils/config.js';
import { AiOutlineDelete } from 'react-icons/ai';
import CustomerProfile from './customerProfile';
import EmployeeProfile from './employeeProfile';

const UserProfilePage = () => {
    const user = useContext(AuthContext).user;

    const [isEmployee, setIsEmployee] = useState(user.role == 'Employee' ? 1 : 0);

    const { data: appointments, loading, error } = useFetch(`${BASE_URL}/appointments`);

    return (
        <>
            {
                isEmployee ? <EmployeeProfile /> : <CustomerProfile />
            }
        </>
    );
};

export default UserProfilePage;
