---
title: Feeds API
description: RSS/Atom feed subscriptions and items.
---

All endpoints require authentication. Base path: `/api/v1/feeds`.

## Subscriptions

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/feeds/subscriptions` | List subscribed feeds |
| POST | `/v1/feeds/subscriptions` | Subscribe to a feed |
| DELETE | `/v1/feeds/subscriptions/{id}` | Unsubscribe from a feed |

## Feed Items

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/feeds/items` | List feed items (all subscriptions) |
| PUT | `/v1/feeds/items/{id}/read` | Mark item as read |
| PUT | `/v1/feeds/items/{id}/bookmark` | Bookmark an item |

## Discovery & Testing

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/feeds/test` | Test if a URL is a valid feed |
| GET | `/v1/feeds/search` | Search for feeds by keyword |
| GET | `/v1/feeds/available` | List available feeds from friends |

## Subscribe

```
POST /v1/feeds/subscriptions
```

| Field | Type | Rules |
|-------|------|-------|
| `url` | string | Required. RSS/Atom feed URL |
| `category` | string | Optional. Group name |

## List Items

```
GET /v1/feeds/items
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `subscription_id` | integer | Filter by subscription |
| `read` | boolean | Filter by read status |
| `bookmarked` | boolean | Filter bookmarks only |
| `search` | string | Search in title/content |
| `per_page` | integer | Items per page |
| `since` | datetime | Items published after date |

## Test Feed

```
POST /v1/feeds/test
```

| Field | Type | Rules |
|-------|------|-------|
| `url` | string | Required. URL to test |

Returns feed metadata (title, description, item count) without subscribing.

## Search Feeds

```
GET /v1/feeds/search?q=keyword
```

Searches for feeds matching the given keyword.

## Friends' Feeds

```
GET /v1/feeds/available
```

Lists feed URLs shared by friends who have made their feeds public.
