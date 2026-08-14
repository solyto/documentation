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
4. Submit

For bugs, include steps to reproduce the issue, what you expected to happen, and what actually happened. For features, describe the problem you're trying to solve.

## Voting

Every user can vote on existing requests. Voting helps prioritize what gets built next. Click the upvote button on any request to add your vote. You can remove your vote at any time.

Requests with more votes appear higher in the list.

## Commenting

Leave comments on any request to add context, share workarounds, or discuss the idea with others. Comments are visible to all users.

## Request statuses

Requests move through statuses as they're reviewed and implemented:

| Status | Meaning |
|--------|---------|
| Open | Newly submitted, awaiting review |
| Planned | Accepted and scheduled for development |
| In Progress | Currently being worked on |
| Completed | Implemented and shipped |
| Declined | Not planned — reason given in comments |

## Disabling Dev Requests

If you self-host and don't want to show the Dev Requests section, set the environment variable:

```
PUBLIC_DISABLE_DEV_REQUESTS=true
```

This hides the Dev Requests link from the sidebar and disables the route entirely. See [Configuration](/self-hosting/configuration/) for more details.
