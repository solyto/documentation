---
title: Authentification
description: Connexion, inscription, gestion des tokens et vérification d'email.
---

Tous les endpoints d'authentification sont préfixés par `/api/v1/auth/`. Utilisez l'en-tête `Authorization: Bearer <token>` pour les requêtes authentifiées.

## Endpoints

| Méthode | Chemin | Description | Auth |
|--------|------|-------------|------|
| GET | `/v1/health` | Vérification de l'état du service (public) | Non |
| POST | `/v1/auth/register` | Créer un nouveau compte | Non |
| POST | `/v1/auth/login` | S'authentifier et obtenir un token | Non |
| POST | `/v1/auth/verify` | Vérifier l'adresse email | Non |
| POST | `/v1/auth/forgot-password` | Demander un email de réinitialisation de mot de passe | Non |
| POST | `/v1/auth/reset-password` | Réinitialiser le mot de passe avec un token | Non |
| POST | `/v1/auth/passkey/authenticate-options` | Obtenir un défi de connexion WebAuthn | Non |
| POST | `/v1/auth/passkey/authenticate` | Finaliser la connexion WebAuthn | Non |
| POST | `/v1/auth/logout` | Révoquer le token actuel | Oui |
| POST | `/v1/auth/logout-all` | Révoquer tous les tokens sauf le token actuel | Oui |
| POST | `/v1/auth/refresh` | Émettre un nouveau token | Oui |
| GET | `/v1/auth/tokens` | Lister tous les tokens actifs | Oui |
| POST | `/v1/auth/revoke-token` | Révoquer un token spécifique | Oui |
| POST | `/v1/auth/passkeys/register-options` | Obtenir un défi d'enregistrement WebAuthn | Oui |
| POST | `/v1/auth/passkeys/register` | Enregistrer une nouvelle passkey | Oui |
| GET | `/v1/auth/passkeys` | Lister les passkeys | Oui |
| PUT | `/v1/auth/passkeys/{passkey}` | Renommer une passkey | Oui |
| DELETE | `/v1/auth/passkeys/{passkey}` | Supprimer une passkey | Oui |

## Inscription

```
POST /v1/auth/register
```

**Corps de la requête :**

| Champ | Type | Règles |
|-------|------|-------|
| `name` | string | requis |
| `email` | string | requis, email valide, unique |
| `password` | string | requis, 12 caractères minimum |
| `password_confirmation` | string | requis, doit correspondre à `password` |

Limité à **10 requêtes par heure et par IP**.

## Connexion

```
POST /v1/auth/login
```

**Corps de la requête :**

| Champ | Type | Règles |
|-------|------|-------|
| `email` | string | requis |
| `password` | string | requis |

Limité à **5 requêtes par minute et par email/IP**.

**Réponse (200) :**

```json
{
  "success": true,
  "data": {
    "token": "1|abc123...",
    "token_type": "Bearer",
    "token_expires_at": "2026-06-27T00:00:00Z",
    "user": { "id": 1, "name": "...", "email": "..." }
  }
}
```

## Vérification de l'email

```
POST /v1/auth/verify
```

**Corps de la requête :**

| Champ | Type | Règles |
|-------|------|-------|
| `user_id` | string | requis |
| `token` | string | requis |

## Mot de passe oublié

```
POST /v1/auth/forgot-password
```

Envoie un lien de réinitialisation de mot de passe (valide 60 minutes). Limité à **10 requêtes par heure et par IP**.

| Champ | Type | Règles |
|-------|------|-------|
| `email` | string | requis |
| `platform` | string | optionnel (web/mobile/desktop) |

## Réinitialisation du mot de passe

```
POST /v1/auth/reset-password
```

| Champ | Type | Règles |
|-------|------|-------|
| `token` | string | requis |
| `email` | string | requis |
| `password` | string | requis, 12 caractères minimum |

## Passkeys

Connexion et gestion des passkeys WebAuthn.

| Méthode | Chemin | Description |
|--------|------|-------------|
| POST | `/v1/auth/passkey/authenticate-options` | Obtenir un défi de connexion |
| POST | `/v1/auth/passkey/authenticate` | Finaliser la connexion |
| POST | `/v1/auth/passkeys/register-options` | Obtenir un défi d'enregistrement |
| POST | `/v1/auth/passkeys/register` | Enregistrer une nouvelle passkey |
| GET | `/v1/auth/passkeys` | Lister les passkeys |
| PUT | `/v1/auth/passkeys/{passkey}` | Renommer une passkey (`name`) |
| DELETE | `/v1/auth/passkeys/{passkey}` | Supprimer une passkey |

L'authentification par passkey est limitée à **10 requêtes par minute et par IP/email**.

## Health

```
GET /v1/health
```

Vérification publique de l'état du service. Retourne `status`, `timestamp`, `app` et `version`.

## Déconnexion

```
POST /v1/auth/logout
```

Révoque le token utilisé dans l'en-tête `Authorization`.

## Déconnexion de toutes les autres sessions

```
POST /v1/auth/logout-all
```

Révoque tous les tokens sauf celui qui effectue la requête.

## Rafraîchissement du token

```
POST /v1/auth/refresh
```

Retourne un nouveau token. L'ancien token est révoqué.

**Réponse (200) :**

```json
{
  "success": true,
  "data": {
    "token": "2|def456...",
    "token_type": "Bearer",
    "token_expires_at": "2026-07-27T00:00:00Z"
  }
}
```

## Liste des tokens

```
GET /v1/auth/tokens
```

Retourne tous les tokens actifs de l'utilisateur authentifié. Chaque token inclut un booléen `is_current`.

## Révocation d'un token

```
POST /v1/auth/revoke-token
```

**Corps de la requête :**

| Champ | Type | Règles |
|-------|------|-------|
| `token_id` | integer | requis |
