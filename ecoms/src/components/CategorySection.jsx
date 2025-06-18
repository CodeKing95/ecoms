import React from 'react'
import Playstation from '../assets/Images/PS.jpg'
import XBOX from '../assets/Images/xbox.jpg'
import Nintendo from '../assets/Images/nin.png'

const categories = [
    {
        title: '',
        imageUrl: Playstation,
    },
    {
        title: '',
        imageUrl: XBOX,
    },
    {
        title: '',
        imageUrl: Nintendo,
    },
];

const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
        {categories.map((category, index) => (
            <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105'>
                <img src={category.imageUrl} alt="" className='w-full h-full object-cover rounded-lg shadow-md'/>
                <div className='absolute top-20 left-12'>
                    <p className='text-xl font-bold'>{category.title}</p>
                    <p className='text-gray-600'></p>
                </div>
                </div>
        ))}
    </div>
  )
}

export default CategorySection