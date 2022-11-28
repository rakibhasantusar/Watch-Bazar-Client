import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../Shared/Loder/Loading';
import Categories from './Categories/Categories';
import CategoriesCardAdvertise from './Categories/CategoriesCardAdvertise';
import CategoryModal from './Categories/CategoryModal';
import Hero from './Hero';
import HomeTestimonial from './HomeTestimonial';

const Home = () => {
    const [product1, selectProduct1] = useState({})

    const url = `http://localhost:5000/wathcCategories`

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["name"],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Hero></Hero>
            <div className='bg-gray-200  my-28 container mx-auto p-20'>
                {products &&
                    <div className='container mx-auto mt-2 mb-20 '>
                        <h2 className='text-6xl text-center font-semibold mb-5'>Advertised Products Area </h2>
                        <hr className='w-[50%] mx-auto mb-20 border-2 border-dashed ' />
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
                            {
                                products.map((product) => <CategoriesCardAdvertise
                                    key={product._id}
                                    product={product}
                                    isLoading={isLoading}
                                    selectProduct1={selectProduct1}
                                ></CategoriesCardAdvertise>)
                            }
                        </div>
                        {product1 &&
                            <CategoryModal
                                product1={product1}
                                selectProduct1={selectProduct1}
                            ></CategoryModal>
                        }
                    </div>
                }
            </div>

            <Categories></Categories>
            <HomeTestimonial></HomeTestimonial>
        </div>
    );
};

export default Home;