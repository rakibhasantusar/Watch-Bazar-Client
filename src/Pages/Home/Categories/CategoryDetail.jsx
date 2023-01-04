import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Shared/Loder/Loading';
import CategoryModal from './CategoryModal';
import CategoryProductCard from './CategoryProductCard';

const CategoryDetail = () => {
    const [product1, selectProduct1] = useState({})
    const detail = useLoaderData()
    const { name } = detail;

    const url = `https://watch-bazar-server.vercel.app/wathcCategories/${name}`

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
            <section className='mb-2'>
                <div className="dark:bg-gray-900">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center  md:py-12 md:px-10 lg:px-32 dark:bg-gray-900">
                        <h1 className="text-xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white"><span className='text-orange-500'>{name}</span><br></br> Collection</h1>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 70 1440 200"><path fill="#111827" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,85.3C672,75,768,117,864,117.3C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </section>

            <div>
                <div className='container mx-auto mt-2 mb-20 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
                        {/* <div className='flex flex-wrap gap-8 px-5' > */}
                        {
                            products.map((product) => <CategoryProductCard
                                key={product._id}
                                product={product}
                                isLoading={isLoading}
                                selectProduct1={selectProduct1}
                            ></CategoryProductCard>)
                        }
                    </div>

                    {product1 &&
                        <CategoryModal
                            product1={product1}
                            selectProduct1={selectProduct1}
                        ></CategoryModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryDetail;