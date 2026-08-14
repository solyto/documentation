---
title: Dev Requests
description: Submit bug reports and feature requests, vote on ideas.
---

Dev Requests is a built-in feedback board where you can report bugs and suggest features. It's a community-driven way to shape solyto's development.

## Accessing Dev Requests

Navigate to **/dev-requests** from the sidebar or go directly to the page. You'll see a list of all submitted requests sorted by popularity.

## Submitting a request

1. Click **New Request**
2. Choose a type:
   - **Bug** — something is broken or not working as expected
   - **Feature** — an idea for a new feature or improvement
3. Write a clear title and description
4. Set a **priority** (1–5)
5. Optionally attach a **screenshot** and a related URL
6. Submit

For bugs, include steps to reproduce the issue, what you expected to happen, and what actually happened. For features, describe the problem you're trying to solve.

## Voting

Every user can vote on existing requests with up/down arrows. Your vote is tracked, and the score is shown. Voting helps prioritize what gets built next.

## Commenting

Leave comments on any request to add context, share workarounds, or discuss the idea with others. Press **Enter** to submit a comment, and the author is notified.

## Request statuses

Requests are split into **Current Requests** and **Resolved Requests**, and move through statuses:

| Status | Meaning |
|--------|---------|
| Backlog | Newly submitted, awaiting review |
| Pending | Accepted and scheduled for development |
| In Progress | Currently being worked on |
| Completed | Implemented and shipped |
| Cancelled | Not planned — reason given in comments |

## Disabling Dev Requests

If you self-host and don't want to show the Dev Requests section, set the environment variable:

```
PUBLIC_DISABLE_DEV_REQUESTS=true
```

This hides the Dev Requests link from the sidebar and disables the route entirely. See [Configuration](/self-hosting/configuration/) for more details.

## Disabling Dev Requests

If you self-host and don't want to show the Dev Requests section, set the environment variable:

```
PUBLIC_DISABLE_DEV_REQUESTS=true
```

This hides the Dev Requests link from the sidebar and disables the route entirely. See [Configuration](/self-hosting/configuration/) for more details.
