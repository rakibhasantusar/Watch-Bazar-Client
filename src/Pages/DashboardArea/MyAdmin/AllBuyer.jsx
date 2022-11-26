import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: [`users`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/buyer`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    });

    const handlerDelete = id => {
        const proceed = window.confirm('Want to delete this review?')
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
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


    return (
        <div>
            <h3 className="text-3xl mb-5">All Buyer</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>List</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;