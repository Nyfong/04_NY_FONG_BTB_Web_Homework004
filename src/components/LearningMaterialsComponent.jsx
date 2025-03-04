import React, { useEffect } from "react";
import { CloudFog, LucideStar, Star, StarIcon } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";
import { useState } from "react";
export default function LearningMaterialsComponent() {
  const data = learningMaterials;
  console.log("this is the data from learni materials", data);

  // Initialize materials state with the learningMaterials data
  const [materials, setMaterials] = useState(learningMaterials);

  // Sort materials in ascending order
  const sortAscending = () => {
    const sorted = [...materials].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setMaterials(sorted);
  };

  // Sort materials in descending order
  const sortDescending = () => {
    const sorted = [...materials].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setMaterials(sorted);
  };

  // Handle sorting order change from child component
  const handleSortChange = (selectedOrder) => {
    const order = parseInt(selectedOrder, 10); // Convert to number

    if (order === 1) {
      sortAscending();
    } else if (order === 2) {
      sortDescending();
    }
  };

  // Handle starring/unstarring an item
  const handleStar = (id) => {
    const updatedMaterials = materials.map((item) =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setMaterials(updatedMaterials); // Update the state immutably
  };

  //component
  const FullStar = () => {
    return (
      <div>
        {/* Render a fully filled yellow star using Unicode */}
        <span className="text-2xl text-yellow-400">★</span>
      </div>
    );
  };
  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent onSortChange={handleSortChange} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>
      {/* materials list */}
      {materials.length == 0
        ? "not found"
        : materials.map((el, i) => (
            <div key={el.id} className="space-y-3">
              <div className="bg-light-gray px-4 py-2 flex gap-5 items-center my-3">
                <img
                  src={
                    el?.image ??
                    "https://i.pinimg.com/736x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg"
                  }
                  alt="HTML5"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />

                <div className="w-full">
                  <div className="flex justify-between">
                    {/* title  */}
                    <p className="text-base font-medium">
                      {el?.title ?? "default title"}
                    </p>
                    <button
                      onClick={() => handleStar(el.id)}
                      aria-label={el.isFavorite ? "Unfavorite" : "Favorite"}
                    >
                      {el.isFavorite ? <FullStar /> : <Star size={20} />}
                    </button>
                  </div>
                  {/* post at */}
                  <p className="text-gray-400 text-sm">
                    {el?.postedAt ?? "Posted at: 2025/01/13"}
                  </p>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
