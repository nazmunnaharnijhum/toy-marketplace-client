import React from 'react';

const ExtraSection1 = () => {
    return (
        <div className="text-center my-24">
            <p className="text-4xl font-bold mt-12 ">
                Left  
                 <span className="text-9xl text-teal-500 transition-transform transform group hover:-translate-y-3 inline-block ml-1">215</span> 
                Days
            </p>
            <p className="my-4">
                Visit our toy store for a limited-time discount! Enjoy up to 50% off <br />
                on a wide range of toys, including popular brands and exciting new arrivals. Do not miss out on these incredible savings
            </p>
            <button className="btn btn-accent">Visit Our Shop Now</button>
        </div>
    );
};

export default ExtraSection1;
