---
title: Clipboard
description: A cross-device clipboard relay for text and images.
---

The Clipboard feature is a cross-device clipboard relay built into solyto. Copy something on your phone, paste it on your desktop — all through your private solyto account, without sending data through a third-party service. It supports both text and images.

## Text clipboard

Paste or type text into the Clipboard on one device. It becomes immediately available on all your other devices logged into the same solyto account. Use it for links, code snippets, addresses, notes — anything text-based.

Each text entry is timestamped so you can tell which is which, and has a **copy** button to put it back on your device's clipboard.

## Image clipboard

Paste or upload images into the Clipboard. Like text, images are accessible from all your devices. This works with screenshots, photos, or any image file. Use it to quickly move a screenshot from your phone to your computer.

Each image entry shows the image with a **copy** button that puts it back on your device's clipboard as an image (PNG).

## How it works

The clipboard acts as a relay between your devices:

1. Open solyto on one device and paste your content (text or image)
2. Open solyto on another device — the content is there
3. Copy it to your local clipboard and use it

There is no limit on the number of devices you can use. Any device with a browser and access to your solyto account can send and receive clipboard entries.

Content is stored in your solyto account and synced instantly. It is never processed, analyzed, or read by solyto.

You can have multiple clipboard entries at once — they stack as a list rather than replacing each other. This means you can stage several items before switching devices, then pick them up one by one on the other end.

## Use cases

- **Copy a link from your phone** to paste on your desktop browser
- **Move a code snippet** between your laptop and desktop
- **Share text between a browser and a terminal** on different machines
- **Transfer a screenshot** from your phone to your computer for editing
- **Send a phone number** from your mobile to your desktop for use in a web form

## Privacy

Clipboard content is stored in your solyto account — on solyto.app, or on your own server if self-hosting. It is never processed or read by solyto. Your clipboard data stays private and encrypted in transit.

## Automatic cleanup

Clipboard entries are deleted automatically after **24 hours** (a daily cleanup job runs at 02:00), so sensitive content doesn't linger. You can delete entries manually before that if you want them gone sooner.

## Deleting entries

Every entry has a **delete** button. Deleted entries are removed immediately and cannot be recovered.
