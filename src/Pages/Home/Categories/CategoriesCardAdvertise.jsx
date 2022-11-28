import React, { useContext } from 'react';
import { MdVerified } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loder/Loading';


const CategoriesCardAdvertise = ({ product, isLoading, selectProduct1 }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { photo, _id, advertised, verified, productName, description, productLocation, price, resalePrice, yearsOfuse, postedTime, sellerName } = product;


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            {
                advertised &&

                <div className="card card-compact  max-w-[384px] mx-auto  shadow-2xl rounded-none bg-gray-900">
                    < img src={photo} alt='' className='max-h-60' />
                    <div className="card-body text-white">
                        <h2 className="card-title text-orange-500">{productName}</h2>
                        <div className="flex">
                            <p className='text-lg inline'>Seller: {sellerName}</p>
                            {verified ||
                                <p className='text-lg text-blue-300 -ml-44 mt-1'><MdVerified /></p>
                            }
                        </div>
                        <p>Product Details: {description} </p>
                        <div className="card-actions items-center justify-between">
                            <p>Location: {productLocation.toUpperCase()} </p>
                            <p>Post on: {postedTime} </p>
                        </div>
                        <div className="card-actions my-2 items-center pl-2 justify-between border">
                            <p className='text-lg inline-block'>Original Price: ${price} </p>
                            <p className='text-lg inline-block'>Resale Price: ${resalePrice}</p>
                        </div>
                        <div className='flex w-full justify-end'>
                            <p>Years Of Use: {yearsOfuse} </p>
                            <div>
                                {user?.uid ?
                                    <label label
                                        onClick={() => selectProduct1(product)}
                                        htmlFor="booking-modal"
                                        className="btn-sm font-bold py-1 cursor-pointer text-gray-900 bg-orange-500 rounded-none"
                                    >BOOK NOW</label>
                                    :
                                    <label label
                                        onClick={() => navigate('/login')}
                                        htmlFor="booking-modal"
                                        className="btn-sm font-bold py-1 cursor-pointer text-gray-900 bg-orange-500 rounded-none"
                                    >BOOK NOW</label>
                                }
                            </div>
                        </div>
                    </div>
                </div >

            }
        </>
    );
};

export default CategoriesCardAdvertise;