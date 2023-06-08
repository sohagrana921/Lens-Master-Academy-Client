import { Helmet } from "react-helmet-async";

import AddClass from "./AddClass";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MyClasses from "./MyClasses";
import { useState } from "react";
import { Link } from "react-router-dom";

const InstructorDashBoard = () => {
  const [activeTab, setActiveTab] = useState("addClass");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <Helmet>
        LensMasters | Instructor Dashboard
        <title></title>
      </Helmet>
      <Tabs className="my-12 text-center">
        <TabList className="flex justify-center gap-1 my-6">
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("addClass")}
              className={` px-8 py-4 rounded text-xl font-bold ${
                activeTab == "addClass" ? " bg-orange-500 text-white" : ""
              }`}
            >
              ADD COURSES
            </Link>
          </Tab>
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("myClass")}
              className={`px-8 py-4 rounded text-xl font-bold ${
                activeTab == "myClass" ? " bg-orange-500 text-white" : ""
              }`}
            >
              MY COURSES
            </Link>
          </Tab>
        </TabList>
        <TabPanel>
          <AddClass></AddClass>
        </TabPanel>
        <TabPanel>
          <MyClasses></MyClasses>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default InstructorDashBoard;
