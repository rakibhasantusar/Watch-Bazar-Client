import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loder/Loading';

const AllSellers = () => {
    const navigate = useNavigate()
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: [`users`],
        queryFn: async () => {
            const res = await fetch(`https://watch-bazar-server.vercel.app/users/seller`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    });


    const handlerDelete = id => {
        const proceed = window.confirm('Want to delete this review?')
        if (proceed) {
            fetch(`https://watch-bazar-server.vercel.app/users/${id}`, {
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

    if (isLoading) {
        return <Loading></Loading>
    }
    const handlerPaid = id => {
        if (id) {
            toast.success("successfully paid");
            navigate('/home')
        }
    }


    return (
        <div>
            <h3 className="text-3xl mx-8 mb-5">All Seller</h3>
            <div className="overflow-x-auto mx-8">
                <table className="table w-full">
                    <thead data-theme="dark">
                        <tr className='text-orange-500' >
                            <th>List</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                            <th>Verifiy seller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users &&
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => handlerDelete(user._id)}>
                                        X
                                    </button>
                                </td>
                                <td>
                                    <td>
                                        <button className='btn-sm bg-slate-900 text-orange-500 font-bold rounded' onClick={() => handlerPaid(user._id)}>
                                            verify
                                        </button>
                                    </td>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;