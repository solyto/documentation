---
title: Users & Settings
description: User profile, settings, and public profiles.
---

Manage your profile, preferences, and admin user operations. All endpoints require authentication unless noted.

## Profile Endpoints

| Method | Path | Description | Auth |
|--------|------|-------------|------|
| GET | `/v1/users/me` | Get current user profile | Yes |
| POST | `/v1/users/me/profile-image` | Upload profile image | Yes |
| PUT | `/v1/users/change-password` | Change password | Yes |
| GET | `/v1/users/{user}/public-profile` | View another user's public profile | Yes |

## Settings Endpoints

| Method | Path | Description | Auth |
|--------|------|-------------|------|
| PUT | `/v1/users/me/settings/navigation` | Update navigation preferences | Yes |
| PUT | `/v1/users/me/settings/timezone` | Set timezone | Yes |
| PUT | `/v1/users/me/settings/language` | Set language (en/de/fr/es) | Yes |
| PUT | `/v1/users/me/settings/date-format` | Set date format | Yes |
| PUT | `/v1/users/me/settings/time-format` | Set time format | Yes |
| PUT | `/v1/users/me/settings/weather-city` | Set weather location | Yes |
| PUT | `/v1/users/me/settings/weather-temperature-unit` | Set unit (c/f) | Yes |
| PUT | `/v1/users/me/settings/openai-api-key` | Store OpenAI API key | Yes |
| PUT | `/v1/users/me/settings/complete-onboarding` | Mark onboarding complete | Yes |
| GET/PUT | `/v1/users/me/settings/check-in` | Get or update check-in settings | Yes |

## Admin Endpoints

| Method | Path | Description | Auth |
|--------|------|-------------|------|
| GET | `/v1/users` | List all users | Admin |
| PUT | `/v1/users/{user}` | Update a user | Admin |

## Upload Profile Image

```
POST /v1/users/me/profile-image
Content-Type: multipart/form-data
```

| Field | Type | Rules |
|-------|------|-------|
| `image` | file | required, image, max 2MB |

## Change Password

```
PUT /v1/users/change-password
```

| Field | Type | Rules |
|-------|------|-------|
| `current_password` | string | required |
| `new_password` | string | required, min 12 |
| `new_password_confirmation` | string | required, must match |

## Weather City

```
PUT /v1/users/me/settings/weather-city
```

| Field | Type | Rules |
|-------|------|-------|
| `city` | string | required |
| `lat` | numeric | required |
| `lon` | numeric | required |

## Language

Supported values: `en`, `de`, `fr`, `es`.

## Temperature Unit

Supported values: `c` (Celsius), `f` (Fahrenheit).
