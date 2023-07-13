import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
function NavBarList() {

  return (
    <>
      <div className="max-[1024px]:flex  max-[1024px]:w-full max-[1024px]:items-center max-[1024px]:justify-end lg:hidden">
        <Icon
          icon="pepicons-pop:menu-circle-filled"
          width="40"
          color="#149494"
          hFlip={true}
          className=""
        />
      </div>
      <div className=" lg:justify-flexend min-[102px]:hidden lg:flex lg:w-full lg:flex-row lg:items-center">
        <div className=" w-3/5 px-2">
          <ul className=" flex w-full cursor-pointer flex-row items-center justify-end gap-6 text-lg font-bold text-myBlue xl:gap-10 2xl:gap-12">
            <li className=" hover:border-b-2 hover:border-myBrown hover:pb-2 ">
              <Link to="/">Home</Link>
            </li>
            <li  className="flex flex-row  items-center gap-1 hover:border-b-2 hover:border-myBrown  hover:pb-2">
              <span className="">Products</span>
              <Icon icon="ep:arrow-down-bold" />
            </li>
            <li className=" hover:border-b-2 hover:border-myBrown  hover:pb-2">
              <Link to="/about"> About</Link>
            </li>
            <li className=" hover:border-b-2 hover:border-myBrown hover:pb-2 ">
              <Link to="/service"> Services</Link>
            </li>
            <li className=" hover:border-b-2 hover:border-myBrown  hover:pb-2">
              <Link to="/blog"> Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="w-2/6  px-2">
          <div className="flex  flex-row items-center justify-end">
            <input
              placeholder="Search...."
              type="text"
              name="search"
              id="search"
              className=" h-9 w-full rounded-xl border px-4 outline-none focus:ring-1 focus:ring-mylightBlue"
            />
            <div className="">
              <button className=" relative -left-4  rounded-2xl bg-myBrown px-4 py-2 text-base font-semibold text-white">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end text-center">
          <Link to="/contact">
            <button className="text-md w-28 rounded-2xl bg-mylightBlue p-3 font-bold text-white hover:border-2 hover:border-solid hover:border-myBlue hover:bg-white hover:text-myBlue">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBarList;
