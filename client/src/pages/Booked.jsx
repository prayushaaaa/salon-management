import React from 'react';
import { Link } from 'react-router-dom';

const BookedPage = () => {
    return (
        <section className='px-5 lg:px-0'>
            <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
                <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-6'>
                    Booked Page
                </h3>
                <div className='mb-6'>
                    <p className='text-textColor text-[18px] leading-6 mb-2'>
                        Service: Example Service Name
                    </p>
                    <p className='text-textColor text-[18px] leading-6'>
                        Price: $50
                    </p>
                </div>
                <div className='mb-6'>
                    <p className='text-textColor text-[18px] leading-6 mb-2'>
                        Contact Number: 123-456-7890
                    </p>
                    <p className='text-textColor text-[18px] leading-6'>
                        Date: 2023-10-01
                    </p>
                </div>
                <div className='mb-6'>
                    <p className='text-textColor text-[18px] leading-6'>
                        Receipt Number: 12345
                    </p>
                </div>
                <hr className='border-t border-solid border-[#0066ff61]' />
                <div className='mt-6'>
                    <p className='text-textColor text-[18px] leading-6 mb-2'>
                        Total Amount Paid:
                    </p>
                    <p className='text-primaryColor text-[24px] leading-8 font-bold'>
                        $50.00
                    </p>
                </div>
                <div className='mt-6'>
                    <p className='text-textColor text-[18px] leading-6'>
                        Thank you for booking your appointment with us!
                    </p>
                </div>
                <div className='mt-6'>
                    <Link
                        to='/'
                        className='bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 inline-block'
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default BookedPage;
