---
title: API Check-in
description: Suivi quotidien de l'humeur et de la santé.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/check-in`.

## Endpoints

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/check-in` | Lister les entrées de check-in |
| POST | `/v1/check-in` | Créer ou mettre à jour un check-in pour une date (unique par utilisateur/date) |

## Récupérer les check-ins

```
GET /v1/check-in
```

Retourne les entrées de check-in de l'utilisateur.

## Créer / mettre à jour un check-in

```
POST /v1/check-in
```

| Champ | Type | Description |
|-------|------|-------------|
| `date` | date | Requis. Date de l'entrée |
| `mood` | integer | Optionnel. 1–5 |
| `sleep` | integer | Optionnel. 1–5 |
| `dreams` | integer | Optionnel. 1–5 |
| `food_quality` | integer | Optionnel. 1–5 |
| `food_amount` | integer | Optionnel. 1–5 |
| `water` | integer | Optionnel. 1–5 |
| `sports` | integer | Optionnel. Valeur du sport |
| `work` | integer | Optionnel. 1–5 |
| `menstruation` | integer | Optionnel. 1–5 |
| `alcohol` | integer | Optionnel. 1–5 |
| `smoking` | integer | Optionnel. 1–5 |
| `social_life` | integer | Optionnel. 1–5 |

Tous les champs de suivi sont nullables et optionnels ; une `date` est unique par utilisateur, donc renvoyer la même date met à jour l'entrée existante.

## Paramètres

Les paramètres de check-in (trackers activés, sports sélectionnés) sont gérés via les endpoints de paramètres utilisateur — voir [Utilisateurs et paramètres](/api-reference/users/).
