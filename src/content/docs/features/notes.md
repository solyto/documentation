---
title: Notes
description: A rich text notebook with folders, tags, and markdown support.
---

The Notes feature (also called Notebook) is a full-featured note-taking tool built into solyto. It uses a rich text editor based on TipTap (ProseMirror), supports hierarchical folder organization, tags, drag-and-drop reordering, image embedding, and right-click context menus — all stored privately in your account.

## Editor

Notes uses [TipTap](https://tiptap.dev/), a ProseMirror-based rich text editor. It supports both WYSIWYG editing and markdown-style shortcuts — type `#` for a heading, `-` for a bullet list, or ``` for a code block. The editor autosaves as you type, so you never lose your work.

### Supported formatting

| Formatting | How to use |
|-----------|------------|
| Headings | H1 through H6 |
| Bold | Bold text |
| Italic | Italic text |
| Strikethrough | Strikethrough text |
| Code | Inline `code` |
| Bullet lists | Unordered lists |
| Numbered lists | Ordered lists |
| Tables | Insert tables with rows and columns |
| Images | Upload from disk, paste a URL, or paste from clipboard |
| Links | Hyperlink any text |
| Code blocks | Fenced code blocks with syntax highlighting |
| Blockquotes | Block-quoted text |
| Horizontal rules | Section dividers |

### Images

Images can be added to notes in three ways:

1. **Upload** — select a file from your device
2. **URL** — paste an image URL
3. **Clipboard** — paste a copied image directly into the editor

Uploaded images are stored in your solyto account and embedded inline in the note.

## Hierarchical categories

Organize notes into a tree of folders and subfolders:

- **Parent and child categories** — create a folder tree as deep as you need
- **Collapsible category tree** — collapse and expand branches; the state is persisted between sessions so your layout is always remembered
- **Drag and drop** — drag a note into a different category to reorganize it instantly
- **Reorder categories** — rearrange the order of categories in the tree

The category tree appears in the sidebar, giving you quick navigation across all your notes. You can also create new subfolders directly from the tree.

Categories support nesting — create top-level folders like "Work" with subfolders like "Projects", "Meetings", and "Notes" underneath.

## Favorites

Mark any note as a **favorite** to pin it for quick access. Favorites appear at the top of the note list regardless of their category, so your most important notes are always one click away.

Toggle the favorite status from the note detail view or the right-click context menu. You can filter the note list to show only favorites.

## Tags

Add one or more tags to any note. Tags are shared across solyto features, so you can use the same tags for notes, todos, and library entries. Each tag has a color for visual identification.

Tags provide a cross-category way to find related notes — for example, tag all project-related notes with "work" regardless of which folder they're in.

## Import

Import notes from files. solyto reads the file contents and creates a new note in your chosen category. Supported formats include plain text and markdown files. This is useful for migrating notes from other apps into solyto.

To import, open a category and click the import button, then select one or more files from your device.

## Exporting

Notes export as a ZIP archive of `.md` (Markdown) files — one file per note. This format is compatible with Obsidian, Notion, and any markdown editor. File names are derived from the note title.

See [Exporting Data](/integrations/exporting/) for details on how to export and what formats are available.

## Context menus

Right-click on any note or category to access context menus with quick actions:

- **Notes** — create, rename, delete, move to another category, add/remove tags, toggle favorite
- **Categories** — create a new subcategory, rename, delete, collapse/expand

Context menus provide a fast way to manage your notes without switching to toolbar buttons.
