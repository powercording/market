import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4  space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md ">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex items-start space-x-2 space-x-reverse flex-row-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400  " />
        <div className="w-1/2 text-sm order-1 text-gray-700 p-2 border border-gray-300 rounded-md ">
          <p>I want ￦20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md ">
          <p>미쳤어</p>
        </div>
      </div>
      <div className="fixed w-full mx-auto max-w-md bottom-6 inset-x-0">
        <div className="flex items-center relative">
          <input
            type="text"
            className="shadow rounded-full w-full border-gray-300 focus:ring-orange-400 focus:outline-none focus:border-orange-400 pr-10"
          />
          <div className="absolute inset-y-0 flex items-center right-2">
            <button className="bg-orange-400 rounded-full w-7 h-7 flex items-center justify-center font-bold text-xl text-white hover:bg-orange-500 cursor-pointer focus:ring-1 focus:ring-offset-2 focus:ring-orange-300">
              <p className=" mb-1 pointer-events-none">&rarr;</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
