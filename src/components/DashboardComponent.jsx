import React from "react";
import { dashboard } from "../data/dashboard";
export default function DashboardComponent() {
  return (
    <div>
      <p className="font-bold text-2xl my-2">Dashboard</p>

      {/* display summary on each card */}
      <div className="flex gap-5">
        {dashboard.length > 0
          ? dashboard.map((el) => (
              <div
                key={el.id}
                className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto"
              >
                <div
                  className={`p-3 rounded-xl ${el?.color ?? "bg-custom-pink"} `}
                >
                  <img src={el?.icon ?? "/fi-sr-file.svg"} alt="file icon" />
                </div>
                <div>
                  <p className="text-xl font-semibold">{el.totalTasks}</p>
                  <p className="text-gray-400">
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
