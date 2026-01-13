"use client";
import { useState } from "react";

export type TabType = "eauFroide" | "eauChaude" | "repartiteur" | "compteurEnergie";

interface LogementRelevesProps {
  pkLogement: string;
  selectedTab?: TabType;
  onTabChange?: (tab: TabType) => void;
}

export default function LogementReleves({ 
  pkLogement,
  selectedTab: controlledTab,
  onTabChange,
}: LogementRelevesProps) {
  const [uncontrolledTab, setUncontrolledTab] = useState<TabType>("eauFroide");

  const selectedTab = controlledTab ?? uncontrolledTab;

  const handleTabChange = (tab: TabType) => {
    if (controlledTab === undefined) {
      setUncontrolledTab(tab);
    }
    onTabChange?.(tab);
  };

  const getButtonClass = (tab: TabType) => {
    const baseClasses = "px-3 py-2 font-medium w-full rounded-md text-theme-sm transition-all duration-200 flex items-center justify-center gap-2";
    const isActive = selectedTab === tab;
    
    if (isActive) {
      return `${baseClasses} shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400`;
    }
    
    return `${baseClasses} text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50`;
  };

  // Get icon and color for each tab
  const getTabConfig = (tab: TabType) => {
    switch (tab) {
      case "eauFroide":
        return {
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          ),
          color: "text-blue-600 dark:text-blue-400",
        };
      case "eauChaude":
        return {
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          ),
          color: "text-orange-600 dark:text-orange-400",
        };
      case "repartiteur":
        return {
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          color: "text-purple-600 dark:text-purple-400",
        };
      case "compteurEnergie":
        return {
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          color: "text-green-600 dark:text-green-400",
        };
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Relevés
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
          <button
            onClick={() => handleTabChange("eauFroide")}
            className={getButtonClass("eauFroide")}
          >
            <span className={selectedTab === "eauFroide" ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"}>
              {getTabConfig("eauFroide").icon}
            </span>
            <span>Eau froide</span>
          </button>
          <button
            onClick={() => handleTabChange("eauChaude")}
            className={getButtonClass("eauChaude")}
          >
            <span className={selectedTab === "eauChaude" ? "text-orange-600 dark:text-orange-400" : "text-gray-500 dark:text-gray-400"}>
              {getTabConfig("eauChaude").icon}
            </span>
            <span>Eau chaude</span>
          </button>
          <button
            onClick={() => handleTabChange("repartiteur")}
            className={getButtonClass("repartiteur")}
          >
            <span className={selectedTab === "repartiteur" ? "text-purple-600 dark:text-purple-400" : "text-gray-500 dark:text-gray-400"}>
              {getTabConfig("repartiteur").icon}
            </span>
            <span>Répartiteur</span>
          </button>
          <button
            onClick={() => handleTabChange("compteurEnergie")}
            className={getButtonClass("compteurEnergie")}
          >
            <span className={selectedTab === "compteurEnergie" ? "text-green-600 dark:text-green-400" : "text-gray-500 dark:text-gray-400"}>
              {getTabConfig("compteurEnergie").icon}
            </span>
            <span>Compteur d&apos;énergie</span>
          </button>
        </div>
      </div>
    </div>
  );
}
