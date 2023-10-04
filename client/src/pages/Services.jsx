import React, { useEffect, useState } from 'react';
import ServiceList from '../components/ServiceList';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const { data: services, loading, error } = useFetch(`${BASE_URL}/services`);
    const [search, setSearch] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className='bg-[#fff9ea]'>
                <div className='container text-center'>
                    <h1 className='heading font-[600]'>Our services</h1>
                    <div className='max-w-[570] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
                        <input type='search' className='py-4 pl-4 pr-2 bg-transparent w-[full] focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search Service' onChange={(e) => setSearch(e.target.value)} />
                        <button className='btn mt-0 rounded-[0px] rounded-r-md'>
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* {content cards} */}
            <section>
                <div className='container'>
                    {/* <ServiceList size={services.length} search={search}/> */}
                    {
                        loading && <h3>Loading......</h3>
                    }
                    {
                        error && <h3>{error}</h3>
                    }
                    {!error && !loading && < div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap[30px] mt-[30px] lg:mt-[30px]'>
                        {
                            services && services.filter((item) => {
                                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
                            })
                                .map((item, index) => <ServiceCard item={item} index={index} key={index} />)
                        }
                    </div >
                    }
                </div>
            </section>
        </>

    )
}

export default Services;