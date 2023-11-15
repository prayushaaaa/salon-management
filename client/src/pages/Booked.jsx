import React from 'react';
import { Link } from 'react-router-dom';

const BookedPage = () => {
    return (
        <section className='px-5 lg:px-0'>
            <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
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
