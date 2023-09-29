import React, { useEffect } from 'react';
import ServiceList from '../components/ServiceList';
import { services } from '../assets/data/services';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className='bg-[#fff9ea]'>
                <div className='container text-center'>
                    <h1 className='heading font-[600]'>Our services</h1>
                    <div className='max-w-[570] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
                        <input type='search' className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search Service' />
                        <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
                    </div>
                </div>
            </section>

            {/* {content cards} */}
            <section>
                <div className='container'>
                    <ServiceList size={services.length} />
                </div>
            </section>
        </>

    )
}

export default Services;