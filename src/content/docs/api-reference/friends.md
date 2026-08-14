---
title: Friends API
description: Friend requests and friend list management.
---

All endpoints require authentication. Base path: `/api/v1/friends`.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/friends` | List accepted friends |
| GET | `/v1/friends/requests` | List pending friend requests (incoming and outgoing) |
| POST | `/v1/friends/requests` | Send a friend request (`receiver_id`) |
| PUT | `/v1/friends/requests/{friendRequest}/accept` | Accept a friend request (receiver only) |
| PUT | `/v1/friends/requests/{friendRequest}/reject` | Reject a friend request (receiver only) |

## List Requests

```
GET /v1/friends/requests
```

Returns pending incoming and outgoing friend requests with their statuses (pending/accepted/rejected).

## Send Request

```
POST /v1/friends/requests
```

| Field | Type | Rules |
|-------|------|-------|
| `receiver_id` | string | Required. ID of the user to befriend |

## Accept / Reject

```
PUT /v1/friends/requests/{friendRequest}/accept
PUT /v1/friends/requests/{friendRequest}/reject
```

Only the receiver can accept or reject a request. No request body needed.
