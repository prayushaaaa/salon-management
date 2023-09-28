import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import customerAvatar from '../assets/images/customer.png';
import { HiStar } from 'react-icons/hi';
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../../utils/config.js";

const Testimonial = () => {

    const { data: reviews } = useFetch(`${BASE_URL}/reviews`);

    return (
        <div className='mt-[30px] lg:mt-[55px]'>
            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }}>

                {reviews && reviews.map((review, index) => {
                    let starArray;

                    const renderStars = (rating) => {
                        const stars = [];
                        for (let i = 0; i < rating; i++) {
                            stars.push(<HiStar key={i} className='text-yellowColor w-[18px] h-5' />);
                        }
                        return stars;
                    };

                    return <SwiperSlide key={index}>
                        <div className='py-[30px] px-5 rounded-3'>
                            <div className='flex items-center gap-[13px]'>
                                <img src={customerAvatar} alt='Cutomer Avatar'></img>
                                <div>
                                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>{review?.user.name || "Unknown User"}</h4>
                                    <div className='flex items-center gap-[2px]'>
                                        {
                                            renderStars(review.rating)
                                        }
                                        {/* <HiStar className='text-yellowColor w-[18px] h-5' />
                                        
                                        <HiStar className='text-yellowColor w-[18px] h-5' />
                                        <HiStar className='text-yellowColor w-[18px] h-5' />
                                        <HiStar className='text-yellowColor w-[18px] h-5' /> */}
                                    </div>
                                </div>
                            </div>
                            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'> "{review.reviewText}"</p>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default Testimonial;