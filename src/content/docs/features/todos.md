---
title: Todos
description: Task management with workspaces, tags, smart scoring, and multiple views.
---

The Todos feature is a full task manager built into solyto. It supports workspaces, categories, tags, a smart scoring system, and multiple views — so you can organize tasks the way that works for you. A one-line creation syntax lets you add todos without opening a form.

## Creating todos

### Standard form

Click the **+** button to open the todo form. Fill in the fields you need — title is the only required one:

- **Title** — the task name
- **Description** — optional details or context
- **Link** — attach a URL related to the task
- **Priority** — low, medium, or high
- **Status** — backlog, pending, in-progress, waiting, almost-done
- **Effort** — low, medium, or high
- **Progress** — a slider from 0 to 100
- **Due date** — when the task should be finished
- **Category** — assign to a category
- **Tags** — one or more colored tags

### One-line creation

Type directly into the input field using a short command syntax:

```
Buy groceries #shopping !2 due:tomorrow
```

| Syntax | Meaning |
|--------|---------|
| `#tag` | Assign a tag |
| `!1` / `!2` / `!3` | Priority (1 = high, 2 = medium, 3 = low) |
| `due:tomorrow` | Due date — also accepts `today`, weekday names (`monday`), or a full date (`2026-06-01`) |

### Quick Add

The floating Quick Add button (bottom right) lets you create a todo from anywhere in the app. See [Quick Add](/dashboard/quick-add/) for details.

## Todo properties

Every todo has the following properties:

| Property | Values | Description |
|----------|--------|-------------|
| Title | Free text | The task name (required) |
| Description | Free text | Optional details |
| Link | URL | Attach a related link |
| Priority | Low, Medium, High | How urgent the task is |
| Status | Backlog, Pending, In-progress, Waiting, Almost-done | Where the task is in your workflow |
| Effort | Low, Medium, High | How much work the task requires |
| Progress | 0–100 | Percentage complete |
| Due date | Date | Target completion date |
| Category | Assigned category | Groups todos together |
| Tags | One or more tags | Colored labels for filtering |

## Recurring todos

Todos can repeat on a schedule. When you complete a recurring todo, the next occurrence is created automatically.

| Setting | Options |
|---------|---------|
| Frequency | Daily, Weekly, Monthly, Yearly |
| Interval | Every N days/weeks/months/years |
| End date | Optional date to stop recurring |

For example, you can set a todo to repeat every 2 weeks on Monday, ending on December 31.

## Subtasks

Any todo can have subtasks:

- **Add** subtasks to break a todo into smaller steps
- **Complete** subtasks individually — they don't affect the parent todo's status
- **Delete** subtasks you no longer need

Subtasks are shown inline under the parent todo.

## Workspaces

Workspaces let you group categories together. This is useful for separating different areas of your life — for example, a "Work" workspace and a "Personal" workspace.

### Workspace features

- **Group categories** — attach categories to a workspace
- **Set default workspace** — new todos default to this workspace's categories
- **Attach/detach categories** — move categories between workspaces at any time

### Hide It

Each workspace has a **Hide It** toggle. When enabled, todos assigned to that workspace's categories are hidden from the main Todos view. This lets you focus on one workspace at a time without deleting or archiving tasks from other areas.

## Categories

Categories organize todos into groups. Assign a category when creating or editing a todo. Categories can be assigned to workspaces for further organization.

## Tags

Tags are a global system shared across todos and libraries. Each tag has a color, making it easy to spot related items at a glance. Add tags to any todo for flexible, cross-category organization.

## Views

solyto offers four views for your todos:

| View | Description |
|------|-------------|
| **List** | Default flat list, sortable by any column |
| **Kanban** | Columns based on status — drag todos between columns to update status |
| **Overview** | Compact summary showing key fields at a glance |
| **Card** | Detailed cards with all properties visible |

Switch between views using the view toggle at the top of the Todos page.

## Smart Score

Every todo gets an automatic **Smart Score** that reflects how relevant or urgent it is. You can sort your todo list by Smart Score to see what needs attention first.

The score is calculated from:

| Factor | Points |
|--------|--------|
| Priority | 0–100 (based on low/medium/high) |
| Effort penalty | +0 to +50 (higher effort = higher score) |
| Overdue | +100 |
| Due today | +50 |
| Due tomorrow | +25 |
| Age > 30 days | +50 |

Higher scores appear first when sorting by Smart Score, so overdue high-priority tasks with high effort float to the top.

## Filtering

Use filters to narrow down your todo list:

- **Status** — show only backlog, pending, in-progress, etc.
- **Priority** — show only high, medium, or low priority
- **Due date** — today, tomorrow, this week, overdue
- **Effort** — low, medium, high
- **Category** — show todos in a specific category
- **Tag** — show todos with a specific tag
- **Workspace** — show todos in a specific workspace

Combine multiple filters for precise control over what you see.
