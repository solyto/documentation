---
title: Feeds API
description: RSS/Atom feed subscriptions and items.
---

All endpoints require authentication. Base path: `/api/v1/feeds`.

## Subscriptions

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/feeds/subscriptions` | List subscribed feeds |
| POST | `/v1/feeds/subscriptions` | Subscribe to a feed (`title`, `url`, `whitelist`, `blacklist`; 409 if duplicate) |
| GET | `/v1/feeds/subscriptions/{feedSubscription}` | Show a subscription |
| PUT | `/v1/feeds/subscriptions/{feedSubscription}` | Update a subscription (title, whitelist, blacklist) |
| DELETE | `/v1/feeds/subscriptions/{feedSubscription}` | Unsubscribe from a feed |

## Feed Items

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/feeds/items` | List feed items (`offset`, `limit` or `all`; returns `has_more` and `feed_counts`) |

## Discovery & Testing

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/feeds/available` | Browse available feeds (offset pagination) |
| GET | `/v1/feeds/search` | Search feeds (`search`, min 2 chars) |
| GET | `/v1/feeds/friends` | Feeds subscribed to by your friends |
| POST | `/v1/feeds/test` | Test a feed URL, returns up to 5 sample items |

## Test Feed

```
POST /v1/feeds/test
```

| Field | Type | Rules |
|-------|------|-------|
| `url` | string | Required. URL to test |

Returns up to 5 sample items so you can verify a feed before subscribing.
