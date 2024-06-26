import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { AiFillStar } from 'react-icons/ai';
import { BASE_URL } from '../../utils/config.js';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const FeedbackForm = ({ refetch }) => {
    const { id } = useParams();

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const { user } = useContext(AuthContext);

    const handleSubmitReview = async e => {
        e.preventDefault();

        try {
            if (!user || user === undefined || user === null) {
                alert('Please Sign in ')
            }

            const reviewObj = {
                username: user?.name,
                reviewText,
                rating
            }

            const res = await fetch(`${BASE_URL}/services/${id}/reviews`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(reviewObj)
            });

            const result = await res.json();
            if (!res.ok) alert(result.message);
            else {
                refetch();
            }
            alert('Review submitted!');

        }
        catch (err) {
            null;
        }
    };

    return (
        <div>
            <form action=''>
                <div>
                    <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                        Rate the experience*
                    </h3>

                    <div>
                        {[...Array(5).keys()].map((_, index) => {
                            index += 1
                            return <button
                                key={index}
                                type='button'
                                className={`${index <= ((rating && hover) || hover) ? "text-yellowColor" : "text-gray-400"} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                onDoubleClick={() => { setHover(0); setRating(0) }}>
                                <span>
                                    <AiFillStar />
                                </span>
                            </button>
                        })}
                    </div>
                </div>

                <div className='mt-[30px]'>
                    <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                        Share your feedback/suggestion*
                    </h3>
                    <textarea
                        className=' border border-solid border-[#0066ff34] focus:outline-primaryColor w-full px-4 py-3 rounded-md'
                        rows={5}
                        placeholder='Write your message...'
                        onChange={(e) => setReviewText(e.target.value)}></textarea>
                </div>

                <button type='submit' className='btn' onClick={handleSubmitReview}>Submit Feedback</button>
            </form>
        </div>
    )
}

export default FeedbackForm;