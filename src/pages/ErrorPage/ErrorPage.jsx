/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='text-center'>
            <div className="text-center">
            <p className='text-4xl mt-12 mb-4'>Sorry This Page Doesn't Exist!!!!</p>
            <p className='text-4xl font-bold  mb-12'>404</p>
            <img className='mb-5 h-96 mx-96' src="https://i.ibb.co/zR1Md9p/error-word-beads-alphabet-typography.jpg" alt="" />
            <br />
            
            <button className="btn btn-accent"><Link to="/">Go Back To Home</Link></button>
        </div>
        
        </div>
    );
};

export default ErrorPage;