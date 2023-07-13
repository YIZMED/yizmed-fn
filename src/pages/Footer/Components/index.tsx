import React from 'react';
import logo from '../../../assets/brand/navbarlog.jpeg';
import { Icon } from '@iconify/react';
function Footer() {
  return (
    <div className=" flex w-full flex-col items-center justify-center bg-blue-950">
      <div className="relative  top-10 mx-auto flex flex-row items-start px-4 py-8 max-md:flex-wrap max-md:gap-8 ">
        <div className="mx-auto w-2/5 max-md:w-full ">
          <div className="w-1/2">
            <img src={logo} alt="logo" />
          </div>
          <ul className="font-semibold text-gray-300">
            <li className="flex flex-row items-center gap-2 py-3">
              <span>
                <Icon
                  icon="ion:location-outline"
                  color="#e5e7eb"
                  width="30"
                  height="30"
                />
              </span>
              <span>
                YIZMED Africa Supplier Ltd,
                kigali-Rwanda kkn-ave-1231, Po Box
                3812
              </span>
            </li>
            <li className="flex flex-row items-center gap-2 py-3">
              <span>
                <Icon
                  icon="mi:call"
                  color="#e5e7eb"
                  width="25"
                />
              </span>
              <span>
                Call Us: +250 780 008 908
              </span>
            </li>
            <li className="flex flex-row items-center gap-2 py-3">
              <span>
                <Icon
                  icon="entypo:email"
                  color="#e5e7eb"
                  width="25"
                />
              </span>
              <span>
                <a href="yizmed@gmail.com">
                  yizmed@gmail.com
                </a>
              </span>
            </li>
            <li className="flex flex-row items-center gap-2 py-3">
              <span>
                <Icon
                  icon="icon-park-outline:time"
                  color="#e5e7eb"
                  width="25"
                />
              </span>
              <span>
                Office Hours-Mon - Fri / 8:00 AM -
                5:30 PM
              </span>
            </li>
            <li className="flex flex-row items-center justify-evenly gap-2 py-3">
              <span className="cursor-pointer rounded-full bg-gray-300 p-1  hover:bg-white ">
                <Icon
                  icon="gg:facebook"
                  color="#149494"
                  width="30"
                />
              </span>
              <span className="cursor-pointer rounded-full bg-gray-300 p-1 hover:bg-white ">
                <Icon
                  icon="uil:twitter"
                  color="#149494"
                  width="30"
                />
              </span>
              <span className="cursor-pointer rounded-full bg-gray-300 p-1 hover:bg-white ">
                <Icon
                  icon="prime:instagram"
                  color="#149494"
                  width="30"
                />
              </span>
            </li>
          </ul>
        </div>
        <div className="flex w-2/3 flex-row items-start max-md:w-full max-sm:w-full max-sm:flex-wrap max-sm:justify-start max-sm:gap-8">
          <div className="ml-8 w-1/2 text-gray-300 max-sm:ml-0 max-sm:w-full">
            <div className="mb-4 text-3xl font-semibold">
              <h1> LINKS</h1>
            </div>
            <ul className="font-semibold">
              <li className="py-2">
                &#8250; Products
              </li>
              <li className="py-2">
                &#8250; About Us
              </li>
              <li className="py-2">
                &#8250; Services
              </li>
              <li className="py-2">
                &#8250; Blogs
              </li>
              <li className="py-2">
                &#8250; Contact Us
              </li>
            </ul>
          </div>
          <div className="w-1/2 text-gray-300  max-sm:w-full">
            <div className="mb-4 text-3xl font-semibold">
              <h1> WHY BUY THROUGH US</h1>
            </div>
            <ul className="font-semibold">
              <li className="py-2">
                &#8250; Save Time and Money
              </li>
              <li className="py-2">
                &#8250; Compare and Contrast
              </li>
              <li className="py-2">
                &#8250; Verified Products, Trusted
                Vendors
              </li>
              <li className="py-2">
                &#8250; Easy Pickup and Delivery
              </li>
              <li className="py-2">
                &#8250; Secure Transactions
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-t-2 border-gray-400  py-6 text-center font-sans text-base font-semibold text-gray-200">
        <h2>
          &#169; 2023 YIZMED Africa Supplier Ltd.
          All rights reserved.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
