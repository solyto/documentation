---
title: Time Tracking
description: Track time on projects with a built-in Pomodoro timer.
---

The Time Tracking feature lets you log time against projects and categories. It includes a built-in Pomodoro timer for focused work sessions, a start/stop timer for real-time tracking, and statistics showing how you spend your time across projects and date ranges.

## Projects

Projects are the main organizational unit for time tracking:

- **Create** a project with a title and description
- **Edit** project details at any time
- **Delete** projects you no longer need
- **Assign to categories** — group projects by client, type, or any context you want

Each project collects all its time entries in one place, giving you a running total of hours logged. The project detail view shows all entries sorted by date, with the total time at the top.

## Categories

Assign each project to a category for grouping. For example:

- **Client work** — billable projects
- **Personal** — side projects and learning
- **Open source** — community contributions

Categories let you view aggregated statistics across related projects, useful for understanding how you distribute your time.

## Time entries

Log time in two ways. Each time entry includes a description, start/end time (or duration), and project assignment.

### Manual entry

Create a time entry by filling in:

- **Description** — what you worked on
- **Start time** and **End time** — or enter the duration directly
- **Project** — which project the time belongs to

Manual entry is useful for logging time after the fact — for example, filling in yesterday's work or adding time you forgot to track.

You can also edit or delete existing entries to correct mistakes.

### Start/stop timer

Use the built-in timer to track time in real time:

1. Start a timer on a project (optionally with a description) — a live HH:MM:SS elapsed display appears
2. Stop the timer when you're done — the duration is recorded as an entry

The running timer is persisted, so it survives navigation — start a timer on the dashboard and stop it later from anywhere in the app.

## Pomodoro timer

The Pomodoro timer is built into solyto's time tracking:

- **25-minute focus sessions** — work without interruptions
- **5-minute short breaks** — rest between sessions
- **15-minute long break** — after every 4 sessions
- **Cycle dots** — shows your position in the current 4-session cycle
- **Beep** — an audible cue at the end of each phase

You can start, pause, resume, skip, and reset the Pomodoro from the dashboard widget.

## Statistics

View your logged time from multiple angles:

- **Date range** — pick From/To dates
- **Filter by category** — aggregate across the projects in a category
- **Total time** — the sum over your selection
- **Doughnut by project** — how time is split between projects
- **Bar chart by category** — time distribution by category

Use statistics to understand where your time goes and adjust your habits.

## Dashboard widget

The [dashboard](/dashboard/overview/) Time Tracking widget shows:

- Your total time for the current week
- A per-project breakdown with colored bars
- The Pomodoro timer, when active

This gives you visibility into your current session without navigating away from your work.

## Routes

| Route | Description |
|-------|-------------|
| `/time-tracking` | Overview of all projects and recent entries |
| `/time-tracking/[id]` | Project detail with entries and statistics |

## Exporting

Time tracking data exports as `.csv` in a standard timesheet format, compatible with spreadsheet tools and invoicing software. The export includes all time entries with project, description, start time, end time, and duration columns.

See [Exporting Data](/integrations/exporting/).
