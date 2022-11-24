import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CategoriesCard = ({ card }) => {

    const { name, description, icon, bgClass, textColor, _id } = card;
    return (
        <Link to={`/categorydetail/${_id}`}>
            <div className={`card ${textColor} flex  md:m-0 m-6 p-6  card-side  shadow-xl ${bgClass}`}>
                <figure>
                    <img className='h-32 rounded-md' src={icon} alt="Watch" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title font-semibold">{name}</h2>
                    <p className='text-left font-semibold'>{description}</p>
                    <span className='text-right'> click here <FaArrowRight className='inline-block' /></span>
                </div>
            </div>
        </Link>
    );
};

export default CategoriesCard;