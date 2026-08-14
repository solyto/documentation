---
title: Clipboard
description: A cross-device clipboard relay for text and images.
---

The Clipboard feature is a cross-device clipboard relay built into solyto. Copy something on your phone, paste it on your desktop — all through your private solyto account, without sending data through a third-party service. It supports both text and images.

## Text clipboard

Paste or type text into the Clipboard on one device. It becomes immediately available on all your other devices logged into the same solyto account. Use it for links, code snippets, addresses, notes — anything text-based.

There is no size limit on text entries — paste entire documents if needed. Each text entry is timestamped so you can tell which is which.

## Image clipboard

Paste or upload images into the Clipboard. Like text, images are accessible from all your devices. This works with screenshots, photos, or any image file. Use it to quickly move a screenshot from your phone to your computer.

Images are stored at full resolution and can be downloaded from any device. Common formats (PNG, JPG, GIF, WebP) are all supported.

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

Entries are auto-deleted after a configurable time period to keep your clipboard clean without manual effort. You control the retention period in Settings.

Because clipboard data never leaves your solyto account, it's safe for sensitive content like passwords, tokens, or private messages. Nothing is sent to third-party servers or analyzed for any purpose.

## Deleting entries

Remove clipboard entries manually when you no longer need them. Select one or more entries and delete them to free up space and keep your clipboard clean. Combined with auto-deletion, this keeps your clipboard tidy over time.

Deleted entries are removed immediately and cannot be recovered.
