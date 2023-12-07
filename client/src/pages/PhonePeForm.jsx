import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../../utils/config.js';
import useFetch from '../hooks/useFetch';
import { FaMoneyBillAlt } from 'react-icons/fa';

const PhonePeForm = () => {
    const { loading } = useFetch();
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: user.name,
        number: '',
        amount: 100,
        user
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const { appointmentId } = useParams();

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/phonepe/payment/${appointmentId}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.message);
            } else {
                // If the request is successful, you may want to redirect or perform other actions
                // For example, redirecting to the returned payment URL
                window.location.href = result.data;
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Error! Cannot proceed with the payment.');
        }
    };


    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-8 px-5 lg:px-0'>
            <div className='md:flex md:items-center md:justify-start mx-20'>
                {/* Pay Icon and Text */}
                <div className='text-left'>
                    <FaMoneyBillAlt className='text-primaryColor text-9xl mb-4 ' />
                    <p className='text-primaryColor font-bold text-5xl'>Your secure and convenient payment solution.</p>
                </div>
            </div>
            <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
                <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
                    Make a Payment<span className='text-primaryColor'> Now!</span>
                </h3>
                <form action='' className='py-4 md:py-0' onSubmit={submitHandler}>
                    <div className='mb-5'>
                        <label className='block text-[18px] text-headingColor mb-2'>Name:</label>
                        <input
                            type='text'
                            placeholder='Enter Your Name'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                            disabled
                            required
                        />
                    </div>
                    <div className='mb-5'>
                        <label className='block text-[18px] text-headingColor mb-2'>Phone Number:</label>
                        <input
                            type='string'
                            placeholder='Enter Your Phone Number'
                            name='number'
                            value={formData.number}
                            onChange={handleInputChange}
                            className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                            required
                        />
                    </div>
                    <div className='mb-5'>
                        <label className='block text-[18px] text-headingColor mb-2'>Amount:</label>
                        <input
                            type='text'
                            placeholder='Enter amount'
                            name='amount'
                            value={100}
                            onChange={handleInputChange}
                            className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                            disabled
                            required
                        />
                    </div>
                    <div className='mt-7'>
                        <button
                            type='submit'
                            className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
                            onClick={submitHandler}
                        >
                            Make Payment
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PhonePeForm;
