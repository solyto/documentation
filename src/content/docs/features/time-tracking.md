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

1. **POST /start** — creates a running time entry (timer starts now)
2. **POST /stop** — ends the running entry and calculates the duration

The timer is accessible from anywhere in the app, so you don't need to stay on the Time Tracking page. Start a timer from the dashboard and stop it when you're done.

## Pomodoro timer

The Pomodoro timer is built into solyto's time tracking:

- **25-minute focus sessions** — work without interruptions
- **5-minute breaks** — short rest between sessions
- **Longer break** — after four consecutive sessions, take a longer break
- **Configurable durations** — customize session and break lengths in **Settings → Time Tracking**

The active Pomodoro session is shown on the [dashboard](/dashboard/overview/), so you always know where you are in your focus cycle. You can start, pause, and stop a Pomodoro session from anywhere in the app.

## Statistics

View your logged time from multiple angles:

- **By project** — see total time per project
- **By category** — aggregated time across projects in a category
- **By date range** — filter to a specific day, week, or month
- **Totals** — daily, weekly, and monthly totals at a glance

Use statistics to understand where your time goes and adjust your habits. The statistics view is filterable by date range so you can focus on specific periods.

## Dashboard widget

An active timer is shown on the [dashboard](/dashboard/overview/), displaying:

- The running timer with elapsed time
- The associated project and description
- Quick controls to pause or stop

This gives you visibility into your current session without navigating away from your work.

The widget also shows the Pomodoro timer when active, so you can track focus sessions from the dashboard.

## Routes

| Route | Description |
|-------|-------------|
| `/time-tracking` | Overview of all projects and recent entries |
| `/time-tracking/[id]` | Project detail with entries and statistics |

## Exporting

Time tracking data exports as `.csv` in a standard timesheet format, compatible with spreadsheet tools and invoicing software. The export includes all time entries with project, description, start time, end time, and duration columns.

See [Exporting Data](/integrations/exporting/).
