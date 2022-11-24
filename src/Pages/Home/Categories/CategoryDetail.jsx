import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetail = () => {
    const detail = useLoaderData()
    const { name } = detail;
    return (
        <div>
            <h2 className='text-2xl'>{name}</h2>
        </div>
    );
};

export default CategoryDetail;