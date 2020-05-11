import React, { useState } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
const Services = () => {
    const [service, setServices] = useState([
        {
            icon: <FaCocktail/>,
            title: 'Free cocktails',
            info: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, temporibus.'
        },
        {
            icon: <FaHiking/>,
            title: 'Endless Hiking',
            info: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, temporibus.'
        },
        {
            icon: <FaShuttleVan/>,
            title: 'Free shuttle',
            info: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, temporibus.'
        },
        {
            icon: <FaBeer/>,
            title: 'Strongest Beer',
            info: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, temporibus.'
        }
    ])
    return (
        <section className='services'>
            <Title title="services"></Title>
            <div className="services-center">
                {
                    service.map((item, index)=> {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h5>{item.title}</h5>
                            <p>{item.info}</p>
                        </article>
                    })
                }
            </div>
        </section>
    );
};

export default Services;