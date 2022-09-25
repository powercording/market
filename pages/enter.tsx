import { useState } from "react";

const classname = (...className: string[]) => {
  return className.join(" ");
};

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");

  return (
    <div className="mt-16 px-4">
      <h3 className="text-center font-bold text-2xl">Enter to carrot</h3>
      <div className="mt-16">
        <div className=" flex flex-col items-center">
          <h5
            className="font-medium text-gray-400 text-sm mb-8
          "
          >
            Enter using :
          </h5>
          <div className="grid grid-cols-2 gap-16 border-b-2 w-full  ">
            <button
              className={classname(
                "pb-4 font-medium border-b-2",
                method === "email"
                  ? " border-orange-500 text-orange-500"
                  : "border-b-transparent text-gray-500"
              )}
              onClick={onEmailClick}
            >
              Email Login
            </button>
            <button
              className={classname(
                "pb-4 font-medium border-b-2",
                method === "phone"
                  ? " border-orange-500 text-orange-500"
                  : "border-b-transparent text-gray-500"
              )}
              onClick={onPhoneClick}
            >
              Phone Login
            </button>
          </div>
        </div>
        <form className="flex flex-col">
          <label className="font-medium text-sm text-gray-500 my-3">
            {method === "email" ? "Email address" : null}
            {method === "phone" ? "Phone Number" : null}
          </label>
          <div>
            {method === "email" ? (
              <input
                type="email"
                required
                className="appearance-none w-full border border-gray-300 px-4 focus:border-orange-500 focus:outline-none focus:ring-orange-500 rounded-md shadow placeholder-gray-400"
              />
            ) : null}
            {method === "phone" ? (
              <div className="flex rounded-md shadow">
                <span className="flex items-center justify-center px-3  rounded-l-md border border-r-0 bg-gray-50 text-gray-500 font-medium text-sm select-none">
                  +82
                </span>
                <input
                  type="number"
                  required
                  className="w-full px-4 py-2 rounded-r-md border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder:gray-400"
                />
              </div>
            ) : null}
          </div>
          <button className=" bg-orange-400 hover:bg-orange-500 rounded-md shadow-md py-3 text-white text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 focus:outline-none mt-5">
            {method === "email" ? "Get login link" : null}
            {method === "phone" ? "Phone Login" : null}
          </button>
        </form>
        <div className="mt-8">
          <div className="relative">
            <div className="border border-t absolute w-full" />
            <div className="relative text-center -top-3">
              <span className=" bg-white px-2  border-x text-gray-400 text-sm">
                Or enter with
              </span>
            </div>
          </div>
          <div className="grid">
            <button className="bg-gray-100 px-4 py-2 rounded-md flex justify-center hover:bg-gray-200 border mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
