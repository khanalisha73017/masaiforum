import React from "react";
import { Main } from "./Main";

export const Dashboard = () => {
  return (
    <div className="dash-container-100 main-div p-4  border border-gray-300">
      <div className="flex gap-8 items-center justify-between mb-8">
        <div className="outerdiv">
          <div className="flex justify-center ">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.FQNKDGylIXsu4asQILF3_AHaGl&pid=Api&P=0&h=180"
              alt=""
              className="logo-img"
            />

            <p className="logoP">Masai Forum</p>
          </div>

          <input
            className="block css-search p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type here to search..."
            type="text"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex justify-center">
            {/* <img src={avatar} alt="userlogo" className="singleUser" /> */}

            <img src="notification-bing.svg" alt="logo" className="bell" />
          </div>
        </div>
      </div>
      <Main />
    </div>
  );
};
