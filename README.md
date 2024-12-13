### 🚗 Comparateur de Tarifs de Location de Voitures: **CompareAuto**

Bienvenue ! Ce projet est une application interactive permettant aux utilisateurs de comparer les tarifs de location de voitures pour divers prestataires en fonction des besoins spécifiques, comme la durée, la distance, et le type de véhicule.

---

## 📋 Table des matières:

- [🎯 Aperçu](#-aperçu)
- [🌟 Caractéristiques](#-caractéristiques)
- [🗂️ Structure du projet](#️-structure-du-projet)
- [✅ Installation](#-installation)
- [▶️ Démarrage](#️-démarrage)
- [🔑 Authentification Firebase](#-authentification-firebase)
- [🛠️ Technologies utilisées](#️-technologies-utilisées)
- [📦 Dépendances principales](#-dépendances-principales)
- [🤝 Contributions](#-contributions)
- [📄 Licence](#-licence)

---

## 🎯 Aperçu

L'application fournit une solution intuitive et fiable pour :

- Comparer les tarifs de location pour des prestataires comme Leo&Go, Europcar, Citiz, Avis, Hertz, et Sixt.
- Générer des graphiques interactifs basés sur différents scénarios (durée, distance, type de véhicule).
- Authentifier les utilisateurs et gérer leurs profils.

---

## 🌟 Caractéristiques

- **Interface utilisateur moderne** avec un formulaire intuitif pour définir les scénarios.
- **Calculs précis des tarifs**, prenant en compte les abonnements, les coûts horaires, journaliers, hebdomadaires, et kilométriques.
- **Graphiques dynamiques** permettant de visualiser les résultats en temps réel.
- **Scénarios prédéfinis** affichés par défaut pour démontrer les capacités de l'application.
- **Responsiveness complète**, optimisée pour les ordinateurs, tablettes, et smartphones.

---

## 🗂️ Structure du projet

### Arborescence principale du projet :

```
lifprojet-main/
│
├── public/
├── src/
│   ├── components/
│   │   ├── forms/              # Formulaires utilisateur
│   │   ├── graphs/             # Graphiques interactifs
│   │   ├── layout/             # Composants de mise en page (Navbar, Footer)
│   ├── data/                   # Données tarifaires
│   │   ├── leoAndGoPricing.js
│   │   ├── citizPricing.js
│   │   └── autres fichiers...
│   ├── pages/                  # Pages principales (Accueil, etc.)
│   ├── utils/                  # Fonctions utilitaires (calculs tarifaires)
├── package.json
├── README.md
```

---

## ✅ Installation

1. **Cloner le projet**

   ```bash
   git clone https://forge.univ-lyon1.fr/p2308078/lifprojet.git
   cd compareauto
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Configurer Firebase**
   Ajoutez vos clés Firebase dans un fichier `.env` à la racine :
   ```env
   REACT_APP_API_KEY=Votre_API_KEY
   REACT_APP_AUTH_DOMAIN=Votre_AUTH_DOMAIN
   ...
   ```

---

## ▶️ Démarrage

Lancez le projet en local :

```bash
npm start
```

Accédez à l'application sur `http://localhost:3000`.

---

## 🔑 Authentification Firebase

- **Options d'authentification** :
  - Par e-mail et mot de passe.
  - Via Facebook avec **Meta for Developers**.
- **Gestion des profils utilisateurs** avec stockage des images dans **Firestore**.

---

## 🛠️ Technologies utilisées

### Frontend

- **React** : Création d'une interface réactive et modulaire.
- **Chart.js** : Génération de graphiques interactifs.
- **CSS Modules** : Styles scindés pour une meilleure organisation.
- **Axios** : Gestion des requêtes HTTP.

### Backend

- **Firebase** : Gestion des données en temps réel et authentification.

---

## 📦 Dépendances principales

- **React Router DOM** : Navigation entre les pages.
- **Chart.js** : Visualisation des données.
- **Firebase** : Intégration pour l'authentification et le stockage.

---

## 🤝 Contributions

Nous accueillons avec plaisir vos contributions ! N'hésitez pas à ouvrir des issues ou à soumettre des pull requests.

---

## 📄 Licence

Ce projet est sous licence MIT.
