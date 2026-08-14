---
title: Friends API
description: Friend requests and friend list management.
---

All endpoints require authentication. Base path: `/api/v1/friends`.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/friends` | List accepted friends |
| GET | `/v1/friends/requests` | List pending friend requests |
| POST | `/v1/friends/requests` | Send a friend request |
| PUT | `/v1/friends/requests/{id}/accept` | Accept a friend request |
| PUT | `/v1/friends/requests/{id}/reject` | Reject a friend request |
| DELETE | `/v1/friends/{id}` | Remove a friend |

## List Friends

```
GET /v1/friends
```

Returns a list of accepted friends with basic profile info.

**Response (200):**

```json
{
  "success": true,
  "data": [
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane@example.com",
      "avatar": "...",
      "friends_since": "2026-03-15T12:00:00Z"
    }
  ]
}
```

## List Requests

```
GET /v1/friends/requests
```

Returns pending incoming and outgoing friend requests.

| Parameter | Type | Description |
|-----------|------|-------------|
| `direction` | string | `incoming` or `outgoing` |

## Send Request

```
POST /v1/friends/requests
```

| Field | Type | Rules |
|-------|------|-------|
| `user_id` | integer | Required. User to befriend |

## Accept / Reject

```
PUT /v1/friends/requests/{id}/accept
PUT /v1/friends/requests/{id}/reject
```

No request body needed. The `{id}` is the friend request ID.

## Remove Friend

```
DELETE /v1/friends/{id}
```

Removes the friendship. The other user can still send a new request.
