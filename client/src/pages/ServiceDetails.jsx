import React, { useState } from 'react';
import haircutImg from "../assets/images/haircut.png";
import starIcon from '../assets/images/star.png';
import ServiceAbout from './ServiceAbout';
import Feedback from './Feedback';
import SidePanel from '../components/SidePanel';

const ServiceDetails = () => {
    const [tab, setTab] = useState('about');
    return <section>
        <div className='max-w-[1170px] px-5 mx-auto'>
            <div className='grid md:grid-cols-3 gap-[50px]'>
                <div className='md:col-span-2'>
                    <div className='flex items-center gap-5'>
                        <figure className='max-w-[200px] max-h-[200px]'>
                            <img src={haircutImg} alt='' className='w-full' />
                        </figure>
                        <div>
                            <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                                Hair
                            </span>
                            <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                                Haircut
                            </h3>
                            <div className='flex items-center gap-[6px]'>
                                <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                                    <img src={starIcon} alt='' className='w-[15px] h-[15px]' /> 4.8
                                </span>
                                <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                                    (272)
                                </span>
                            </div>
                            <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>Transform your look with a haircut tailored to your unique preferences. Our stylists will help you achieve the perfect haircut, whether you're looking for a trendy, modern style or a classic, timeless look.</p>

                        </div>
                    </div>

                    <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
                        <button className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={() => setTab('about')}>
                            About
                        </button>
                        <button className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={() => setTab('feedback')}>
                            Feedback
                        </button>
                    </div>

                    <div className='mt-[50px]'>
                        {tab === 'about' && <ServiceAbout />}
                        {tab === 'feedback' && <Feedback />}
                    </div>
                </div>

                <div>
                    <SidePanel />
                </div>

            </div>
        </div>
    </section>
}

export default ServiceDetails;