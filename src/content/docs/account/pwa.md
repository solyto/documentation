---
title: Install as App (PWA)
description: Install solyto as a standalone app on desktop and mobile.
---

solyto is a Progressive Web App (PWA). This means you can install it on your device and use it like a native app — with its own window, no browser toolbar, and an icon on your home screen or taskbar.

## How to install

### From Settings

1. Go to **Settings → App**
2. Click **Install App**
3. Confirm the installation prompt

### From the browser

Most browsers show an install prompt automatically when you visit solyto. Look for the install icon in the address bar or browser menu.

### Desktop (Chrome / Edge)

1. Visit your solyto instance in Chrome or Edge
2. Click the install icon in the address bar (or **Menu → Install solyto**)
3. The app opens in its own window

### Mobile (Chrome / Safari)

**Android (Chrome):**
1. Visit your solyto instance
2. Tap the browser menu (three dots)
3. Tap **Add to Home Screen** or **Install App**

**iOS (Safari):**
1. Visit your solyto instance
2. Tap the **Share** button
3. Tap **Add to Home Screen**

## Standalone mode

When installed, solyto runs in standalone mode — no browser address bar, no tabs, no browser UI. It looks and feels like a native app.

## Offline support

solyto registers a service worker that caches the app shell. Pages you've visited are available offline. Data changes require a connection to sync back to the server.

## Updating

PWA updates are fetched automatically when you open the app. If an update is available, it's applied on the next launch. No manual action needed.
