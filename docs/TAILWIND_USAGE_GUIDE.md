# Guide d'utilisation - Styles Maison Mère

## 📋 Vue d'ensemble

Les styles de la maison mère ont été migrés vers Tailwind CSS v4 et sont maintenant disponibles dans le projet.

## ✅ Ce qui a été fait

1. **Migration des couleurs** : Toutes les couleurs du `tailwind.config.js` ont été migrées vers `globals.css` avec la syntaxe `@theme` de Tailwind v4
2. **Migration des polices** : Toutes les familles de polices ont été ajoutées dans `globals.css`
3. **Composants demo** : Des composants de démonstration ont été créés pour la page `/parc`

## 🎨 Utilisation des couleurs

### Couleurs principales

Les couleurs sont disponibles via les classes Tailwind :

```tsx
// Couleur de fond
<div className="bg-brand-primary">...</div>
<div className="bg-brand-hover">...</div>
<div className="bg-background-highlight">...</div>

// Couleur de texte
<p className="text-text-primary">...</p>
<p className="text-text-secondary">...</p>
<p className="text-brand-primary">...</p>

// Bordures
<div className="border-borders">...</div>
```

### Liste des couleurs disponibles

#### Couleurs de marque
- `bg-brand-primary` / `text-brand-primary` : #0F70F0
- `bg-brand-hover` : #0C5ECB
- `bg-brand-white` / `text-brand-white` : #FFFFFF

#### Couleurs de texte
- `text-text-primary` : #212121
- `text-text-secondary` : #757575
- `text-text-neutral` : #616161

#### Couleurs de fond
- `bg-background-highlight` : #FAFAFA
- `bg-background-dark` : #A8A8A8

#### Couleurs de bordure
- `border-borders` : #DCDCDC

#### Couleurs d'erreur
- `bg-error` / `text-error` : #940000

#### Nuances de gris
- `bg-202020`, `bg-333333`, `bg-555555`, `bg-666666`, `bg-909090`, `bg-999999`

## 🔤 Utilisation des polices

### Familles de polices disponibles

```tsx
// Police body (par défaut pour le texte)
<p className="font-body">...</p>

// Police heading (pour les titres)
<h1 className="font-heading">...</h1>

// Autres polices
<p className="font-arial">...</p>
<p className="font-helvetica">...</p>
<p className="font-universltpro-45light">...</p>
<p className="font-universltpro-55roman">...</p>
<p className="font-universltw02-55roman">...</p>
<p className="font-universltw02-65bold">...</p>
<p className="font-verdana">...</p>
```

### Note importante sur les polices Univers

Les polices Univers nécessitent que les fichiers de polices soient disponibles. Si elles ne sont pas encore installées :

1. Ajouter les fichiers de polices dans `/public/fonts/` ou `/src/fonts/`
2. Configurer les polices dans `next.config.js` ou utiliser `next/font`

## 📦 Composants demo

Des composants de démonstration ont été créés dans `/src/components/techem/parc/demo/` :

### ColorPalette
Affiche toutes les couleurs principales de la maison mère.

```tsx
import ColorPalette from "@/components/techem/parc/demo/ColorPalette";

<ColorPalette />
```

### TypographyDemo
Affiche toutes les familles de polices et des exemples de styles.

```tsx
import TypographyDemo from "@/components/techem/parc/demo/TypographyDemo";

<TypographyDemo />
```

### StyledCard, StyledButton, StyledBadge
Composants réutilisables utilisant les styles de la maison mère.

```tsx
import StyledCard, { StyledButton, StyledBadge } from "@/components/techem/parc/demo/StyledCard";

<StyledCard title="Titre">
  <p>Contenu</p>
</StyledCard>

<StyledButton variant="primary">Cliquer</StyledButton>
<StyledBadge variant="primary">Badge</StyledBadge>
```

## 🚀 Exemple d'utilisation dans un composant

```tsx
"use client";
import React from "react";

export default function MonComposant() {
  return (
    <div className="p-5 border border-borders rounded-2xl bg-background-highlight">
      <h2 className="text-lg font-semibold text-text-primary font-heading mb-4">
        Titre avec style maison mère
      </h2>
      <p className="text-text-secondary font-body mb-4">
        Texte secondaire avec la police body
      </p>
      <button className="px-4 py-2 bg-brand-primary text-brand-white rounded-lg hover:bg-brand-hover transition-colors font-body">
        Bouton avec style maison mère
      </button>
    </div>
  );
}
```

## 📍 Page de démonstration

Une page dédiée `/demo` a été créée pour présenter tous les styles de la maison mère :
- Palette de couleurs
- Démonstration de typographie
- Exemples de composants stylisés

Accédez à `/demo` pour voir tous les styles en action.

**Note** : La page `/parc` reste inchangée et n'est pas affectée par les composants de démonstration.

## ⚠️ Notes importantes

1. **Tailwind v4** : Le projet utilise Tailwind CSS v4 qui utilise la syntaxe `@theme` dans le CSS au lieu de `tailwind.config.js`
2. **Variables CSS** : Certaines couleurs du fichier original utilisaient des variables CSS (ex: `var(--yxt-color-brand-primary)`). Elles ont été remplacées par les valeurs directes.
3. **Polices Univers** : Assurez-vous que les fichiers de polices Univers sont disponibles si vous utilisez ces polices.
4. **Compatibilité** : Les classes Tailwind fonctionnent avec les noms de couleurs définis dans `@theme`.

## 🔄 Prochaines étapes

1. Tester les composants sur la page `/parc`
2. Adapter les composants existants pour utiliser les styles de la maison mère
3. Ajouter les fichiers de polices Univers si nécessaire
4. Documenter les couleurs principales à utiliser dans le design system

---

**Date de création** : 2025-01-XX  
**Statut** : ✅ Prêt à l'utilisation

