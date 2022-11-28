import React from 'react';
import { Link } from 'react-router-dom';
import error from "../../asset/error.jpg";

const ErrorPage = () => {
    return (
        <section data-theme="light" className='flex items-center h-screen p-16  text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img className='max-w-lg' src={error} alt="" />
                <div className='max-w-md text-center'>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        Sorry, we couldn't find this page.
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 text-xl sm:text-sm font-bold rounded bg-gray-900 text-orange-500'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;