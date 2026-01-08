import type { Metadata } from "next";
import React from "react";
import ColorPalette from "@/components/techem/parc/demo/ColorPalette";
import TypographyDemo from "@/components/techem/parc/demo/TypographyDemo";
import StyledCard, { StyledButton, StyledBadge } from "@/components/techem/parc/demo/StyledCard";

export const metadata: Metadata = {
  title: "Démonstration Styles Maison Mère | TECHEM - Espace client",
  description: "Démonstration des styles CSS de la maison mère",
};

export default function DemoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary dark:text-white/90 mb-2 font-heading">
          Démonstration des styles de la maison mère
        </h1>
        <p className="text-text-secondary font-body">
          Cette page présente tous les styles CSS extraits du site de la maison mère et intégrés dans le projet.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 xl:col-span-6">
          <ColorPalette />
        </div>

        <div className="col-span-12 xl:col-span-6">
          <TypographyDemo />
        </div>

        <div className="col-span-12">
          <StyledCard title="Exemple de carte avec styles maison mère">
            <div className="space-y-4">
              <p className="text-text-primary font-body">
                Ceci est un exemple de carte utilisant les styles de la maison mère.
              </p>
              <div className="flex flex-wrap gap-3">
                <StyledButton variant="primary">Bouton Principal</StyledButton>
                <StyledButton variant="secondary">Bouton Secondaire</StyledButton>
                <StyledButton variant="outline">Bouton Outline</StyledButton>
              </div>
              <div className="flex flex-wrap gap-3">
                <StyledBadge variant="primary">Badge Principal</StyledBadge>
                <StyledBadge variant="secondary">Badge Secondaire</StyledBadge>
                <StyledBadge variant="success">Succès</StyledBadge>
                <StyledBadge variant="error">Erreur</StyledBadge>
              </div>
            </div>
          </StyledCard>
        </div>
      </div>
    </div>
  );
}

