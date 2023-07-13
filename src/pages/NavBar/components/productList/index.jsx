import React from 'react';

function ProductCategory() {
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
    <div className="relative top-20 z-50 hidden  w-full items-center justify-center ">
      <ul className="mx-auto flex w-4/5 flex-row flex-wrap items-center gap-4 bg-gray-100 p-8">
        {Categories.map((category) => (
          <li
            className="cursor-pointer border-b p-2 font-bold text-myBlue  hover:bg-myBrown hover:text-white"
            key={category}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCategory;
