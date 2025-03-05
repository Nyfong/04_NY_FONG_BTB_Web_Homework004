import { EllipsisVertical } from "lucide-react";
import React, { useState } from "react";

export default function CardComponent({ searchValue }) {
  const [cards, setCard] = useState([]);
  const [cardTitle, setTitle] = useState("");
  const [cardDate, setDate] = useState("");
  const [cardProgress, setProgress] = useState("");
  const [cardDesc, setDesc] = useState("");
  //handle addCard
  function addCard() {
    const newCard = {
      title: cardTitle,
      date: cardDate,
      progress: cardProgress,
      decs: cardDesc,
    };
    setCard((cards) => [...cards, newCard]);
    setTitle("");
    setDate("");
    setProgress("");
    setDesc("");
    console.log("SomeCard", cards);
  }
  //method for percentage
  const percentageMethod = (percentParams) => {
    const percent =
      percentParams == 25
        ? "w-[25%] bg-custom-pink rounded-full  h-2.5 absolute top-0 "
        : percentParams == 50
        ? "w-[50%] bg-custom-yellow-500 rounded-full  h-2.5 absolute top-0"
        : percentParams == 75
        ? "w-[75%] bg-custom-carrot rounded-full  h-2.5 absolute top-0"
        : percentParams == 100
        ? "w-[100%] bg-custom-sky-blue-500 rounded-full  h-2.5 absolute top-0"
        : "";
    return percent;
  };
  //mockup
  const setOfData = [
    {
      title: "Web Development",
      date: "12-05-2025",
      progress: 25,
      desc: "Building a responsive website using modern frameworks.",
    },

    {
      title: "AI Model Training",
      date: "20-11-2024",
      progress: 100,
      desc: "Training a machine learning model for image classification.",
    },
    {
      title: "Game Development",
      date: "05-03-2025",
      progress: 75,
      desc: "Creating a 3D game using Unity and C# scripting.",
    },
    {
      title: "Cloud Infrastructure",
      date: "01-07-2024",
      progress: 50,
      desc: "Setting up scalable cloud infrastructure on AWS.",
    },
  ];
  //searchValue
  console.log("from props", searchValue);
  const filteredData = setOfData.filter((item) =>
    item.title.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  return (
    <div className="grid grid-cols-3 gap-2">
      {filteredData.length > 0
        ? filteredData.map((el, i) => (
            <>
              <div
                key={i}
                className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between mb-5">
                  {/* date */}
                  <p className={`text-custom-sky-blue font-medium`}>
                    {el.date ?? "Jan 17, 2025"}
                  </p>
                  <EllipsisVertical size={20} color="#374957" />
                </div>

                <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {el.title ?? "web design"}
                </h5>
                <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
                  {el.desc ??
                    "You should make web design pack with 30 different pose and with other component on the internet as well."}
                </p>

                {/* progress bar */}
                <div className="w-full flex justify-between font-medium mb-1">
                  <p>Progress</p>
                  <p>{`${el.progress}%` ?? "100%"}</p>
                </div>
                <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className={percentageMethod(el.progress)}
                    title={el.progress}
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
          ))
        : setOfData.map((el, i) => (
            <>
              <div
                key={i}
                className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between mb-5">
                  {/* date */}
                  <p className={`text-custom-sky-blue font-medium`}>
                    {el.date ?? "Jan 17, 2025"}
                  </p>
                  <EllipsisVertical size={20} color="#374957" />
                </div>

                <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {el.title ?? "web design"}
                </h5>
                <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
                  {el.desc ??
                    "You should make web design pack with 30 different pose and with other component on the internet as well."}
                </p>

                {/* progress bar */}
                <div className="w-full flex justify-between font-medium mb-1">
                  <p>Progress</p>
                  <p>{`${el.progress}%` ?? "100%"}</p>
                </div>
                <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className={percentageMethod(el.progress)}
                    title={el.progress}
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
