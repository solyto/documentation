---
title: Todos
description: Task management with tags, due dates, and one-line creation.
---

The Todos feature is a full task manager. It supports tags, due dates, priorities, and a quick one-line creation syntax so you can add tasks without opening a form.

## Creating todos

### Standard form

Click the **+** button to open the todo form. Fill in the title, due date, tags, and priority.

### One-line creation

You can create todos using a short command syntax directly from the input field:

```
Buy groceries #shopping !2 due:tomorrow
```

| Syntax | Meaning |
|--------|---------|
| `#tag` | Assign a tag |
| `!1` / `!2` / `!3` | Priority (1 = high, 3 = low) |
| `due:tomorrow` | Due date (also accepts `today`, `monday`, `2026-06-01`) |

### Quick Add

The floating Quick Add button (bottom right) lets you create a todo from anywhere in the app without navigating to the Todos section.

## Tags

Tags help you organize and filter todos. You can hide entire tag groups — for example, hide your `work` todos on weekends. Tag visibility is configurable in **Settings → Todos**.

## Filtering and sorting

- Filter by tag, due date range, or priority
- Sort by due date, creation date, or priority
- Toggle between list and compact views

## Recurring todos

Todos can be set to repeat on a schedule (daily, weekly, monthly, or custom). When you complete a recurring todo, the next occurrence is automatically created.
