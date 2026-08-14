---
title: Fonctionnalités AI
description: Comment l'AI est utilisée dans solyto — recommandations pour vos bibliothèques.
---

solyto utilise l'AI à quelques endroits ciblés, toujours à la demande et jamais pour entraîner des modèles sur vos données.

## Ce que fait l'AI

- **Recommandations de bibliothèque** — les bibliothèques [Musique](/features/libraries/music/) et [Livres](/features/libraries/books/) peuvent recommander des entrées en fonction de votre collection (« Un favori », « Quelque chose que je n'ai jamais vu », « Quelque chose au hasard », « Quelque chose de nouveau »)
- **Détection dans l'Ajout rapide** — la fonctionnalité [Ajout rapide](/dashboard/quick-add/) détecte les types de contenu à partir du texte ou des URL collés

## Comment ça fonctionne

Les requêtes AI passent par le backend de solyto (une API compatible OpenAI). Rien n'est envoyé tant que vous ne déclenchez pas une recommandation ou une détection, et vos données ne sont jamais utilisées pour entraîner des modèles.

## Configuration

Le backend AI est configuré côté serveur. Si vous vous auto-hébergez, vous pouvez le pointer vers votre propre point de terminaison compatible OpenAI :

| Variable | Description |
|----------|-------------|
| `AI_API_KEY` | Clé API pour le service AI |
| `AI_BASE_URL` | URL du point de terminaison de l'API |
| `AI_MODEL` | Modèle par défaut |

Consultez [Configuration de l'auto-hébergement](/self-hosting/configuration/) pour la liste complète des variables.
