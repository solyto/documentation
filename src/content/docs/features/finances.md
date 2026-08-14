---
title: Finances
description: Track your budget and net worth over time.
---

The Finances feature helps you track your day-to-day budget and your overall net worth over time. It is split into two sub-sections: **Budget** for tracking income and expenses, and **Wealth** for tracking assets, liabilities, and your total net worth over time.

Both sub-sections are accessible from the Finances hub, and each has its own dedicated route. No external integrations or bank connections are needed — all data is entered manually by you, keeping everything private.

## Overview

The Finances overview shows two tappable cards — **Budget** and **Wealth** — with their totals, plus three charts:

- **Income vs Expenses** — a bar chart comparing the two
- **Wealth Distribution** — a doughnut of your current wealth field values
- **Wealth Trend** — a 12-month line chart of your total net worth

## Budget

Track your income and expenses with individual entries.

### Entries

Each budget entry has:

- **Title** — a description of the income or expense
- **Type** — income or expense
- **Value** — the amount

Add entries as you earn or spend. Edit or delete entries at any time.

### Viewing totals

The Budget view summarizes your entries:

- A proportional expense-to-income progress bar
- A **Total** card with the running balance (`+` for surplus, `-` for deficit)
- Separate **Income** and **Expenses** sections with their subtotals

## Wealth

Track your net worth by logging the value of your assets and liabilities over time. Wealth is separate from Budget — it focuses on your overall financial position rather than day-to-day cash flow.

### Wealth fields

Create named fields for each component of your net worth:

- **Assets** — bank accounts, investments, real estate, savings, retirement funds, etc.
- **Liabilities** — debts, loans, mortgages, credit card balances, etc.

Each field is just a title — add or remove fields at any time as your financial situation changes. Fields are colored green when positive and red when negative.

### Logging values

Each wealth field keeps a **value history**. Edit the current value inline and solyto records a new timestamped value. Over time this builds a history of how each field has changed. You don't need to log every day — just update values periodically when your balances change.

### Historical chart

The Wealth page shows a doughnut of current values and a **Total** card. Toggle **Show History** to reveal:

- A 12-month **total net worth** line chart
- A **stacked area chart** of each field's value over the same period

This gives you a clear picture of your financial trajectory and helps you see whether your net worth is growing, shrinking, or holding steady.

## Routes

| Route | Description |
|-------|-------------|
| `/finances` | Finances hub with overview and navigation |
| `/finances/wealth` | Wealth tracking with fields, value logging, and chart |
| `/finances/budget` | Budget management with income and expense entries |

## Exporting

Both Budget and Wealth data export as `.csv` files, compatible with any spreadsheet tool like Excel, Google Sheets, or LibreOffice Calc. See [Exporting Data](/integrations/exporting/).
