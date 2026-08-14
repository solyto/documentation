---
title: Utilisateurs et paramètres
description: Profil utilisateur, paramètres et profils publics.
---

Gérez votre profil, vos préférences et les opérations d'administration des utilisateurs. Tous les endpoints nécessitent une authentification, sauf mention contraire.

## Endpoints de profil

| Méthode | Chemin | Description | Auth |
|--------|------|-------------|------|
| GET | `/v1/users/me` | Récupérer le profil de l'utilisateur actuel | Oui |
| POST | `/v1/users/me/profile-image` | Téléverser une image de profil | Oui |
| PUT | `/v1/users/change-password` | Changer le mot de passe | Oui |
| GET | `/v1/users/{user}/public-profile` | Consulter le profil public d'un autre utilisateur | Oui |

## Endpoints de paramètres

| Méthode | Chemin | Description | Auth |
|--------|------|-------------|------|
| PUT | `/v1/users/me/settings/navigation` | Mettre à jour les préférences de navigation | Oui |
| PUT | `/v1/users/me/settings/timezone` | Définir le fuseau horaire | Oui |
| PUT | `/v1/users/me/settings/language` | Définir la langue (en/de/fr/es) | Oui |
| PUT | `/v1/users/me/settings/date-format` | Définir le format de date | Oui |
| PUT | `/v1/users/me/settings/time-format` | Définir le format d'heure | Oui |
| PUT | `/v1/users/me/settings/weather-city` | Définir la localisation météo | Oui |
| PUT | `/v1/users/me/settings/weather-temperature-unit` | Définir l'unité (c/f) | Oui |
| PUT | `/v1/users/me/settings/openai-api-key` | Enregistrer la clé API OpenAI | Oui |
| PUT | `/v1/users/me/settings/complete-onboarding` | Marquer l'accueil comme terminé | Oui |
| GET/PUT | `/v1/users/me/settings/check-in` | Récupérer ou mettre à jour les paramètres de check-in | Oui |

## Endpoints d'administration

| Méthode | Chemin | Description | Auth |
|--------|------|-------------|------|
| GET | `/v1/users` | Lister tous les utilisateurs | Admin |
| PUT | `/v1/users/{user}` | Mettre à jour un utilisateur | Admin |

## Téléverser une image de profil

```
POST /v1/users/me/profile-image
Content-Type: multipart/form-data
```

| Champ | Type | Règles |
|-------|------|-------|
| `image` | file | obligatoire, image, 2 Mo max |

## Changer le mot de passe

```
PUT /v1/users/change-password
```

| Champ | Type | Règles |
|-------|------|-------|
| `current_password` | string | obligatoire |
| `new_password` | string | obligatoire, 12 caractères min |
| `new_password_confirmation` | string | obligatoire, doit correspondre |

## Ville météo

```
PUT /v1/users/me/settings/weather-city
```

| Champ | Type | Règles |
|-------|------|-------|
| `city` | string | obligatoire |
| `lat` | numeric | obligatoire |
| `lon` | numeric | obligatoire |

## Langue

Valeurs prises en charge : `en`, `de`, `fr`, `es`.

## Unité de température

Valeurs prises en charge : `c` (Celsius), `f` (Fahrenheit).
