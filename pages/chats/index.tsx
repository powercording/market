import { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="py-10  ">
      <div className="flex px-4 items-center space-x-3 py-3 last:border-b-0 border-b cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-slate-400 " />
        <div>
          <p className=" text-gray-700">Steve Jebs</p>
          <p className="text-sm font-medium text-gray-500">
            See you tomorrow in the corner at 2pm!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
