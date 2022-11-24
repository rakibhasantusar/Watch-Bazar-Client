import React, { useContext, useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';
import watch1 from "../../../asset/luxury.png";
import watch2 from "../../../asset/smart.png";
import watch3 from "../../../asset/aviator.png";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loder/Loading';
import axios from "axios";

const Categories = () => {


    const { loading, setLoading } = useContext(AuthContext)
    const [cardData, setCardData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/categories`)
            .then(res => {
                setCardData(res.data)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [setLoading])

    if (loading) {
        return <Loading />
    }
    console.log(cardData)
    return (
        <div className='mb-20'>
            <h2 className='text-5xl text-center font-semibold mt-20 mb-5'>Watch Category</h2>
            <hr className='w-[30%] mx-auto mb-14 border-2 border-dashed border-slate-900 ' />


            <div className='grid container mx-auto  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cardData.map(card => <CategoriesCard
                        key={card._id}
                        card={card}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;