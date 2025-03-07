import { CloudFog, EllipsisVertical } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function CardComponent({ searchValue, newdata }) {
  const [cards, setCard] = useState([
    {
      title: "Web Development",
      date: "2025-03-09",
      progress: 25,
      desc: "Building a responsive website using modern frameworks.",
    },
    {
      title: "AI Model Training",
      date: "2025-03-11",
      progress: 100,
      desc: "Training a machine learning model for image classification.",
    },
  ]);
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
  const percentageMethodText = (percentParams) => {
    const percent =
      percentParams == 25
        ? "text-custom-pink font-medium"
        : percentParams == 50
        ? " text-custom-yellow-500 font-medium"
        : percentParams == 75
        ? " text-custom-carrot font-medium"
        : percentParams == 100
        ? " text-custom-sky-blue-500 font-medium"
        : "";
    return percent;
  };
  //handle addCard
  useEffect(() => {
    if (newdata && newdata.title) {
      // Only add if the card doesn't already exist (prevent duplicates)
      setCard((prevCards) => {
        // Check if a card with this title already exists
        const exists = prevCards.some((card) => card.title === newdata.title);
        if (!exists) {
          return [...prevCards, newdata];
        }
        return prevCards;
      });
    }
  }, [newdata]);
  console.log(typeof searchValue);
  //searchValue filter
  const filteredData =
    searchValue && typeof searchValue === "string" && searchValue.length > 0
      ? cards.filter(
          (item) =>
            item.title && // Ensure title exists before calling toLowerCase()
            item.title.toLowerCase().includes(searchValue.trim().toLowerCase())
        )
      : cards;
  // Convert DD-MM-YYYY to a readable date format
  const convertNumToStr = (param) => {
    const [year, month, day] = param.split("-");
    const date = new Date(`${month}/${day}/${year}`); // Change  to MM/DD/YYYY
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  // Calculate days left from today to the given date in "YYYY-MM-DD" format
  const daysLeft = (dateStr) => {
    const targetDate = new Date(dateStr);
    const currentDate = new Date();

    // Calculate difference in days
    const diffDays = Math.ceil((targetDate - currentDate) / 86400000);

    if (diffDays === 0) return "Today is the day!";
    if (diffDays < 0) return "The date has passed";

    // Convert to weeks, months, and years
    const weeks = Math.floor(diffDays / 7);
    const months = Math.floor(diffDays / 30);
    const years = Math.floor(diffDays / 365);

    if (years > 0) return `${years} year(s) left`;
    if (months > 0) return `${months} month(s) left`;
    if (weeks > 0) return `${weeks} week(s) left`;

    return `${diffDays} day(s) left`;
  };

  return (
    <div className="grid grid-cols-3 gap-2 pb-[400px]">
      {filteredData.map((el, i) => (
        <div
          key={i}
          className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex justify-between mb-5">
            {/* date */}
            <p className={percentageMethodText(el.progress)}>
              {convertNumToStr(el.date) ?? "Jan 17, 2025"}
            </p>
            <EllipsisVertical size={20} color="#374957" />
          </div>

          <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {el.title ?? "web design"}
          </h5>
          <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
            {el.desc.length > 0
              ? el.desc
              : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dolorum dolores magnam quisquam nostrum iure quidem nulla provident, soluta vero!"}
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
            <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center text-sm">
              {daysLeft(el.date)} day left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
