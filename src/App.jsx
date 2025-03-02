import { Sidebar } from "lucide-react";
import "./App.css";
import TopNavbarComponent from "./components/TopNavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import CardComponent from "./components/CardComponent";
function App() {
  return (
    <>
      <main className="grid grid-cols-12 ">
        <div className="col-span-2">
          <SidebarComponent />
        </div>
        {/* middle */}
        <div className="col-span-10 p-3">
          <TopNavbarComponent />
          <div className="grid grid-cols-12">
            <div className="col-span-9">
              <DashboardComponent />
              {/* add card */}
              <div className="flex items-center justify-between p-2">
                <p className="font-bold text-2xl">Assignments</p>
                <AddNewProjectComponent />
              </div>
              {/* show cards */}
              <div className="grid grid-cols-3 gap-5">
                <CardComponent />
              </div>
            </div>
            {/* left side dashboard */}
            <div className="col-span-3 p-2 grid">
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
