import React from 'react';
import avatarImg from '../assets/images/avatar-icon.png';
import formatDate from '../../utils/formatDate';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react'; // Removed unnecessary import of useContext
import FeedbackForm from '../components/FeedbackForm';
import { BASE_URL } from '../../utils/config';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Feedback = () => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const { id } = useParams();

    const { data: responseData, loading, error } = useFetch(`${BASE_URL}/services/${id}/reviews`);
    const feedbacks = responseData.filter(item => item.service === id);

    return (
        <div>
            {loading && <h4>Loading...</h4>}
            {error && <h4>{error}</h4>}
            {!loading && !error && (
                <div>
                    <div className='mb-[50px]'>
                        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All reviews (272)</h4>
                        {feedbacks.map((feedback, index) => (
                            <div className='flex justify-between gap-10 mb-[30px]' key={index}>
                                <div className='flex gap-3'>
                                    <figure className='w-10 h-10 rounded-full'>
                                        <img src={avatarImg} alt='' className='w-full' />
                                    </figure>
                                    <div>
                                        <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>{feedback.user.name}</h5>
                                        <p className='text-[14px] leading-6 text-textColor'>
                                            {new Date(feedback.createdAt).toLocaleDateString()}
                                        </p>
                                        <p className='text__para mt-3 font-medium text-[15px]'>
                                            {feedback.reviewText}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-1'>
                                    {[...Array(feedback.rating).keys()].map((_, index) => (
                                        <AiFillStar key={index} color='#0067FF' />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {!showFeedbackForm && (
                        <div className='text-center'>
                            <button className='btn' onClick={() => setShowFeedbackForm(true)}>Give feedback</button>
                        </div>
                    )}
                    {showFeedbackForm && <FeedbackForm />}
                </div>
            )}
        </div>
    );
};

export default Feedback;
