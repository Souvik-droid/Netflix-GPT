import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    // Navigate to the home page
    const handleHomeNavigation = () => {
        navigate('/');
    };

    return (
        <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-4">
            <h1 className="text-6xl font-bold text-red-600 mb-6">Oops!!</h1>
            <p className="text-2xl font-semibold mb-4 text-center">
                Something went wrong. <br />
                We couldn't complete your request.
            </p>
            <p className="text-lg text-neutral-500 mb-8 text-center">
                Please try again later or go back to the homepage.
            </p>
            <button
                onClick={handleHomeNavigation}
                className="bg-red-700 hover:bg-red-600 transition duration-200 p-3 rounded-md font-bold text-white text-lg"
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default Error;
