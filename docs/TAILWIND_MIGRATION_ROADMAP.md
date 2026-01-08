# Roadmap - Migration Tailwind Config Maison Mère

## 📋 Analyse du fichier `tailwind.config.js`

### ✅ Validation

Le fichier `tailwind.config.js` généré est **syntaxiquement correct** mais utilise la syntaxe de **Tailwind CSS v3**.

**Points à noter :**
- ✅ Structure correcte avec `export default`
- ✅ Définition des couleurs (126 couleurs personnalisées)
- ✅ Définition des polices (10 familles de polices)
- ✅ Configuration `content` correcte pour Next.js
- ⚠️ **Problème** : Le projet utilise **Tailwind CSS v4** qui utilise une syntaxe différente

### 🔍 Contenu du fichier

#### Couleurs (126 définitions)
- Couleurs hexadécimales directes (ex: `"202020": "#202020"`)
- Couleurs sémantiques (ex: `"brand-primary": "#0F70F0"`)
- Couleurs avec variables CSS (ex: `"link-primary": "var(--yxt-color-brand-primary)"`)
- Couleurs Yext (système de recherche)

#### Polices (10 familles)
- `body`, `heading` : UniversLTPro-45Light
- `arial`, `helvetica`, `verdana` : Polices système
- `universltpro-45light`, `universltpro-55roman` : Variantes Univers
- `universltw02-55roman`, `universltw02-65bold` : Variantes Univers W02

---

## 🎯 Roadmap d'implémentation

### Phase 1 : Migration vers Tailwind v4 ✅

**Objectif** : Adapter les styles de la maison mère à la syntaxe Tailwind v4

#### Étape 1.1 : Migrer les couleurs vers `globals.css`
- Convertir les couleurs du `tailwind.config.js` vers la syntaxe `@theme` dans `globals.css`
- Gérer les variables CSS existantes (ex: `var(--yxt-color-brand-primary)`)
- Organiser les couleurs par catégories (brand, text, background, etc.)

#### Étape 1.2 : Migrer les polices vers `globals.css`
- Ajouter les familles de polices dans `@theme`
- Vérifier la disponibilité des polices Univers (peut nécessiter l'ajout de fichiers de polices)

#### Étape 1.3 : Nettoyer le fichier `tailwind.config.js`
- Option 1 : Supprimer le fichier (recommandé pour Tailwind v4)
- Option 2 : Le garder comme référence mais ne pas l'utiliser

---

### Phase 2 : Création de composants demo pour `/demo` 🎨

**Objectif** : Créer des composants utilisant les styles de la maison mère

#### Étape 2.1 : Créer un composant de démonstration de couleurs ✅
- Afficher toutes les couleurs principales de la maison mère
- Montrer les variantes (primary, hover, etc.)
- **Fichier** : `src/components/techem/parc/demo/ColorPalette.tsx`

#### Étape 2.2 : Créer un composant de démonstration de typographie ✅
- Afficher les différentes familles de polices
- Montrer les tailles et styles disponibles
- **Fichier** : `src/components/techem/parc/demo/TypographyDemo.tsx`

#### Étape 2.3 : Créer des composants réutilisables ✅
- `StyledCard`, `StyledButton`, `StyledBadge` : Composants utilisant les styles de la maison mère
- **Fichier** : `src/components/techem/parc/demo/StyledCard.tsx`

#### Étape 2.4 : Créer la page `/demo` ✅
- Page dédiée pour présenter tous les styles
- **Fichier** : `src/app/(admin)/demo/page.tsx`
- **URL** : `/demo`

#### Étape 2.5 : Adapter les composants existants de `/parc` (optionnel)
- `ParcMainCard` : Utiliser les couleurs brand-primary, brand-hover
- `ParcMetrics` : Utiliser les couleurs de la maison mère
- `FicheClient` : Adapter avec les styles de la maison mère
- `VosReleves` : Utiliser les couleurs text-primary, text-secondary
- `VosChantiers` : Adapter avec les bordures et backgrounds

---

### Phase 3 : Tests et validation ✅

#### Étape 3.1 : Vérifier la compatibilité
- Tester que toutes les classes Tailwind fonctionnent
- Vérifier que les variables CSS sont bien résolues
- Tester le dark mode si applicable

#### Étape 3.2 : Optimisation
- Vérifier que seules les classes utilisées sont générées (purge)
- Optimiser les couleurs non utilisées
- Documenter les couleurs principales à utiliser

---

## 📝 Notes importantes

### Variables CSS
Certaines couleurs utilisent des variables CSS (ex: `var(--yxt-color-brand-primary)`). Il faudra :
1. Soit définir ces variables dans `globals.css`
2. Soit remplacer directement par les valeurs hexadécimales

### Polices Univers
Les polices Univers nécessitent probablement :
- L'ajout des fichiers de polices dans `/public/fonts/` ou `/src/fonts/`
- La configuration dans `next.config.js` ou via `next/font`

### Compatibilité Tailwind v4
Tailwind v4 utilise :
- `@theme` dans le CSS au lieu de `tailwind.config.js`
- Syntaxe différente pour les couleurs et polices
- Support natif des variables CSS

---

## 🚀 Prochaines étapes

1. ✅ **Valider le fichier** (fait)
2. ✅ **Migrer vers Tailwind v4** (fait)
3. ✅ **Créer les composants demo** (fait)
4. ✅ **Créer la page `/demo`** (fait)
5. ⏳ **Tester et valider** (à faire)
6. ⏳ **Adapter les composants existants** (optionnel)

---

**Date de création** : 2025-01-XX  
**Statut** : En cours

