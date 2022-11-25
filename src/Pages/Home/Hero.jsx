import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../asset/wrist.jpg";

const Hero = () => {
    return (
        <>
            {/* CTA Section: Simple With Illustration */}
            <div className="bg-gray-900 border">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                    <div className="flex items-center text-center lg:text-left">
                        <div className="space-y-10">
                            {/* Heading */}
                            <div>
                                <div className="text-sm uppercase font-bold tracking-wider mb-1 text-orange-500">
                                    Get Started
                                </div>
                                <h2 className="text-3xl text-white md:text-4xl font-extrabold mb-4">
                                    Buy & Sell your watch <span className="text-orange-500">Now</span>!
                                </h2>
                                <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-50">
                                    Inspiring results from day one without the pain. Get your own custom dashboard and start building amazing services.
                                </h3>
                            </div>
                            {/* END Heading */}

                            {/* Action */}
                            <div>
                                <Link to="/signup" className="inline-flex justify-center items-center space-x-2  font-bold focus:outline-none px-6 py-4 leading-6 bg-orange-500 text-white hover:text-white hover:bg-orange-500 focus:ring-opacity-50 active:bg-orange-500">
                                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-gray-900 hi-outline hi-plus-circle inline-block w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span className='text-gray-900'>Create your Account</span>
                                </Link>
                            </div>
                            {/* END Action */}
                        </div>
                    </div>
                    <div className="flex items-center lg:justify-end ">
                        <img src={img} alt="Wrist Watch" className="mask mask-parallelogram-3 mx-auto " />
                    </div>
                </div>
            </div>
            {/* END CTA Section: Simple With Illustration */}
        </>
    );
};

export default Hero;