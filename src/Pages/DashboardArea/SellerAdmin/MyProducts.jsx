import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loder/Loading';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const url = `http://localhost:5000/wathcCategories`
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["name"],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    const handlerDelete = id => {
        const proceed = window.confirm('Want to delete this review?')
        if (proceed) {
            fetch(`http://localhost:5000/wathcCategories/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch()
                    toast.success("delete review done")
                })
        }
    }

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
            <h3 className="text-3xl mx-8 mb-5">My Product</h3>
            <div className="overflow-x-auto mx-8">
                <table className="table w-full">
                    <thead data-theme="dark">
                        <tr className='text-orange-500' >
                            <th>List</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Name</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><img src={product.photo} alt="" className='w-20' /></td>
                                <td>${product.price}</td>
                                <td>{product.productName}</td>

                                <td>
                                    <button className='btn-sm bg-slate-900 text-orange-500 font-bold rounded' onClick={() => handlerPaid(product._id)}>
                                        Advertise
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handlerDelete(product._id)}>
                                        X
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

export default MyProducts;