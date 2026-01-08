"use client";
import React from "react";

/**
 * Composant de démonstration des polices de la maison mère
 * Affiche toutes les familles de polices extraites du CSS de la maison mère
 */
export default function TypographyDemo() {
  const fontFamilies = [
    { name: "body", class: "font-body" },
    { name: "heading", class: "font-heading" },
    { name: "arial", class: "font-arial" },
    { name: "helvetica", class: "font-helvetica" },
    { name: "universltpro-45light", class: "font-universltpro-45light" },
    { name: "universltpro-55roman", class: "font-universltpro-55roman" },
    { name: "universltw02-55roman", class: "font-universltw02-55roman" },
    { name: "universltw02-65bold", class: "font-universltw02-65bold" },
    { name: "verdana", class: "font-verdana" },
    { name: "ui-sans-serif", class: "font-ui-sans-serif" },
  ];

  const textSamples = [
    { label: "Titre Principal", text: "Gestion du Parc", size: "text-2xl font-bold" },
    { label: "Sous-titre", text: "Informations du parc", size: "text-lg font-semibold" },
    { label: "Texte normal", text: "Ceci est un exemple de texte normal", size: "text-base" },
    { label: "Texte secondaire", text: "Ceci est un texte secondaire", size: "text-sm text-text-secondary" },
    { label: "Petit texte", text: "Ceci est un petit texte", size: "text-xs" },
  ];

  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">
        Typographie - Maison Mère
      </h4>
      
      <div className="space-y-8">
        {/* Familles de polices */}
        <div>
          <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
            Familles de polices disponibles
          </h5>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fontFamilies.map((font, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg dark:border-gray-800"
              >
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-mono">
                  {font.name}
                </p>
                <p className={`${font.class} text-base text-gray-800 dark:text-white/90`}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Exemples de tailles avec couleurs de la maison mère */}
        <div>
          <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
            Exemples de styles avec couleurs de la maison mère
          </h5>
          <div className="space-y-4">
            {textSamples.map((sample, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg dark:border-gray-800 bg-background-highlight"
              >
                <p className="text-xs text-text-secondary mb-2">{sample.label}</p>
                <p className={`${sample.size} text-text-primary font-body`}>
                  {sample.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Exemple avec brand-primary */}
        <div>
          <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
            Exemple avec couleur brand-primary
          </h5>
          <div className="p-4 border border-gray-200 rounded-lg dark:border-gray-800">
            <p className="text-base font-body text-brand-primary mb-2">
              Lien principal avec brand-primary
            </p>
            <button className="px-4 py-2 bg-brand-primary text-brand-white rounded-lg hover:bg-brand-hover transition-colors font-body">
              Bouton avec style maison mère
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

