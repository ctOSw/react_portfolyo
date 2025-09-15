import React from "react";
import TaskForm from "./TaskForm";
import Filters from "./Filters";
import Tasks from "./Tasks";

export default function Main() {
  return (
    <div className="flex flex-col lg:flex-row  gap-8 w-full p-5 mt-4 bg-[#DCDCDC] rounded-md ">
      <TaskForm />
      <div className="w-full">
        <Filters />
        <Tasks />
      </div>
    </div>
  );
}
