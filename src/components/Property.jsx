import React from 'react';

const Property = ({ property }) => {
  return (
    <div className='flex flex-col gap-2 rounded-lg border border-gray-300 w-[270px]'>
      <img
        src={`${property.avatar}`}
        alt='Property Avatar'
        className='rounded-t-lg h-[150px]'
      />
      <div className='flex flex-col gap-2 p-2'>
        <h3 className='text-lg font-bold'>KES {property.price}</h3>
        <p className='text-gray-600 font-semibold text-sm'>
          {property.location}
        </p>
        <button
          className='rent-btn h-10 w-full mt-4 flex rounded-lg border border-[#3E2093] hover:bg-blue-100 items-center gap-2 justify-center'
          data-property-id={property.property_id}
        >
          Rent
        </button>
      </div>
    </div>
  );
};

export default Property;
