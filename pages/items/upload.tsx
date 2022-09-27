import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <div>
          <label className="w-full flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md text-gray-600 cursor-pointer hover:text-orange-500 hover:border-orange-500">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="my-5">
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
        Upload product
      </button>
    </div>
  );
};

export default Upload;
