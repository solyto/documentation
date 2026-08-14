---
title: Thèmes
description: Personnalisez l'apparence de solyto avec 10 thèmes intégrés.
---

solyto est livré avec 10 thèmes intégrés qui changent l'apparence de toute l'interface — navigation, cartes, boutons, typographie et tous les éléments de l'UI.

## Changer de thème

1. Allez dans **Paramètres → Application**
2. Sélectionnez un thème dans la liste
3. Le changement est **appliqué immédiatement** — aucun rechargement nécessaire

## Thèmes disponibles

| Thème | Description |
|-------|-------------|
| **Default** | Thème clair, épuré et minimaliste. Prend en charge le mode sombre via la préférence du système d'exploitation. |
| **Nord** | Palette de couleurs froides d'inspiration arctique, basée sur le jeu de couleurs [Nord](https://www.nordtheme.com/). Bleus apaisants et gris doux. |
| **Skyrim** | Inspiré de l'interface de The Elder Scrolls V: Skyrim. Tons parchemin et éléments au style fantasy. |
| **Catppuccin Mocha** | Un thème sombre aux tons chauds de la famille [Catppuccin](https://catppuccin.com/). Violets riches et pastels sur fond sombre. |
| **Catppuccin Latte** | La variante claire de Catppuccin. Pastels chauds et couleurs douces sur fond clair. |
| **Gruvbox** | Un thème rétro aux tons chauds et terreux. Basé sur le jeu de couleurs populaire [Gruvbox](https://github.com/morhetz/gruvbox). |
| **Dracula** | Un thème violet sombre basé sur la palette de couleurs [Dracula](https://draculatheme.com/). Contraste élevé avec des couleurs de syntaxe vives. |
| **Terminal** | Un thème monospace, vert sur noir, inspiré des émulateurs de terminal classiques. Minimaliste et esprit hacker. |
| **Paper** | Une apparence chaude et à faible contraste façon papier. Agréable pour les yeux, avec des fonds crème et une typographie subtile. |
| **Atari** | Style rétro exubérant inspiré des premières interfaces Atari. Couleurs vives et esthétique massive. |

## Mode sombre

Le thème **Default** est le seul à prendre en charge le mode sombre. Il bascule automatiquement entre clair et sombre selon la préférence de votre système d'exploitation :

- **macOS :** Réglages Système → Apparence → Clair/Sombre/Auto
- **Windows :** Paramètres → Personnalisation → Couleurs → Choisissez votre mode
- **Linux :** Suit le paramètre de mode sombre de votre environnement de bureau

Lorsque vous sélectionnez un thème autre que Default, le mode sombre n'est pas appliqué — le jeu de couleurs propre au thème est utilisé, quels que soient les réglages du système d'exploitation.

## Fonctionnement des thèmes

Les thèmes sont implémentés sous forme de surcharges de variables CSS. Chaque thème est un fichier CSS autonome chargé depuis `/themes/{id}/{id}.css`, par exemple :

- `/themes/nord/nord.css`
- `/themes/catppuccin-mocha/catppuccin-mocha.css`
- `/themes/gruvbox/gruvbox.css`

Lorsque vous sélectionnez un thème, solyto charge le fichier CSS correspondant et l'applique à la racine du document. Le CSS surcharge les variables par défaut pour les couleurs, les arrière-plans, les bordures, les ombres et la typographie. Comme les thèmes utilisent des variables CSS, le changement est instantané, sans rechargement de page.

## Détails des thèmes

### Default

Le thème par défaut est un design clair, épuré et minimaliste avec des accents bleus et beaucoup d'espace blanc. C'est le seul thème qui prend en charge la bascule automatique du mode sombre selon la préférence de votre système d'exploitation. En mode sombre, les arrière-plans passent à des gris foncés et le texte devient clair.

### Nord

Basé sur la [palette de couleurs Nord](https://www.nordtheme.com/). Les bleus arctiques froids (Polar Night, Snow Storm, Frost) créent un environnement calme et propice à la concentration. Idéal pour une utilisation prolongée.

### Skyrim

Inspiré de l'interface en jeu de The Elder Scrolls V: Skyrim. Arrière-plans couleur parchemin, bordures de style fantasy et tons terreux chauds. Une ambiance unique et immersive.

### Catppuccin Mocha

La variante sombre de la palette [Catppuccin](https://catppuccin.com/). Violets riches, pastels atténués et arrière-plan très sombre. Populaire auprès des développeurs.

### Catppuccin Latte

La variante claire de Catppuccin. Les mêmes couleurs d'accent pastel chaudes, mais sur un fond clair crémeux. Une alternative plus douce au thème Default.

### Gruvbox

Un jeu de couleurs rétro avec des oranges, jaunes et rouges chauds sur un fond sombre. Basé sur la palette [Gruvbox](https://github.com/morhetz/gruvbox), largement utilisée.

### Dracula

Un thème sombre avec un arrière-plan aux teintes violettes et des couleurs de syntaxe vives (vert, orange, rose, cyan). Basé sur le jeu de couleurs [Dracula](https://draculatheme.com/).

### Terminal

Un thème monospace vert sur noir inspiré des émulateurs de terminal classiques (VT100, xterm). Tout le texte s'affiche dans une police monospace. Minimaliste et nostalgique.

### Paper

Un thème chaud à faible contraste qui imite l'aspect du papier vieilli. Fonds crème, texte brun et ombres subtiles. Agréable pour les yeux lors de longues sessions de lecture.

### Atari

Un thème rétro exubérant inspiré des graphismes vifs et massifs des premières consoles Atari et des ordinateurs 8 bits. Contraste élevé, couleurs saturées et esthétique ludique.

## Créer un thème personnalisé

Le système de thèmes de solyto repose sur les propriétés personnalisées CSS. Si vous souhaitez créer votre propre thème, vous pouvez surcharger les variables CSS par défaut. Les thèmes communautaires et les contributions sont les bienvenus dans le dépôt de l'application.
