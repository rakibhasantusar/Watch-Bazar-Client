import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loder/Loading';

const MyOrder = () => {
    const navigate = useNavigate()
    const { data: bookings = [], refetch, isLoading } = useQuery({
        queryKey: [`booking`],
        queryFn: async () => {
            const res = await fetch(`https://watch-bazar-server.vercel.app/booking`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    });

    const handlerPaid = id => {
        if (id) {
            toast.success("successfully paid");
            navigate('/home')
        }
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl mx-8 mb-5">All Buyer</h3>
            <div className="overflow-x-auto mx-8">
                <table className="table w-full">
                    <thead data-theme="dark">
                        <tr className='text-orange-500'>
                            <th>List</th>
                            <th>Product Photo</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Pay Here</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td><img className='w-20 h-16' src={booking.photo} alt="photo product" /></td>
                                <td>{booking.productName}</td>
                                <td>${booking.resalePrice}</td>
                                <td>
                                    <button className='btn-sm bg-slate-900 text-orange-500 font-bold rounded' onClick={() => handlerPaid(booking._id)}>
                                        Pay
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;