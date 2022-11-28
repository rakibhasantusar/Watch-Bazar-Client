import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const CategoryModal = ({ product1, selectProduct1 }) => {
    const { user } = useContext(AuthContext)
    const { resalePrice, productName, photo } = product1

    const handlerSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const phone = form.phone.value;
        const meeting = form.meeting.value;

        const booking = {
            photo,
            productName,
            resalePrice,
            meeting,
            phone
        }

        fetch('https://watch-bazar-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    selectProduct1(null)
                    toast.success('Booking confirmed');
                }
                else {
                    toast.error(data.message);
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative bg-slate-900">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{ }</h3>
                    <form onSubmit={handlerSubmit} className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="block text-orange-500 text-sm text-left">Your full Name</label>
                                <input type="text" name="name" disabled defaultValue={user?.displayName} placeholder="your full name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" required />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-orange-500 text-sm text-left">Email address</label>
                                <input type="email" name="email" disabled defaultValue={user?.email} placeholder="Email Address" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" required />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label className="text-sm text-orange-500">Product Name:</label>
                                </div>
                                <input type="text" name="productName" disabled defaultValue={productName} placeholder="Product Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label className="text-sm text-orange-500">Resale Price:</label>
                                </div>
                                <input type="Number" name="price" disabled defaultValue={resalePrice} placeholder={"$" + resalePrice} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label className="text-sm text-orange-500">Phone Number:</label>
                                </div>
                                <input type="text" name="phone" placeholder="Your Phone Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label className="text-sm text-orange-500">Meeting Location:</label>
                                </div>
                                <input type="text" name="meeting" placeholder="Meeting location" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                            </div>
                        </div>
                        <button type="submit " className="w-full px-8 py-3 font-bold rounded-md dark:bg-orange-400 dark:text-gray-900">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CategoryModal;