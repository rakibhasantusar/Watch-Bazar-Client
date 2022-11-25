import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Header from '../Pages/Shared/Header/Header';
const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 text-base-content border border-orange-500">
                        {isAdmin && <>
                            <h2 className='text-xl mb-4'>Buyer & Seller</h2>
                            <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                            <li><Link to="/dashboard/allsellers">Admin Sellers</Link></li>
                            <li><Link to="/dashboard/reporteditem">Reported Item</Link></li>
                        </>
                        },
                        {isBuyer && <>
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        </>
                        },
                        {isSeller && <>
                            <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            <li><Link to="/dashboard/addaproduct">Add A Product</Link></li>
                            <li><Link to="/dashboard/mybuyers">My Buyers</Link></li>
                        </>
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;