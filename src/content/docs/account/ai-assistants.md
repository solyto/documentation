---
title: AI Assistants
description: Create custom AI assistants for personal tasks.
---

AI Assistants let you create custom chat assistants powered by OpenAI, tailored to your personal tasks and workflows.

## How it works

You create assistants with a name, description, and system prompt. Each assistant has its own personality and purpose — a recipe helper, a writing coach, a budget advisor, or anything else you need.

All conversations happen inside solyto. Chat history is saved per assistant so you can pick up where you left off.

## Requirements

AI Assistants require your own **OpenAI API key**. solyto does not provide or proxy AI access.

1. Get an API key from [OpenAI](https://platform.openai.com/api-keys)
2. Go to **Settings → App → AI API Key**
3. Paste your key

Your API key is stored securely and only used to communicate with OpenAI's API directly from the server.

## Creating an assistant

1. Go to **AI Assistants** in the sidebar
2. Click **Create Assistant**
3. Fill in:
   - **Name** — e.g. "Recipe Helper"
   - **Description** — a short note about what it does
   - **System prompt** — instructions that define how the assistant behaves. For example: "You are a cooking assistant. Help users plan meals based on ingredients they have."

The system prompt is the most important part. It determines the assistant's behavior, tone, and expertise.

## Chatting with an assistant

Click on any assistant to open its chat. Messages work like any chat interface — type your question or request and the assistant responds.

Chat history is saved automatically. Each assistant maintains its own separate conversation thread.

## Managing assistants

From the assistants list you can:

- **Edit** — change the name, description, or system prompt
- **Delete** — remove the assistant and all its chat history
- **Duplicate** — create a copy with the same settings

## Privacy

Your API key and conversations are yours:

- solyto does not read, log, or train on your conversations
- The API key is used only to make requests to OpenAI on your behalf
- Chat history is stored in your solyto account, not sent anywhere else
- If you self-host, all data stays on your server

Refer to [OpenAI's privacy policy](https://openai.com/privacy) for how they handle API requests.

## Self-hosting configuration

When self-hosting, you can configure the AI backend:

| Variable | Description | Default |
|----------|-------------|---------|
| `AI_BASE_URL` | API endpoint URL | OpenAI default |
| `AI_MODEL` | Default model to use | `gpt-4o` |

Set the `ai_api_key` Docker secret for the server-side API key storage.
