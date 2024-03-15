import React, { useState, useEffect } from 'react';
import Property from './Property';
import RentalOne from '../assets/rental_one.jpg';
import RentalTwo from '../assets/rental_two.jpg';
import RentalThree from '../assets/rental_three.jpg';
import RentalFour from '../assets/rental_four.jpg';
import RentalFive from '../assets/rental_five.jpg';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Dummy data to replace PHP/MySQL backend
    const dummyData = [
      {
        price: 1500,
        location: 'Dummy Location 1',
        avatar: RentalOne,
        property_id: 1,
      },
      {
        price: 2000,
        location: 'Dummy Location 2',
        avatar: RentalTwo,
        property_id: 2,
      },
      {
        price: 2500,
        location: 'Dummy Location 2',
        avatar: RentalThree,
        property_id: 3,
      },
      {
        price: 3000,
        location: 'Dummy Location 2',
        avatar: RentalFour,
        property_id: 4,
      },
      {
        price: 3500,
        location: 'Dummy Location 2',
        avatar: RentalFive,
        property_id: 5,
      },
    ];
    setProperties(dummyData);
  }, []);

  return (
    <div className='w-10/12 min-h-[600px] rounded-md bg-white absolute top-[40%] left-1/2 transform -translate-x-1/2 flex flex-col gap-2 p-4'>
      <h3 className='text-xl font-bold'>Properties</h3>
      <div className='flex flex-wrap gap-6 my-2'>
        {properties.length === 0 ? (
          <h1 className='text-red-400'>No results</h1>
        ) : (
          properties.map((property) => (
            <Property key={property.property_id} property={property} />
          ))
        )}
      </div>
    </div>
  );
};

export default PropertyList;
