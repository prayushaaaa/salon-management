import React, { useEffect } from 'react';
import heroImg01 from '../assets/images/hero-img1.jpg';
import heroImg02 from '../assets/images/hero-img2.jpg';
import heroImg03 from '../assets/images/hero-img3.jpg';
import icon01 from '../assets/images/icon1.png';
import icon02 from '../assets/images/icon2.png';
import faqImg from '../assets/images/faqImg.png';
import icon03 from '../assets/images/icon3.png';
import ServiceList from '../components/ServiceList';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import FaqList from '../components/FaqList';
import Testimonial from '../components/Testimonial';
import useFetch from '../hooks/useFetch';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { loading } = useFetch();
    return (
        <>
            {loading && <h4>Loading.....</h4>}

            {!loading && (<>
                {/* {hero section} */}

                <section className='hero__section pt-[60px] 2xl:h-[800px]'>
                    <div className='container'>
                        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                            {/* {hero content} */}
                            <div>
                                <div className='lg:w-[570px]'>
                                    <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                                        Efforless beauty, perfectly scheduled!
                                    </h1>
                                    <p className='text__para'>
                                        Welcome to our Salon Management System – Your Ultimate Beauty Hub Companion! Say goodbye to the hassle of manual record-keeping and say hello to a seamless and modern solution that empowers your salon to thrive. Join us on this journey to redefine the way you run your beauty business and unlock the full potential of your salon's success.
                                    </p>
                                </div>
                                {/* {hero counter} */}
                                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                                    <div>
                                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                            10+
                                        </h2>
                                        <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'>
                                        </span>
                                        <p className='text__para'>Years of experience</p>
                                    </div>
                                    <div>
                                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                            40+
                                        </h2>
                                        <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'>
                                        </span>
                                        <p className='text__para'>Services Offered</p>
                                    </div>
                                    <div>
                                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                            100%
                                        </h2>
                                        <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'>
                                        </span>
                                        <p className='text__para'>Customer Satisfaction</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[30px] justify-end'>
                                <div>
                                    <img className='w-full ' src={heroImg01} alt='hero image1' />
                                </div>
                                <div className='mt-[30px]'>
                                    <img src={heroImg02} alt='hero image2' className='w-full mb-[30px]' />
                                    <img src={heroImg03} alt='hero image2' className='w-full' />
                                </div>
                            </div>


                        </div>
                    </div>

                </section>

                {/* {hero section end} */}

                <section>
                    <div className='container'>
                        <div className='lg:w-[470px] mx-auto'>
                            <h2 className='heading text-center'>
                                Delivering superior top-notch services
                            </h2>
                            <p className='text__para text-center'>
                                Step into a world of unparalleled beauty at our salon. Elevate your beauty experience with us today!
                            </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                            <div className='py-[30px] px-5'>
                                <div className='flex items-center justify-center'>
                                    <img src={icon01} alt='icon1'></img>
                                </div>

                                <div className='mt-[30px]'>
                                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                                        Book Your Appointment
                                    </h2>
                                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                        Explore our wide range of services on our website to book the perfect treatment that suits your needs.
                                    </p>


                                    <Link to='/services' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRight className='group-hover:text-white w-6 h-5' />

                                    </Link>


                                </div>
                            </div>

                            <div className='py-[30px] px-5'>
                                <div className='flex items-center justify-center'>
                                    <img src={icon02} alt='icon1'></img>
                                </div>

                                <div className='mt-[30px]'>
                                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                                        Visit the Salon
                                    </h2>
                                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                        Visit our salon, where our attentive staff will provide you with personalized services tailored to your preferences.
                                    </p>

                                    <Link to='/services' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRight className='group-hover:text-white w-6 h-5' />

                                    </Link>


                                </div>
                            </div>

                            <div className='py-[30px] px-5'>
                                <div className='flex items-center justify-center'>
                                    <img src={icon03} alt='icon1'></img>
                                </div>

                                <div className='mt-[30px]'>
                                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                                        Relax and Rejuvenate
                                    </h2>
                                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                        Sit back and relax as our professionals work their magic. Share your experience and schedule your next visit!
                                    </p>

                                    <Link to='/services' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRight className='group-hover:text-white w-6 h-5' />

                                    </Link>


                                </div>
                            </div>

                        </div>



                    </div>
                </section>

                {/* {services section} */}

                <section>
                    <div className='container'>
                        <div className='lg:w-[470px] mx-auto'>
                            <h2 className='heading text-center'>Our services</h2>
                            <p className='text__para text-center'>
                                With a passion for the art of beauty, we are proud to offer a range of premier salon services that cater to your every need.
                            </p>
                        </div>
                        <ServiceList size='6' />
                    </div>
                </section>

                {/* {FAQs section} */}

                <section>
                    <div className='container'>
                        <div className='flex items-center justify-between gap-[50px] lg:gap-0'>
                            <div className='w-1/2 hidden md:block'>
                                <img src={faqImg} alt='FAQ-image' />
                            </div>

                            <div className='w-full md:w-1/2'>
                                <h2 className='heading'>
                                    Most questions from our customers
                                </h2>
                                <FaqList />
                            </div>
                        </div>
                    </div>
                </section>

                {/* {Testimonial section} */}

                <section>
                    <div className='container'>
                        <div className='lg:w-[470px] mx-auto'>
                            <h2 className='heading text-center'>
                                What our clients say
                            </h2>
                            <p className='text__para text-center'>
                                Our clients' satisfaction is our top priority. Here's what a few of them have to say about their experiences with us.
                            </p>
                        </div>
                        <Testimonial />
                    </div>
                </section>

            </>)}
        </>
    )
}

export default Home;