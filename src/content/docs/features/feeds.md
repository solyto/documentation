---
title: Feeds
description: An RSS/Atom news reader with filtering and categories.
---

The Feeds feature is a full RSS/Atom news reader built into solyto. Subscribe to any feed URL, read articles in multiple layouts, filter by keywords, organize subscriptions into categories, and discover new feeds through friends — all without leaving the app.

## Adding feeds

Paste any RSS or Atom feed URL to subscribe. solyto fetches new items in the background — a sync job runs hourly to pull in the latest articles from all your subscriptions. You don't need to refresh manually. New items appear automatically in your reading list.

### Testing feeds

Before subscribing, you can **test a feed URL** to verify it works and preview its content. This prevents adding broken feeds to your list and lets you confirm the feed has the content you expect.

## Reading views

Three layouts are available for reading your feeds:

| View | Description |
|------|-------------|
| **Compact** | Minimal layout showing title and metadata only — good for scanning many items |
| **Comfortable** | Balanced layout with a content preview — good for skimming |
| **Card** | Full article cards with images and formatting — good for reading in-app |

Switch between views using the layout toggle at the top of the Feeds page.

## Filtering

Each feed subscription supports **keyword filtering** to control what appears in your reading list:

- **Whitelist** — only show items containing specific keywords
- **Blacklist** — hide items containing specific keywords

This is useful for filtering out topics you don't care about from high-volume feeds. Filters are applied per subscription, so you can have different rules for different feeds.

## Categories

Organize your feed subscriptions into categories. For example:

- **Tech** — technology blogs and news
- **Design** — design inspiration and tutorials
- **News** — general news sources

Filter your reading view by category to focus on one topic at a time. You can assign a feed to a category when subscribing, or change it later.

## Mark as read

Manage your reading queue:

- **Individual** — mark a single item as read after you've finished it
- **Bulk** — mark all items in a feed or category as read to clear your queue

Unread items are shown first so you can focus on new content. Once marked as read, items move below the unread items.

## Open original

Every feed item includes a link to **open the original article** in a new browser tab, so you can read the full post on the source website when the feed excerpt isn't enough.

## Feed subscriptions

Manage your subscriptions with full CRUD operations:

- **Create** — subscribe to a new feed by pasting its URL
- **Read** — view feed items and settings
- **Update** — change the feed name, category, or filters
- **Delete** — unsubscribe from a feed

Each subscription shows the feed title, the number of unread items, and the last sync time.

## Available feeds discovery

solyto can suggest feeds based on popular sources. Browse available feeds to discover new content to follow without searching externally.

## Friends' feeds

See what feeds your solyto friends are subscribed to. Discover new sources through your network and find interesting content you might have missed. This is a social way to expand your reading list.

## Exporting

Your feed subscriptions can be exported as an `.opml` file, which can be imported into any feed reader (Feedly, NewsBlur, Inoreader, etc.). See [Exporting Data](/integrations/exporting/).
