import { Icon } from '@iconify/react';
import productImage from '../../../assets/Image/equip 1.jpg';
const Product = [
  'Hospital Stretchers',
  'Defibrillators',
  'Anesthesia Machines',
  'Patient Monitors',
  'Sterilizers',
  'Spring',
  'Anesthesia Machines',
  'Patient Monitors',
];
function Products() {
  return (
    <div className="m-4 flex w-full  flex-col  border-gray-800 border-opacity-10 bg-white">
      <div>
        <h2 className=" py-6  text-center text-2xl font-bold text-myBlue lg:text-3xl">
          Our Products
        </h2>
      </div>
      <div>
        <ul className="flex w-full flex-row flex-wrap items-center justify-evenly gap-x-4 ">
          {Product.map((product) => (
            <li
              className="max-md:3/4 mb-4 w-60 border border-black border-opacity-10 p-0 max-sm:w-3/4"
              key={product}
            >
              <div>
                <img
                  src={productImage}
                  alt="productImage"
                />
              </div>
              <div className="px-1 text-lg font-bold ">
                {' '}
                <h2>{product}</h2>
              </div>
              <div className="px-1">
                <p>
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                  Soluta.
                </p>
              </div>
              <div className="my-2 flex flex-row justify-center">
                <button className=" mx-2 flex w-3/4 flex-row items-center justify-center rounded-xl bg-mylightBlue py-2 text-sm text-white lg:text-lg">
                  <span> View Details</span>
                  <Icon
                    icon="iconamoon:arrow-up-2-bold"
                    color="white"
                    width="25"
                    rotate={1}
                    className="relative left-2 top-0"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
