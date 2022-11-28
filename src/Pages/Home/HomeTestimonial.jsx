import React from 'react';
import photo1 from "../../asset/testimonial/image1.jpg";
import photo2 from "../../asset/testimonial/image2.jpg";
import photo3 from "../../asset/testimonial/image3.jpg";

const HomeTestimonial = () => {
    return (
        <section className="my-36 dark:bg-gray-800 dark:text-gray-100 container  mx-auto">
            <div className="container flex flex-col items-center mx-auto mb-8 md:p-10 md:px-12">
                <h1 className="p-4 text-5xl font-semibold leading-none text-center">What our customers are saying about us</h1>
            </div>
            <div className="container pb-20 flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-orange-500">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Always provides great Product at a fair price – one time, every time..
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-orange-500">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-orange-500 dark:text-gray-900">
                        <img src={photo1} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700" />
                        <p className="text-xl font-semibold leading-tight">Chamak Jahan</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-orange-500">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>We are completely satisfied with the quality of Product from Watch Bazar
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-orange-500">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-orange-500 dark:text-gray-900">
                        <img src={photo2} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700" />
                        <p className="text-xl font-semibold leading-tight">Abu Naeem</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-orange-500">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Watch Bazar has Provided our needs for the past 10 years.Very nice..
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-orange-500">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-orange-500 dark:text-gray-900">
                        <img src={photo3} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700" />
                        <p className="text-xl font-semibold leading-tight">Shanta Islam</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTestimonial;