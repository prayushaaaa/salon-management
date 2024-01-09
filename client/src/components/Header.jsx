import { useEffect, useRef, useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import React from 'react';
import logo from "../assets/images/companyLogo.png";
import userImage from "../assets/images/avatar-icon.png"
import { BiMenu } from 'react-icons/bi';
import { AuthContext } from '../context/AuthContext';


const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/employees',
        display: 'Our employees'
    },
    {
        path: '/services',
        display: 'Services'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
]

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/');
    }

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        })
    }

    useEffect(() => {
        handleStickyHeader();
        return () => window.removeEventListener('scroll', handleStickyHeader);
    })

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

    return <header className='header flex items-center' ref={headerRef}>
        <div className='container'>
            <div className='flex items-center justify-between'>
                {/* {logo} */}
                <div className='flex items-center md:w-[18%] h-auto sm:w-[30%] py-[50px]'>
                    <Link to='/'>
                        <img src={logo} alt='company logo' className=''></img>
                    </Link>
                </div>


                {/* {nav menu} */}
                <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                    <ul className='menu flex items-center gap-[2.7rem]'>
                        {
                            navLinks.map((link, index) => <li key={index}>
                                <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>{link.display}</NavLink>
                            </li>)
                        }
                    </ul>
                </div>

                {/* {nav-right} */}
                <div className='flex items-center gap-4'>
                    {
                        user ? <>
                            <h5 className='mb-0'>{user.name}</h5>
                            <div className=''>
                                <Link to={`profile/${user._id}`}>
                                    <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                                        <img src={userImage} className='w-full rounded-full' alt='profile' />
                                    </figure>
                                </Link>
                            </div>

                            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]' onClick={logout}>logout</button>
                        </> : <Link to='/Login'>
                            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
                        </Link>

                    }



                    <span className='md:hidden' onClick={toggleMenu}>
                        <BiMenu className='w-6 h-6 cursor-pointer' />
                    </span>
                </div>
            </div>
        </div>
    </header>
}

export default Header;