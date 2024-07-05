import React from 'react';

const InfoBox = () => {
    return (
        <div className='flex gap-4 justify-between mt-24'>
            <div className='flex bg-orange-100 p-4 rounded-3xl h-32 items-center w-1/4 transform transition duration-300 hover:-translate-y-2'>
                <div className='flex'>
                    <img src="https://i.ibb.co/pXZhLtD/images.png" alt="" className="mr-4 h-14 w-14 rounded-full" />
                    <div>
                        <h2 className='text-lg font-semibold'>Money Return</h2>
                        <div className='font-light font-semibold'>Back guarantee under 7 days.</div>
                    </div>
                </div>
            </div>
            <div className='flex bg-slate-100 p-4 rounded-3xl h-32 w-1/4 items-center transform transition duration-300 hover:-translate-y-2'>
                <div className='flex'>
                    <img src="https://i.ibb.co/p3RsdSc/images.jpg" alt="" className="mr-4 h-14 w-14 rounded-full" />
                    <div>
                        <h2 className='text-lg font-semibold'>Member Discount</h2>
                        <div className='font-light font-semibold'>On every order over $2000</div>
                    </div>
                </div>
            </div>
            <div className='flex bg-green-100 p-4 rounded-3xl h-32 w-1/4 items-center transform transition duration-300 hover:-translate-y-2'>
                <div className='flex'>
                    <img src="https://i.ibb.co/vDpC6HW/images-1.png" alt="" className="mr-4 h-14 w-14 rounded-full" />
                    <div>
                        <h2 className='text-lg font-semibold'>Home Delivery</h2>
                        <div className='font-light font-semibold'>Free delivery to your home</div>
                    </div>
                </div>
            </div>
            <div className='flex bg-red-100 p-4 rounded-3xl h-32 w-1/4 items-center transform transition duration-300 hover:-translate-y-2'>
                <div className='flex'>
                    <img src="https://i.ibb.co/kHFHXb2/download.jpg" alt="" className="mr-4 h-14 w-14 rounded-full" />
                    <div>
                        <h2 className='text-lg font-semibold'>24/7 Support</h2>
                        <div className='font-light font-semibold'>Dedicated support in 24hrs</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBox;
