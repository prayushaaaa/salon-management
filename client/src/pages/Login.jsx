import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../../utils/config.js';
import useFetch from '../hooks/useFetch';


const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { loading } = useFetch();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = async event => {
        event.preventDefault();

        dispatch({ type: 'LOGIN_START' })

        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                formData: 'include',
                body: JSON.stringify(formData)
            });

            const result = await res.json();
            if (!res.ok) {
                alert(result.message);
            }

            dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
            navigate(-1);

        }
        catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
        }
    }

    return (<>
        {loading && <h4>Loading...</h4>}
        {!loading && < section className='px-5 lg:px-0' >
            <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
                <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Hello,<span className='text-primaryColor'> Welcome</span> Back!</h3>
                <form action='' className='py-4 md:py-0' onSubmit={submitHandler}>
                    <div className='mb-5'>
                        <input type='email' placeholder='Enter Your Email' name='email' value={formData.email} onChange={handleInputChange} className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required />
                    </div>
                    <div className='mb-5'>
                        <input type='password' placeholder='Enter Your Password' name='password' value={formData.password} onChange={handleInputChange} className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required />
                    </div>
                    <div className='mt-7'>
                        <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Login</button>
                    </div>

                    <p className='mt-5 text-textColor text-center'>
                        Don't have an account?
                        <Link to='/register' className='cursor-pointer text-primaryColor font-medium ml-1'> Register</Link>
                    </p>

                </form>
            </div>

        </section >}
    </>
    )


}

export default Login;