import { Icon } from '@iconify/react';
import React from 'react';

function ThomeBanner() {
  return (
    <>
      <div className=" relative  top-10 my-8 flex w-full flex-col items-center justify-center bg-white bg-contain bg-center bg-no-repeat p-8 ">
        <div className=" mx-auto w-full rounded-lg border border-black border-opacity-0 bg-thomebanner p-8 ring-1">
          <h1 className="py-2 text-xl font-bold text-blue-950">
            YIZMED Delivery At Your Door Step
          </h1>
          <p className="w-1/2 py-2 font-semibold text-gray-500 max-md:w-full">
            Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Omnis,
            consequatur! Ea nam dolore sit
            deleniti, fuga, ipsam laudantium
            nesciunt est error explicabo quisquam.
            ducimus.
          </p>
        </div>
      </div>
      <div className="my-10 flex w-full flex-row items-center gap-2 bg-gray-100 px-5 py-4 max-lg:hidden">
        <div className="flex flex-row items-center gap-2 py-8">
          <div>
            <Icon
              icon="ri:shake-hands-line"
              color="#149494"
              width="50"
              height="50"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-blue-950">
              TRUSTED SELLERS & BRANDS
            </span>
            <span className="text-sm  text-gray-700 ">
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Hic,
              natus.
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 py-8">
          <div>
            <Icon
              icon="icon-park-solid:badge-two"
              color="#149494"
              width="50"
              height="50"
            />
            ;
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-blue-950">
              COMPETITIVE PRICING
            </span>
            <span className="text-sm  text-gray-700 ">
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Hic,
              natus.
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 py-8">
          <div>
            <Icon
              icon="mdi:hours-24"
              color="#149494"
              width="50"
              height="50"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-blue-950">
              CUSTOMER SUPPORT
            </span>
            <span className="text-sm  text-gray-700 ">
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Hic,
              natus.
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 py-8">
          <div>
            <Icon
              icon="mdi:message-secure"
              color="#149494"
              width="50"
              height="50"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-blue-950">
              SECURE PAYMENTS
            </span>
            <span className="text-sm  text-gray-700 ">
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Hic,
              natus.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThomeBanner;
