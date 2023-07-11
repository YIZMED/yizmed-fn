import { Icon } from '@iconify/react';
function Blogs() {
  return (
    <div className="relative top-14  flex w-full items-center justify-start bg-tbanner bg-cover bg-no-repeat">
      <div className="my-8 flex w-3/4 flex-col items-center justify-start max-lg:w-full">
        <div className="w-4/5  py-8 text-2xl font-bold text-myBlue ">
          <h1>What Customers Say About Us</h1>
        </div>
        <div className=" mb-8 flex w-4/5 flex-col items-center justify-center rounded-lg border border-solid border-gray-950 border-opacity-5 bg-white shadow-xl ring-1 ring-gray-200 ">
          <div className="w-full px-4">
            <span>
              <p className="py-10 font-semibold text-stone-600">
                "Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
                Architecto alias odio, atque odit,
                ullam unde officiis sit ipsam
                enim, pariatur totam tenetur. Sed
                quisquam facilis sapiente
                voluptate molestiae nostrum, fuga
                aut odit obcaecati, repellat,
                doloremque et saepe incidunt
                libero nihil quod quo labore enim
                veniam officiis mollitia esse!
                Pariatur, sed."
              </p>
            </span>
            <span>
              <h2 className=" text-2xl font-bold text-mylightBlue">
                {' '}
                St Peter Hospital Kigali
              </h2>
            </span>
            <span>
              <h3 className=" text-xl font-bold text-blue-950 ">
                Dr Peter Joe
              </h3>
            </span>
          </div>
          <div className="flex w-full flex-row items-center justify-end gap-3 px-4 py-2 max-md:justify-center">
            <button className="rounded-full border border-mylightBlue p-2  hover:bg-mylightBlue hover:text-white ">
              <Icon
                icon="iconamoon:arrow-up-2-thin"
                width="25"
                height="25"
                rotate={1}
                vFlip={true}
              />
            </button>
            {''}
            <button className="rounded-full border border-mylightBlue p-2 hover:bg-mylightBlue  hover:text-white ">
              <Icon
                icon="iconamoon:arrow-up-2-thin"
                width="25"
                height="25"
                rotate={1}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
