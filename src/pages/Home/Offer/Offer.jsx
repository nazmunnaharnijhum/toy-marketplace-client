

const Offer = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center text-teal-500 mt-16 mb-2">Offers at Our Toy Shop!</h2>
            <p className="font-bold text-center text-gray-500  mb-4">Discover amazing discounts at our toy shop with up to 50% off<br />  on a wide range of toys.</p>
            <div className='flex gap-4 justify-between mt-10'>
        <div className='flex bg-yellow-300 p-4 rounded-3xl h-64 items-center w-1/2 transform transition duration-300 hover:-translate-y-2 justify-between '>
            <div className='flex gap-4 items-center'>
                
                <div className='ml-4'>
                    <h2 className='text-3xl text-black font-bold '>Halloween Day Toy Set</h2>
                    <div className='text-slate-500 font-bold my-3'>Discover Amazing Offers!</div>
                    <button className="btn btn-wide rounded-3xl mt-2 bg-black">See Collection </button>
                </div>
              
               <img src="https://i.ibb.co/RzCcKhD/h1banner-halloween.png"alt="" className="h-64 rounded-3xl" />
              
            </div>
        </div>
        <div className='flex bg-red-500 p-4 rounded-3xl h-64 items-center w-1/2 transform transition duration-300 hover:-translate-y-2 justify-between '>
            <div className='flex gap-4 items-center'>
                
                <div className='ml-4'>
                    <h2 className='text-3xl text-white font-bold '>Children Day Collection 2024</h2>
                    <div className='text-white font-bold my-3'>15% Off on Kids Toys and Gifts!</div>
                    <button className="btn btn-wide rounded-3xl mt-2 bg-white text-slate-500">See Collection</button>
                </div>
              
               <img src="https://i.ibb.co/Zd4VFvg/h1banner-kid.png"alt="" className="h-64 rounded-3xl" />
              
            </div>
        </div>   
        
    </div>
        </div>
    );
};

export default Offer;