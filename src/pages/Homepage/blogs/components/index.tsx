import React from 'react';
import blogImage from '../../../../assets/Image/blog1.jpg';
import { Icon } from '@iconify/react';
function Blogs() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return (
    <div className="relative top-14 w-full bg-opacity-5 bg-blogImage bg-cover bg-center bg-no-repeat max-lg:hidden">
      <h1 className="py-4 text-center text-4xl font-extrabold text-blue-800 ">
        BLogs
      </h1>
      <div className=" flex flex-row items-center gap-3 p-2">
        <span className="rounded-full bg-white p-4 text-center hover:bg-mylightBlue">
          <Icon
            icon="simple-line-icons:arrow-up"
            width="15"
            rotate={3}
            className="cursor-pointer hover:text-white"
          />
        </span>
        <div className=" my-4 flex w-full items-center justify-center gap-8">
          <div className=" rounded-3xl bg-white shadow-lg shadow-gray-700 ">
            <span className="">
              <img src={blogImage} alt="" />
            </span>
            <div className="flex w-full flex-col items-center px-4 pb-8">
              <span className="py-2 text-xl font-extrabold text-myBlue">
                {' '}
                Enhancing Diagnostic Imaging
                Capabilities in Medical Facilities{' '}
              </span>
              <span className="py-2 text-sm">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Nesciunt ab accusamus facere
                consequatur itaque, animi neque
                molestias suscipit
              </span>
              <span className="flex w-full items-center justify-end font-mono text-lg font-bold text-gray-800">
                {today.toDateString()}
              </span>
            </div>
          </div>
          <div className=" rounded-3xl bg-white shadow-lg shadow-gray-700 ">
            <span className="">
              <img src={blogImage} alt="" />
            </span>
            <div className="flex w-full flex-col items-center px-4 pb-8">
              <span className="py-2 text-xl font-extrabold text-myBlue">
                {' '}
                Enhancing Diagnostic Imaging
                Capabilities in Medical Facilities{' '}
              </span>
              <span className="py-2 text-sm">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Nesciunt ab accusamus facere
                consequatur itaque, animi neque
                molestias suscipit
              </span>
              <span className="flex w-full items-center justify-end font-mono text-lg font-bold text-gray-800">
                {today.toDateString()}
              </span>
            </div>
          </div>
          <div className=" rounded-3xl bg-white shadow-lg shadow-gray-700 ">
            <span className="">
              <img src={blogImage} alt="" />
            </span>
            <div className="flex w-full flex-col items-center px-4 pb-8">
              <span className="py-2 text-xl font-extrabold text-myBlue">
                {' '}
                Enhancing Diagnostic Imaging
                Capabilities in Medical Facilities{' '}
              </span>
              <span className="py-2 text-sm">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Nesciunt ab accusamus facere
                consequatur itaque,
              </span>
              <span className="flex w-full items-center justify-end font-mono text-lg font-bold text-gray-800">
                {today.toDateString()}
              </span>
            </div>
          </div>
        </div>
        <span className="rounded-full bg-white p-4 text-center  hover:bg-mylightBlue">
          <Icon
            icon="simple-line-icons:arrow-up"
            width="15"
            rotate={1}
            className="cursor-pointer hover:text-white"
          />
        </span>
      </div>
    </div>
  );
}

export default Blogs;
