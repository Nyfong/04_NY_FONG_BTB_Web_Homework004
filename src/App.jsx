import { Sidebar } from "lucide-react";
import "./App.css";
import { useState } from "react";
import TopNavbarComponent from "./components/TopNavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import CardComponent from "./components/CardComponent";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const getSearch = (value) => {
    console.log("value from the search:", value);
    setSearchValue(value);
  };
  return (
    <>
      <main className="grid grid-cols-12 ">
        <div className="col-span-2">
          <SidebarComponent />
        </div>
        {/* middle */}
        <div className="col-span-10 p-3 bg-gray-100 ">
          <TopNavbarComponent className="pr-2" onSearch={getSearch} />
          <div className="grid grid-cols-12  h-full">
            <div className="col-span-9">
              <DashboardComponent />
              {/* add card */}
              <div className="flex items-center justify-between my-2 pr-2">
                <p className="font-bold text-2xl">Assignments</p>
                <AddNewProjectComponent />
              </div>
              {/* show cards */}
              <div className="pr-2">
                <CardComponent searchValue={searchValue} />
              </div>
            </div>
            {/* left side dashboard */}
            <div className="col-span-3 py-2 grid">
              <LearningMaterialsComponent />
            </div>
          </div>
        </div>
        {/* left side */}
      </main>
    </>
  );
}

export default App;
