---
title: Game Library
description: Track video games and board games with Steam and BoardGameGeek import.
---

The Game Library tracks both video games and board games. Keep track of what you own, what you're playing, what you've completed, and what you want to play next.

## Adding games

Add games to your library in two ways:

- **Manual entry** — fill in the details yourself
- **Import** — bring in an existing collection from Steam or BoardGameGeek

### Import from Steam

Connect your Steam account to import your entire Steam library. solyto pulls in game titles, playtime, and cover art automatically.

### Import from BoardGameGeek

Enter your BoardGameGeek username to import your BGG collection. Board game details, including player counts and playtime, are imported automatically.

See [Importing Data](/integrations/importing/) for step-by-step instructions.

## Entry fields

Each game entry includes:

| Field | Description |
|-------|-------------|
| **title** | Game title |
| **rating** | 1–5 stars |
| **publication_year** | Year the game was released |
| **platform** | PC, PlayStation, Xbox, Nintendo, mobile, board game |
| **developer** | Developer studio or designer |
| **publisher** | Publisher name |
| **playtime_hours** | Hours played |
| **completed** | Whether you've finished the game |
| **cover_image** | Game cover or box art |
| **link** | URL (Steam, BGG, store page) |
| **wishlist** | Mark as want-to-play |
| **started_at** | Date you started playing |
| **finished_at** | Date you finished playing |
| **tags** | Colored tags for filtering |
| **genres** | One or more game genres |
| **notes** | Free-text notes |

## Platforms

Games can be tagged with a platform:

- **PC** — Windows, Linux, Mac
- **PlayStation** — PS4, PS5
- **Xbox** — Xbox One, Xbox Series
- **Nintendo** — Switch, 3DS
- **Mobile** — iOS, Android
- **Board game** — physical tabletop games

Filter your library by platform to see all your games for a specific system.

## Game genres

The game library has its own genre system. Add genres that match your collection — RPG, strategy, FPS, co-op, deck builder, or anything else. Assign multiple genres to any game.

Manage genres from the library settings. You can add, rename, and remove genres at any time.

## Playtime tracking

Log your playtime in hours for each game. Playtime is displayed in the game list and on each game's detail page. Track how much time you've invested across your collection.

## Completion status

Mark games as **completed** when you've finished them. This boolean field helps you separate games you've beaten from those still in progress or abandoned. Filter by completion status to see what's left to play.

## Views and sorting

Browse your game collection and sort by:

- Title (A–Z)
- Rating
- Year
- Playtime
- Platform
- Date added

Filter by platform, genre, tags, wishlist, or completion status.

## Exporting

Export your entire game library as `.csv`. The file includes all fields — title, platform, rating, playtime, genres, tags, and notes. See [Exporting Data](/integrations/exporting/).
