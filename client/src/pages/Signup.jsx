import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../../utils/config.js';

const Signup = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPreviewURL] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photo: selectedFile,
        gender: '',
        role: 'customer'
    });

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleFileInputChange = async (e) => {
        const file = e.target.files[0];
        console.log(file);
    };

    const submitHandler = async event => {
        event.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.message);
            }

            dispatch({ type: 'REGISTER_SUCCESS' });
            navigate('/login');

        } catch (err) {
            alert(err.message);
        }
    }

    return <section className='px-5 lg:px-0'>
        <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Hello, Welcome!</h3>

            <form action='' className='py-4 md:py-0' onSubmit={submitHandler}>
                <div className='mb-5'>
                    <input type='text'
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Full Name'
                        name='name'
                        className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required
                    />
                </div>
                <div className='mb-5'>
                    <input type='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Enter your email'
                        name='email'
                        className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required
                    />
                </div>
                <div className='mb-5'>
                    <input type='password'
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder='Password'
                        name='password'
                        className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required
                    />
                </div>
                <div className='mb-5 flex items-center justify-between'>
                    <label className='text-headingColor font-bold text-[16px] leading-7'>
                        Are you a:
                        <select name='role'
                            value={formData.role}
                            onChange={handleInputChange}
                            className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer'>
                            <option value='customer'>Client</option>
                            {/* <option value='employee'>Employee</option> */}
                        </select>
                    </label>

                    <label className='text-headingColor font-bold text-[16px] leading-7 mx-4'>
                        Gender:
                        <select name='gender'
                            value={formData.gender}
                            onChange={handleInputChange}
                            className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer'>
                            <option value=''>Select</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                    </label>
                </div>

                <div className='w-[160px] h-[50px]'>
                    <input type='file'
                        value={formData.photo}
                        onChange={handleFileInputChange}
                        name='photo' id='customFile'
                        accept='.jpg, .png'
                        className='cursor-pointer' />
                    <label htmlFor='customFile' />
                </div>

                <div className='mt-7'>
                    <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                        Sign up
                    </button>
                </div>

                <p className='mt-5 text-textColor text-center'>
                    Already have an account?
                    <Link to='/login' className='cursor-pointer text-primaryColor font-medium ml-1'> Login</Link>
                </p>

            </form>
        </div>

    </section>
}

export default Signup;