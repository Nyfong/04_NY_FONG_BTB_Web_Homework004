import React from "react";
import { dashboard } from "../data/dashboard";
export default function DashboardComponent() {
  return (
    <div>
      <p className="font-bold text-2xl my-2">Dashboard</p>

      {/* display summary on each card */}
      <div className="grid grid-cols-4 gap-2">
        {dashboard.length > 0
          ? dashboard.map((el) => (
              <div
                key={el.id}
                className="grid grid-cols-3 bg-white gap-5 py-3 px-4 rounded-xl w-auto"
              >
                <div className="flex items-center">
                  <div
                    className={`rounded-xl p-3  col-span-1 flex items-center justify-center ${
                      el?.color ??
                      "bg-custom-pink flex items-center justify-center  col-span-1"
                    } `}
                  >
                    <img src={el?.icon ?? "/fi-sr-file.svg"} alt="file icon" />
                  </div>
                </div>
                <div className="flex flex-col justify-center col-span-2">
                  <p className="text-xl font-semibold">{el.totalTasks}</p>
                  <p className="text-gray-400 text-sm">
                    {el?.label ?? "Total Assignments"}
                  </p>
                </div>
              </div>
            ))
          : "empty"}
      </div>
    </div>
  );
}
