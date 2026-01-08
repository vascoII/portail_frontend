"use client";
import React from "react";

/**
 * Composant de démonstration des couleurs de la maison mère
 * Affiche toutes les couleurs principales extraites du CSS de la maison mère
 */
export default function ColorPalette() {
  const colorGroups = [
    {
      title: "Couleurs Principales",
      colors: [
        { name: "brand-primary", value: "#0F70F0", class: "bg-brand-primary" },
        { name: "brand-hover", value: "#0C5ECB", class: "bg-brand-hover" },
        { name: "brand-white", value: "#FFFFFF", class: "bg-brand-white border border-gray-200" },
        { name: "error", value: "#940000", class: "bg-error" },
      ],
    },
    {
      title: "Couleurs de Texte",
      colors: [
        { name: "text-primary", value: "#212121", class: "bg-text-primary" },
        { name: "text-secondary", value: "#757575", class: "bg-text-secondary" },
        { name: "text-neutral", value: "#616161", class: "bg-text-neutral" },
      ],
    },
    {
      title: "Couleurs de Fond",
      colors: [
        { name: "background-highlight", value: "#FAFAFA", class: "bg-background-highlight border border-gray-200" },
        { name: "background-dark", value: "#A8A8A8", class: "bg-background-dark" },
      ],
    },
    {
      title: "Couleurs de Bordure",
      colors: [
        { name: "borders", value: "#DCDCDC", class: "bg-borders border border-gray-300" },
      ],
    },
    {
      title: "Nuances de Gris",
      colors: [
        { name: "202020", value: "#202020", class: "bg-202020" },
        { name: "333333", value: "#333333", class: "bg-333333" },
        { name: "555555", value: "#555555", class: "bg-555555" },
        { name: "666666", value: "#666666", class: "bg-666666" },
        { name: "909090", value: "#909090", class: "bg-909090" },
        { name: "999999", value: "#999999", class: "bg-999999" },
      ],
    },
  ];

  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">
        Palette de couleurs - Maison Mère
      </h4>
      
      <div className="space-y-8">
        {colorGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
              {group.title}
            </h5>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {group.colors.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className="flex flex-col items-center p-4 border border-gray-200 rounded-lg dark:border-gray-800 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-full h-20 rounded-md mb-3 ${color.class}`}
                    style={{ backgroundColor: color.value }}
                  />
                  <div className="text-center">
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {color.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      {color.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

