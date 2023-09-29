import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <section>
        <div className='px-4 mx-auto max-w-screen-md'>
            <h2 className='heading text-center'>Contact us</h2>
            <form action='#' className='space-y-8'>
                <div>
                    <label htmlFor='email' className='form__label'>Your Email</label>
                    <input type='email' id='email' placeholder='example@gmail.com' className='form__input mt-1' />
                </div>

                <div>
                    <label htmlFor='subject' className='form__label'>Subject</label>
                    <input type='text' id='subject' placeholder='How can we help' className='form__input mt-1' />
                </div>
                <div className='sm:col-span-2'>
                    <label htmlFor='message' className='form__label'>Your message</label>
                    <textarea rows='6' type='text' id='message' placeholder='Leave your message' className='form__input mt-1' />
                </div>
                <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
            </form>
        </div>
    </section>
}

export default Contact;