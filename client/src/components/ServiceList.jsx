//  import { services } from '../assets / data / services';
import ServiceCard from "./ServiceCard";
import React, { useEffect, useState } from 'react';
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../../utils/config.js";

const ServiceList = (props) => {

    const { data: services, loading, error } = useFetch(`${BASE_URL}/services`);

    return (
        <>
            {
                loading && <h3>Loading......</h3>
            }
            {
                error && <h3>{error}</h3>
            }
            {!error && !loading && < div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap[30px] mt-[30px] lg:mt-[55px]'>
                {services && services.slice(0, props.size).map((item, index) => <ServiceCard item={item} index={index} key={index} />)}
            </div >}
        </>
    )
}

export default ServiceList;