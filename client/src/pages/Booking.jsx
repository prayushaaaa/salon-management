import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from '../../utils/config.js';
import { AuthContext } from '../context/AuthContext';


const BookingAppointment = () => {
    const { id } = useParams();

    const { data: service, loading, error } = useFetch(`${BASE_URL}/services/${id}`);
    const { data: employees } = useFetch(`${BASE_URL}/employees`);

    const employee = employees.find(employee => service.category == employee.category);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        phoneNumber: '',
        date: '',
        time: '',
    });

    const [isAvailable, setIsAvailable] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setIsAvailable(false);
    }

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);


    const checkAvailability = async (e) => {
        e.preventDefault();

        if (!formData.date || !formData.time) {
            alert('Please fill in all fields');
            return;
        }

        try {
            const requestBody = {
                date: formData.date,
                time: formData.time,
                service,
                employee
            };

            const availabilityUrl = `${BASE_URL}/appointments/check_availability`;

            const res = await fetch(availabilityUrl, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify(requestBody),
            });

            if (!res.ok) {
                const result = await res.json();
                alert(result.message);
                return;
            }

            const result = await res.json();

            setIsAvailable(result.data);

            if (result.data) {
                alert("Booking available");
            } else {
                alert("Booking not available");
            }
        }
        catch (err) {
            console.error(err);
            alert('Failed to check availability');
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.phoneNumber || !formData.date || !formData.time) {
            alert('Please fill in all fields');
            return;
        }

        try {
            if (!user || user === undefined || user === null) {
                alert('Please Sign in ')
            }

            const reviewObj = {
                ...formData,
                service,
                user,
                price: service.price,
                employee
            };

            const res = await fetch(`${BASE_URL}/appointments/book_appointment/${id}`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${user.token}`

                },
                body: JSON.stringify(reviewObj)
            });

            const result = await res.json();
            if (!res.ok) alert(result.message);
            else navigate('/booked');

        }
        catch (err) {
            alert(err.message);
        }
    }

    let date = new Date().toJSON().slice(0, 10);

    const currentHour = new Date().getHours().toString().padStart(2, '0');
    const currentMinute = new Date().getMinutes().toString().padStart(2, '0');
    const currentTime = currentHour + ':' + currentMinute;

    return (
        <section className='px-5 lg:px-0'>
            <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
                <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-2'>
                    Book an Appointment for {service.name}
                </h3>
                <p className='text-irisBlueColor text-[18px] leading-6 mb-2'>
                    Price: Rs.{service.price}
                </p>
                <form action='' className='py-4 md:py-0' onSubmit={handleSubmit}>
                    <div className='mb-5'>
                        <input
                            type='tel'
                            placeholder='Contact Number'
                            name='phoneNumber'
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                            required
                        />
                    </div>
                    <div className='mb-5'>
                        <input
                            type='date'
                            placeholder='Select Date'
                            name='date'
                            value={formData.date}
                            min={date}
                            onChange={handleInputChange}
                            className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                            required
                        />
                    </div>
                    <div className='mb-5'>
                        <input
                            type='time'
                            placeholder='Select Time'
                            name='time'
                            value={formData.time}
                            onChange={handleInputChange}
                            className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                            required
                            min="9:00"
                            max='17:00'
                        />
                        <p className='text-irisBlueColor text-[16px] leading-6 mt-2'>
                            Appointment times are available between 9 AM and 5 PM.
                        </p>
                    </div>
                    <div className='mt-7'>
                        {!isAvailable && <button
                            className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
                            onClick={checkAvailability}
                        >
                            Check Availability
                        </button>}

                        {isAvailable && <button
                            type='submit'
                            className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'

                        >
                            Book Now
                        </button>}
                    </div>
                </form>
            </div>
        </section>
    );
}

export default BookingAppointment;
