import React from 'react';
import Products from '../products';

function Categories() {
  const Categories = [
    'Bariatric',
    'Cabinets',
    'Carts',
    'Chairs',
    'Curtains ',
    'Dispensers',
    'Exam Tables',
    'Hospital Bed Linen',
    'Hospital Beds/Stretchers',
    'Liquid Oxygen',
    'Mattress Systems / Cushions ',
    'Patient Lifts',
    'Patient Monitoring',
    'Pediatric Furniture ',
    'Storage Systems ',
  ];
  return (
    <div className="flex flex-row bg-myBgColor">
      <div className="m-4 w-1/5 border border-gray-800 border-opacity-10 bg-white max-md:hidden">
        <ul className="">
          <li className="md:max-md border-b-2 border-myBlue p-2 text-center font-bold text-myBlue md:text-2xl lg:text-3xl">
            {' '}
            Categories
          </li>
          {Categories.map((category) => (
            <li
              className="cursor-pointer border-b p-2 font-bold text-myBlue  hover:bg-myBrown hover:text-white"
              key={category}
            >
              {' '}
              {category}
            </li>
          ))}
        </ul>
      </div>
      <Products />
    </div>
  );
}

export default Categories;
