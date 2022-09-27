import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className=" space-y-5 py-10 px-4">
      <div>
        <label
          htmlFor="name"
          className="font-medium text-sm text-gray-500 my-3 "
        >
          Name
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <input
            id="name"
            className="pl-3 appearance-none w-full border border-gray-300 px-4 focus:border-orange-500 focus:outline-none focus:ring-orange-500 rounded-md shadow placeholder-gray-400"
            type="text"
            placeholder="insert Name of stram here."
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="price"
          className="font-medium text-sm text-gray-500 my-3 "
        >
          Price
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="pointer-events-none absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id="price"
            className="pl-7 appearance-none w-full border border-gray-300 px-4 focus:border-orange-500 focus:outline-none focus:ring-orange-500 rounded-md shadow placeholder-gray-400"
            type="text"
            placeholder="0.00"
          />
          <div className=" pointer-events-none absolute right-0 pr-3 flex items-center justify-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block font-medium text-sm text-gray-500 my-3 ">
          Description
        </label>

        <textarea
          rows={4}
          className="mt-1 shadow-sm w-full focus:ring-2 focus:ring-orange-400 rounded-md border-gary-300 focus:border-orange-400"
        />
      </div>
      <button className=" bg-orange-400 hover:bg-orange-500 rounded-md shadow-md py-3 text-white text-sm font-medium focus:ring-2 focus:ring-offset-2 w-full focus:ring-orange-400 focus:outline-none mt-5">
        Go Live
      </button>
    </div>
  );
};

export default Create;
