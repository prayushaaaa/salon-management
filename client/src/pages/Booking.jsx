import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BookingAppointment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        contactNumber: '',
        selectedDate: '',
        selectedTime: '', // New field for time
    });

    const [selectedService, setSelectedService] = useState('Example Service Name');
    const servicePrice = '$50'; // Replace with the actual service price

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.contactNumber || !formData.selectedDate || !formData.selectedTime) {
            alert('Please fill in all fields');
            return;
        }

        navigate('/booked');
    }

    return (
        <section className='px-5 lg:px-0'>
            <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
                <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-2'>
                    Book an Appointment for {selectedService}
                </h3>
                <p className='text-irisBlueColor text-[18px] leading-6 mb-2'>
                    Price: {servicePrice}
                </p>
                <form action='' className='py-4 md:py-0' onSubmit={handleSubmit}>
                    <div className='mb-5'>
                        <input
                            type='tel'
                            placeholder='Contact Number'
                            name='contactNumber'
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                            className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                            required
                        />
                    </div>
                    <div className='mb-5'>
                        <input
                            type='date'
                            placeholder='Select Date'
                            name='selectedDate'
                            value={formData.selectedDate}
                            onChange={handleInputChange}
                            className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                            required
                        />
                    </div>
                    <div className='mb-5'>
                        <input
                            type='time'
                            placeholder='Select Time'
                            name='selectedTime'
                            value={formData.selectedTime}
                            onChange={handleInputChange}
                            className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                            required
                            min='09:00'
                            max='17:00'
                        />
                        <p className='text-irisBlueColor text-[16px] leading-6 mt-2'>
                            Appointment times are available between 9 AM and 5 PM.
                        </p>
                    </div>
                    <div className='mt-7'>
                        <button
                            type='submit'
                            className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
                        >
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default BookingAppointment;
