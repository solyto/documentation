---
title: Finances
description: Track your budget and net worth over time.
---

The Finances feature helps you track your day-to-day budget and your overall net worth over time. It is split into two sub-sections: **Budget** for tracking income and expenses, and **Wealth** for tracking assets, liabilities, and your total net worth over time.

Both sub-sections are accessible from the Finances hub, and each has its own dedicated route. No external integrations or bank connections are needed — all data is entered manually by you, keeping everything private.

## Budget

Track your income and expenses with individual entries. The Budget view shows you what came in and what went out, broken down by type and date range. It's designed for quick, daily tracking — no complex setup required.

### Entries

Each budget entry includes:

- **Title** — a description of the income or expense
- **Type** — income or expense
- **Value** — the amount
- **Date** — when it occurred

Create entries as you earn or spend. Over time, the Budget view builds a clear picture of your cash flow. You can add entries one at a time or batch them for efficiency.

You can also edit or delete existing entries if you make a mistake or need to update a value. The Budget view updates totals in real time as you make changes.

### Viewing totals

The Budget view summarizes your entries with totals and breakdowns:

- View totals by type (income vs. expense) for any date range
- See a monthly breakdown of what came in and went out
- Track your spending patterns over time
- Compare income against expenses to see your monthly surplus or deficit

The totals view helps you answer questions like "how much did I spend this month?" and "is my income keeping up with my expenses?" at a glance.

## Wealth

Track your net worth by logging the value of your assets and liabilities over time. Wealth is separate from Budget — it focuses on your overall financial position rather than day-to-day cash flow.

Wealth gives you a long-term view: are you building wealth over months and years, or is your net worth declining?

### Wealth fields

Create named fields for each component of your net worth:

- **Assets** — bank accounts, investments, real estate, savings, retirement funds, etc.
- **Liabilities** — debts, loans, mortgages, credit card balances, etc.

Each field has a name and a type (asset or liability). You can create as many fields as you need to represent your full financial picture. Add or remove fields at any time as your financial situation changes.

### Logging values

For each wealth field, log its current value on a given date. Over time, this builds a history of how each field has changed. You don't need to log every day — just update values periodically when your balances change.

To log a value, open a wealth field and enter the current amount. solyto timestamps the entry and plots it on the historical chart.

### Historical chart

solyto shows a chart of your **total net worth** over time — the sum of all assets minus all liabilities. This gives you a clear picture of your financial trajectory and helps you see whether your net worth is growing, shrinking, or holding steady.

The chart updates automatically as you log new values. You can hover over data points to see exact numbers for each date.

You can also view individual field histories to see how specific assets or liabilities have changed over time.

## Routes

| Route | Description |
|-------|-------------|
| `/finances` | Finances hub with overview and navigation |
| `/finances/wealth` | Wealth tracking with fields, value logging, and chart |
| `/finances/budget` | Budget management with income and expense entries |

## Exporting

Both Budget and Wealth data export as `.csv` files, compatible with any spreadsheet tool like Excel, Google Sheets, or LibreOffice Calc. See [Exporting Data](/integrations/exporting/).
