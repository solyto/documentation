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

Not every tracker is relevant to everyone. Open **Settings** (the gear icon) in the Check In navigation to:

- **Enable or disable** individual trackers — only the ones you enable appear on the daily entry form (at least one must stay enabled)
- **Mark trackers as scored** — scored trackers feed into the total score and the dashboard widget (the Sports tracker is always unscored)
- **Pick your sports** — choose up to 5 sport types to track; tap a selected sport, then an unselected one, to swap them

This keeps your daily check-in focused on what matters to you.

## Daily entry

Each day, fill in your trackers via the check-in form. The form only shows your enabled trackers, keeping it quick to complete. You can go back and edit any past entry — just navigate to the date and update the values.

A daily check-in typically takes less than a minute once you're used to it.

## History

Browse your past entries in a **month grid**:

- A day-by-day matrix of tracker icons per day
- Click any cell to quickly edit that tracker's value for the day
- Click the day number to open that day's full view
- Navigate by month to browse your history

### Averages and summaries

The History page also shows per-tracker **averages** plus your overall total, and **Check-in Summaries** — natural-language summaries that describe each day ("good mood, slept well, but drank alcohol") and period summaries for this/last week and this/last month, including your sports counts.

## Trends

The Trends page shows smooth line charts for each active scored tracker (sports excluded), with date ranges of **30 days, 3 months, 6 months, or all**:

Trends help you spot patterns — for example, whether your sleep quality correlates with your mood, or whether exercising more improves your overall wellbeing scores.

## Dashboard widget

The Check In widget appears on your [dashboard](/dashboard/overview/), showing the mean value per scored tracker as color-coded bars plus your overall total score.

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
