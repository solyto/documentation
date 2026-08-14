---
title: AI Features
description: How AI is used in solyto — recommendations for your libraries.
---

solyto uses AI in a few focused places, always on-demand and never for training on your data.

## What AI does

- **Library recommendations** — the [Music](/features/libraries/music/) and [Book](/features/libraries/books/) libraries can recommend entries based on your collection ("A favorite", "Something I haven't seen before", "Something random", "Something new")
- **Quick Add detection** — the [Quick Add](/dashboard/quick-add/) feature detects content types from pasted text/URLs

## How it's powered

AI requests go through the solyto backend (an OpenAI-compatible API). Nothing is sent until you trigger a recommendation or detection, and your data is never used to train models.

## Configuration

The AI backend is configured server-side. When self-hosting, you can point it at your own OpenAI-compatible endpoint:

| Variable | Description |
|----------|-------------|
| `AI_API_KEY` | API key for the AI service |
| `AI_BASE_URL` | API endpoint URL |
| `AI_MODEL` | Default model |

See [Self-Hosting Configuration](/self-hosting/configuration/) for the full list of variables.
