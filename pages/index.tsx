import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-10 px-5 grid gap-10">
      <div className="bg-white p-6 rounded-3xl shadow-2xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between even:bg-blue-50 odd:bg-red-50"
            >
              <span className="text-gray-500 my-2">Grey chair</span>
              <span className="font-semibold flex items-center">$19</span>
            </div>
          ))}
        </ul>

        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span>total $95</span>
          <span className="font-semibold">$81</span>
        </div>
        <button className="bg-blue-500  mx-auto rounded-2xl text-white mt-5 p-2 w-3/4 block">
          Checkout
        </button>
      </div>
      <div className="bg-white  rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl relative -top-5 bg-white p-7 ">
          <div className="flex justify-between items-end relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 ">Orders</span>
              <span className="font-medium">$340</span>
            </div>
            <div className="w-24 h-24 bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 ">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="flex flex-col items-center -mt-16 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-400">New York U.S.A</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="flex justify-between items-center mb-5">
          <span>←</span>
          <div className="space-x-3">
            <span>⭐ 4.9</span>
            <span className=" shadow-lg rounded-lg">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-80" />
        <div className="flex flex-col mt-5">
          <span className="text-lg font-medium">Swoon Lounge</span>
          <span className="text-gray-500 mb-3">Chair</span>
          <div className="flex mb-5 justify-between items-center">
            <div className="space-x-3">
              <button className="w-5 h-5 bg-yellow-500 rounded-full focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 bg-indigo-500 rounded-full focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 bg-teal-500 rounded-full focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="space-x-5">
              <button className="p-1.5 bg-blue-200 aspect-square w-10 text-xl text-gray-500 rounded-lg">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 bg-blue-200 aspect-square w-10 text-xl text-gray-500 rounded-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-3xl font-bold">$450</span>
            <button className="ml-auto bg-blue-500 p-3 w-40 rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-2xl">
        <form className="flex flex-col space-y-2 p-5">
          <input
            type="text"
            required
            placeholder="username"
            className="border p-1 peer border-gray-400"
          />
          <span className="peer-invalid:text-red-400 ">
            this form is invalid
          </span>
          <input type="submit" value="login" />
        </form>
      </div>
    </div>
  );
};

export default Home;
