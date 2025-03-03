import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ percentage }) {
  const widthAndBackground =
    percentage == 25
      ? "w-[25%] bg-custom-pink rounded-full  h-2.5 absolute top-0 "
      : percentage == 50
      ? "w-[50%] bg-custom-yellow-500 rounded-full  h-2.5 absolute top-0"
      : percentage == 75
      ? "w-[75%] bg-custom-carrot rounded-full  h-2.5 absolute top-0"
      : percentage == 100
      ? "w-[100%] bg-custom-sky-blue-500 rounded-full  h-2.5 absolute top-0"
      : "";
  const data = ["web", "java", "spring", "kdet"];

  const dataSet = [25, 50, 100, 75];
  console.log(dataSet.map((el) => typeof el));

  return (
    <div className="grid grid-cols-3 gap-2">
      {data.length === 0
        ? "empty"
        : data.map((el, i) => (
            <>
              <div
                key={i}
                className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between mb-5">
                  {/* date */}
                  <p className={`text-custom-sky-blue font-medium`}>
                    Jan 17, 2025
                  </p>
                  <EllipsisVertical size={20} color="#374957" />
                </div>

                <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {el ?? "web design"}
                </h5>
                <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
                  You should make web design pack with 30 different pose and
                  with other component on the internet as well.
                </p>

                {/* progress bar */}
                <div className="w-full flex justify-between font-medium mb-1">
                  <p>Progress</p>
                  <p>{`${percentage}%` ?? "100%"}</p>
                </div>
                <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className={widthAndBackground} title="25%"></div>

                  <div
                    className="hidden border-l-4 rounded-full bg-custom-yellow-500 border-l-custom-yellow-500 h-2.5 absolute top-0 w-[50%]"
                    title="50%"
                  ></div>

                  <div
                    className="hidden border-l-4 rounded-full bg-custom-carrot border-l-custom-carrot h-2.5 absolute top-0 w-[75%]"
                    title="75%"
                  ></div>
                </div>

                {/* deadline */}
                <div className="flex justify-end">
                  <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
                    1 day left
                  </p>
                </div>
              </div>
            </>
          ))}
    </div>
  );
}
