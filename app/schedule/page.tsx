//"use client";
// import Day1 from "@/components/util/Day1";
import React from "react";
// import Day2 from "../../components/util/Day2";
//import Day3 from "../../components/util/Day3";

const Event = () => {
  //const [activeTab, setActiveTab] = useState("day2"); // Default to "profile"

  // Function to handle tab change
  // const handleTabChange = (tab: string) => {
  //   setActiveTab(tab);
  // };

  return (
    <div>
      <h2
        
        className="md:flex m-10 pt-36 pb-44 md:ml-48 font-palanquin text-4xl mb-10 font-bold lg:max-w-lg lg:text-start "
      >
        Coming soon..
      </h2>
       <div className="md:flex m-10 md:ml-48">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <button
              onClick={() => handleTabChange("day1")}
              className={`inline-flex items-center px-4 py-3 w-full rounded-lg ${
                activeTab === "day1"
                  ? "text-white bg-gradient-to-r from-[#efb98f] via-[#ef9a06] to-[#f1871d] "
                  : "bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              DAY 1
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabChange("day2")}
              className={`inline-flex items-center px-4 py-3 w-full rounded-lg ${
                activeTab === "day2"
                  ? "text-white bg-gradient-to-r from-[#efb98f] via-[#ef9a06] to-[#f1871d]"
                  : "bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              DAY 2
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabChange("day3")}
              className={`inline-flex items-center px-4 py-3 w-full rounded-lg ${
                activeTab === "day3"
                  ? "text-white bg-gradient-to-r from-[#efb98f] via-[#ef9a06] to-[#f1871d]"
                  : "bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              DAY 3
            </button>
          </li>
        </ul>

        
        <div className="pl-12 bg-transparent text-medium text-gray-500  rounded-lg w-full">
          {activeTab === "day1" && <Day1 />}
          {activeTab === "day2" && <Day2 />}
          {activeTab === "day3" && <Day3 />}
        </div>
      </div>  
    </div>
  );
};

export default Event;
