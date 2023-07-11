import heroimage from '../../../../assets/Image/27253.jpg';
function Hero() {
  return (
    <div className="relative top-14 flex flex-col items-center justify-center bg-myBackgoundColor max-md:h-screen md:flex-row ">
      <div className="flex w-full flex-col items-center justify-center p-1 lg:gap-3">
        <div className="text-center font-sans font-bold text-stone-100">
          <h1 className="mt-3 text-4xl">
            WE ARE YIZMED
          </h1>
          <h2 className=" py-2 text-2xl ">
            <span className="text-myBlue">
              {' '}
              Africa
            </span>{' '}
            <span className="text-myBrown">
              Supplier
            </span>{' '}
            <span className="text-blue-900">
              Ltd
            </span>
          </h2>
        </div>
        <div className=" max-md:text-md w-3/4 py-2 text-center text-white lg:mx-auto lg:w-full  xl:px-4">
          <p>
            Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nobis
            voluptatum exercitationem aspernatur
            ipsum, iste libero labore at harum
            nostrum? Eligendi possimus labore quae
            necessitatibus.
          </p>
        </div>
        <div className="flex justify-center text-center lg:py-2 xl:mt-8">
          <button className="rounded-md bg-mylightBlue p-2 text-sm text-white lg:text-lg xl:p-3">
            ReadMore
          </button>
        </div>
      </div>
      <div className=" w-full ">
        <div className="flex items-center justify-center max-md:w-full">
          <img
            className="max-md:w-full xl:w-4/5"
            src={heroimage}
            alt="brandimage"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
