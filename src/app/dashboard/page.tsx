"use client";

import DateDropdownMenu from "@/components/date-dropdown-menu";
import { CategoryMenu } from "@/components/category-menu";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import GlicoseContent from "@/components/glicose-content";
import HemogramaContent from "@/components/hemograma-content";
import MineraisEVitaminasContent from "@/components/minerais-e-vitaminas-content";
import FuncaoRenalContent from "@/components/funcao-renal-content";
import LipidogramaContent from "@/components/lipidograma-content";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("glicose");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { theme } = useContext(ThemeContext);

  return (
    <main className="sm:ml-14 p-2">
      <div className="bg-background border border-bg-gray-900 rounded-2xl shadow">
        <div
          className={`flex items-center justify-between p-4 ${
            theme === "light" ? "text-dark" : "text-white"
          }`}
        >
          {/* <div className="flex items-center space-x-4">
            <NavigationMenuTopbar />
            <h1 className="text-3xl font-semibold ml-2 mt-4">Salute Dashboard</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full max-w-xs"
            />
            <AccountMenu />
            <ThemeMenu />
          </div> */}
        </div>
        {/* <hr className="w-full border-t border-bg-gray-900 mb-4" /> */}

        <div className="pl-4 pr-4 ml-2 mr-2">
          <h1 className="text-6xl font-semibold ml-2 mt-2 mb-4">Salute Dashboard</h1>

          <div className="flex justify-between items-center pt-4">
            <div style={{ maxWidth: "80%" }}>
              <CategoryMenu activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div style={{ maxWidth: "20%" }}>
              <DateDropdownMenu selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>
          </div>

          {activeTab === "glicose" && <GlicoseContent selectedDate={selectedDate} />}
          {activeTab === "hemograma" && <HemogramaContent selectedDate={selectedDate} />}
          {activeTab === "lipidograma" && <LipidogramaContent selectedDate={selectedDate} />}
          {activeTab === "minerais-e-vitaminas" && <MineraisEVitaminasContent selectedDate={selectedDate} />}
          {activeTab === "funcao-renal" && <FuncaoRenalContent selectedDate={selectedDate} />}
        </div>
      </div>
    </main>
  );
}
