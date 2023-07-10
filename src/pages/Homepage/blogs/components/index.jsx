import { Icon } from '@iconify/react';
function Blogs() {
  return (
    <div className=" w-full bg-tbanner ">
      <div className="flex w-3/4 flex-col">
        <div className="ml-20 py-8 text-2xl font-bold text-myBlue ">
          <h1>What Customers Say About Us</h1>
        </div>
        <div className=" border-opacity-15 ml-20  w-3/5 rounded-md border border-gray-950">
          <div className="mx-4 w-full">
            <span>
              <p className="py-10">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Tempore maiores at ipsa aperiam
                voluptate eos veniam obcaecati
                atque explicabo corrupti.
              </p>
            </span>
            <span>
              <h2 className="py-8">
                Peter Hospital
              </h2>
            </span>
            <span>
              <h3 className="py-6">Peter Joe</h3>
            </span>
            <span>
              <button className="rounded-full border border-mylightBlue ">
                <Icon
                  icon="iconamoon:arrow-up-2-thin"
                  width="25"
                  height="25"
                  rotate={1}
                  vFlip={true}
                />
              </button>
              {''}
              <button className="rounded-full border border-mylightBlue ">
                <Icon
                  icon="iconamoon:arrow-up-2-thin"
                  width="25"
                  height="25"
                  rotate={1}
                />
              </button>
            </span>
          </div>
        </div>
        <div className="relative -right-20 flex w-full flex-row items-center justify-center py-10">
          <span>O</span>
          <span>O</span>
          <span>O</span>
          <span>O</span>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
