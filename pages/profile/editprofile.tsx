import { NextPage } from "next";

const Editprofile: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 bg-slate-400 rounded-full" />
        <label
          htmlFor="picture"
          className="cursor-pointer text-base text-gray-500 px-3 py-2 shadow-sm border border-gray-300 rounded-md hover:bg-gray-100"
        >
          Change
          <input type="file" className="hidden" accept="image/*" id="picture" />
        </label>
      </div>
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="font-medium text-sm text-gray-500 my-3"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          className="appearance-none w-full border border-gray-300 px-4 focus:border-orange-500 focus:outline-none focus:ring-orange-500 rounded-md shadow placeholder-gray-400"
        />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="phone"
          className="font-medium text-sm text-gray-500 my-3"
        >
          Phone Numberm
        </label>
        <div className="flex rounded-md shadow">
          <span className="flex items-center justify-center px-3  rounded-l-md border border-r-0 bg-gray-50 text-gray-500 font-medium text-sm select-none">
            +82
          </span>
          <input
            id="phone "
            type="number"
            required
            className="w-full px-4 py-2 rounded-r-md border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder:gray-400"
          />
        </div>
      </div>
      <button className="w-full bg-orange-400 hover:bg-orange-500 rounded-md shadow-md py-3 px-4 text-white text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 focus:outline-none mt-5">
        Update profile
      </button>
    </div>
  );
};

export default Editprofile;
