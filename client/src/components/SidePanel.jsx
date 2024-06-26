import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import React, { useContext } from 'react'

const SidePanel = (props) => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleButtonClick = async e => {
    e.preventDefault();
    try {
      if (!user || user === undefined || user === null) {
        alert('Please Sign in ')
      }
      else {
        navigate(`/book_appointment/${id}`);
      }
    }
    catch (err) {
      null;
    }
  };

  return <div className='shadow-lg p-3 lg:p-5 rounded-md'>
    <div className='flex items-center justify-between'>
      <p className='text__para mt-0 font-semibold'>Price</p>
      <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>Rs. {props.price}</span>
    </div>
    <div className='flex items-center justify-between  text-irisBlueColor'>
      <p className='text__para mt-0'>Points</p>
      <span className='text-[14px] leading-7 lg:text-[20px] lg:leading-8'> {props.points}</span>
    </div>

    {/* <div className='mt-[30px]'>
      <p className='text__para mt-0 font-semibold text-headingColor'>
        Available time slots:
      </p>

      <ul className='mt-3'>
        <li className='flex items-center justify-between mb-2'>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            Sunday
          </p>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            4:00PM - 9:30PM
          </p>
        </li>
        <li className='flex items-center justify-between mb-2'>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            Monday
          </p>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            4:00PM - 9:30PM
          </p>
        </li>
        <li className='flex items-center justify-between mb-2'>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            Tuesday
          </p>
          <p className='text-[15px] leading-6 text-textColor font-semibold'>
            4:00PM - 9:30PM
          </p>
        </li>
      </ul>
    </div> */}

    <button className='btn px-2 w-full rounded-md' onClick={handleButtonClick}>Book Appointment</button>
  </div>
}

export default SidePanel