---
title: Check In
description: Track your mood, health, and habits daily with 12 configurable trackers.
---

The Check In feature is a daily tracking tool built into solyto. It provides 12 configurable trackers — most on a 1–5 scale — for recording your mood, health metrics, and habits every day. Over time, it builds a personal log with trend charts, averages, and statistics you can look back on to spot patterns in your wellbeing.

## Trackers

Check In includes 12 trackers, all rated on a 1–5 scale unless otherwise noted. On the scale, 1 represents the low end and 5 the high end:

| Tracker | Scale | Description |
|---------|-------|-------------|
| **Mood** | 1–5 | Overall mood for the day |
| **Sleep** | 1–5 | Quality of sleep |
| **Dreams** | 1–5 | Whether you dreamed and how vividly |
| **Food Quality** | 1–5 | How healthy your food was |
| **Food Amount** | 1–5 | How much you ate (1 = too little, 5 = too much) |
| **Water** | 1–5 | How much water you drank |
| **Sports** | Binary | Whether you exercised — if yes, select a sport type |
| **Work** | 1–5 | Productivity or work satisfaction |
| **Menstruation** | 1–5 | Related tracking |
| **Alcohol** | 1–5 | Alcohol consumption |
| **Smoking** | 1–5 | Smoking intake |
| **Social Life** | 1–5 | Social interaction quality |

### Sport types

When you mark the Sports tracker as active, you can select which type of exercise you did:

- Gym
- Cycling
- Hiking
- Walking
- Swimming
- Yoga

## Customize trackers

Not every tracker is relevant to everyone. In **Settings → Check In**, you can:

- **Enable or disable** individual trackers — only the ones you enable appear on the daily entry form
- **Customize sport types** — choose which exercise types you want to track

This keeps your daily check-in focused on what matters to you.

## Daily entry

Each day, fill in your trackers via the check-in form. The form only shows your enabled trackers, keeping it quick to complete. You can go back and edit any past entry — just navigate to the date and update the values.

A daily check-in typically takes less than a minute once you're used to it.

## History

Browse your past entries in a **calendar view**:

- See which days have entries at a glance
- Click a day to view or edit its data
- Navigate by month to browse your history

## Trends

The Trends page shows statistics and charts over time:

- **Averages** — see your average score for each tracker over a given period
- **Trend charts** — line charts showing how each metric has changed over time
- **Date range selection** — zoom in on specific periods

Trends help you spot patterns — for example, whether your sleep quality correlates with your mood, or whether exercising more improves your overall wellbeing scores.

The Trends page is filterable by date range, so you can compare different periods (this month vs. last month, for example).

## Dashboard widget

The Check In widget appears on your [dashboard](/dashboard/overview/), showing your latest entry and a quick link to fill in today's check-in. If you haven't checked in yet today, the widget prompts you to do so.

The widget gives you an at-a-glance view of how today is going compared to your averages.

## Reminders

Set up check-in reminders to make daily tracking a habit:

- **Telegram** — receive a daily reminder message via the Telegram bot
- **Push notifications** — browser push notification at your chosen time

See [Notifications](/customization/notifications/) and [Telegram](/integrations/telegram/) for setup.

## Routes

| Route | Description |
|-------|-------------|
| `/check-in` | Today's check-in entry |
| `/check-in/date/[date]` | Check-in for a specific date |
| `/check-in/history` | Calendar overview of past entries |
| `/check-in/trends` | Statistics and trend charts |

## Exporting

Check-in data exports as `.csv`, compatible with any spreadsheet tool. See [Exporting Data](/integrations/exporting/).
