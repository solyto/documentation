---
title: Feeds
description: An RSS/Atom news reader with keyword filtering and a browse directory.
---

The Feeds feature is a full RSS/Atom news reader built into solyto. Subscribe to any feed URL, read articles in multiple layouts, filter by keywords, and discover new feeds through a browse directory and your friends — all without leaving the app.

## Adding feeds

Paste any RSS or Atom feed URL to subscribe. solyto fetches new items in the background — a sync job runs hourly to pull in the latest articles from all your subscriptions. You don't need to refresh manually. New items appear automatically in your reading list.

### Testing feeds

Before subscribing, you can **test a feed URL** to fetch and preview its content ("Looks right?"). This prevents adding broken feeds to your list and lets you confirm the feed has the content you expect.

## Reading views

Three layouts are available for reading your feeds:

| View | Description |
|------|-------------|
| **Compact** | Minimal layout showing title and metadata only — good for scanning many items |
| **Comfortable** | Balanced layout with a content preview — good for skimming |
| **Card** | Full article cards with images and formatting — good for reading in-app |

Switch between views using the layout toggle. Your choice is remembered.

## Filtering

Each feed subscription supports **keyword filtering** to control what appears in your reading list:

- **Whitelist** — only show items matching any of these keywords
- **Blacklist** — hide items matching any of these keywords

Keywords are entered as comma-separated chips. This is useful for filtering out topics you don't care about from high-volume feeds. Filters are applied per subscription, so you can have different rules for different feeds.

## Mark as read

Manage your reading queue:

- **Individual** — mark a single item as read after you've finished it
- **Bulk** — mark all items in a feed as read to clear your queue

Unread items are shown first so you can focus on new content.

## Save to Library

Any feed item can be saved to your [Link Library](/features/libraries/links/) with one click, so you can keep articles and their content in solyto long after the feed item expires.

## Open original

Every feed item includes a link to **open the original article** in a new browser tab, so you can read the full post on the source website when the feed excerpt isn't enough.

## Feed subscriptions

Manage your subscriptions with full CRUD operations:

- **Create** — subscribe to a new feed by pasting its URL
- **Read** — view feed items and settings
- **Update** — change the feed name, URL, or filters
- **Delete** — unsubscribe from a feed

Each subscription shows the feed title and the number of unread items.

## Browse feeds

A discoverable feed directory with search, pagination, and subscriber counts. You can subscribe to a feed directly from the browse view. Duplicate subscriptions are caught automatically.

## Friends' feeds

See what feeds your solyto friends are subscribed to, with friend names shown. Discover new sources through your network and subscribe with one click. This is a social way to expand your reading list.

## Exporting

Your feed subscriptions can be exported as an `.opml` file, which can be imported into any feed reader (Feedly, NewsBlur, Inoreader, etc.). See [Exporting Data](/integrations/exporting/).
