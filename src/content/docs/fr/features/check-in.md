---
title: Suivi quotidien
description: Suivez votre humeur, votre santé et vos habitudes chaque jour avec 12 indicateurs configurables.
---

Le Suivi quotidien est un outil de suivi journalier intégré à solyto. Il propose 12 indicateurs configurables — la plupart sur une échelle de 1 à 5 — pour enregistrer chaque jour votre humeur, vos indicateurs de santé et vos habitudes. Au fil du temps, il constitue un journal personnel avec des graphiques de tendance, des moyennes et des statistiques que vous pouvez consulter pour repérer des schémas dans votre bien-être.

## Indicateurs

Le Suivi quotidien comprend 12 indicateurs, tous notés sur une échelle de 1 à 5 sauf indication contraire. Sur cette échelle, 1 représente l'extrémité basse et 5 l'extrémité haute :

| Indicateur | Échelle | Description |
|---------|-------|-------------|
| **Humeur** | 1–5 | Humeur générale de la journée |
| **Sommeil** | 1–5 | Qualité du sommeil |
| **Rêves** | 1–5 | Si vous avez rêvé et avec quelle intensité |
| **Qualité alimentaire** | 1–5 | À quel point votre alimentation était saine |
| **Quantité alimentaire** | 1–5 | Quantité de nourriture consommée (1 = trop peu, 5 = trop) |
| **Eau** | 1–5 | Quantité d'eau bue |
| **Sport** | Binaire | Si vous avez fait de l'exercice — si oui, choisissez un type de sport |
| **Travail** | 1–5 | Productivité ou satisfaction au travail |
| **Menstruations** | 1–5 | Suivi associé |
| **Alcool** | 1–5 | Consommation d'alcool |
| **Tabac** | 1–5 | Consommation de tabac |
| **Vie sociale** | 1–5 | Qualité des interactions sociales |

### Types de sport

Lorsque vous activez l'indicateur Sport, vous pouvez sélectionner le type d'exercice pratiqué :

- Salle de sport
- Cyclisme
- Randonnée
- Marche
- Natation
- Yoga

## Personnaliser les indicateurs

Tous les indicateurs ne sont pas pertinents pour tout le monde. Ouvrez **Paramètres** (l'icône d'engrenage) dans la navigation du Suivi quotidien pour :

- **Activer ou désactiver** des indicateurs individuellement — seuls ceux que vous activez apparaissent sur le formulaire de saisie quotidien (au moins un doit rester activé)
- **Marquer des indicateurs comme comptabilisés** — les indicateurs comptabilisés alimentent le score total et le widget du tableau de bord (l'indicateur Sport n'est jamais comptabilisé)
- **Choisir vos sports** — sélectionnez jusqu'à 5 types de sport à suivre ; touchez un sport sélectionné, puis un sport non sélectionné, pour les permuter

Cela permet de concentrer votre suivi quotidien sur ce qui compte pour vous.

## Saisie quotidienne

Chaque jour, remplissez vos indicateurs via le formulaire de suivi. Le formulaire n'affiche que vos indicateurs activés, ce qui le rend rapide à compléter. Vous pouvez revenir en arrière et modifier n'importe quelle entrée passée — il suffit de naviguer jusqu'à la date et de mettre à jour les valeurs.

Un suivi quotidien prend généralement moins d'une minute une fois que vous avez l'habitude.

## Historique

Parcourez vos entrées passées dans une **grille mensuelle** :

- Une matrice jour par jour des icônes d'indicateurs
- Cliquez sur une cellule pour modifier rapidement la valeur de cet indicateur pour ce jour
- Cliquez sur le numéro du jour pour ouvrir la vue complète de cette journée
- Naviguez par mois pour parcourir votre historique

### Moyennes et résumés

La page Historique affiche aussi les **moyennes** par indicateur ainsi que votre total général, et des **résumés de suivi** — des résumés en langage naturel qui décrivent chaque journée (« bonne humeur, bien dormi, mais consommation d'alcool ») ainsi que des résumés de période pour la semaine en cours/dernière et le mois en cours/dernier, y compris le nombre de séances de sport.

## Tendances

La page Tendances affiche des courbes lissées pour chaque indicateur comptabilisé actif (le sport est exclu), sur des périodes de **30 jours, 3 mois, 6 mois ou toute la période** :

Les tendances vous aident à repérer des schémas — par exemple, si la qualité de votre sommeil est corrélée à votre humeur, ou si faire plus d'exercice améliore vos scores de bien-être général.

## Widget du tableau de bord

Le widget Suivi quotidien apparaît sur votre [tableau de bord](/dashboard/overview/), affichant la valeur moyenne par indicateur comptabilisé sous forme de barres colorées, ainsi que votre score total général.

## Rappels

Configurez des rappels de suivi quotidien pour en faire une habitude :

- **Telegram** — recevez un rappel quotidien via le bot Telegram
- **Notifications push** — notification push du navigateur à l'heure de votre choix

Consultez [Notifications](/customization/notifications/) et [Telegram](/integrations/telegram/) pour la configuration.

## Routes

| Route | Description |
|-------|-------------|
| `/check-in` | Entrée de suivi du jour |
| `/check-in/date/[date]` | Suivi pour une date spécifique |
| `/check-in/history` | Aperçu calendaire des entrées passées |
| `/check-in/trends` | Statistiques et graphiques de tendance |

## Exportation

Les données de suivi quotidien s'exportent au format `.csv`, compatible avec tout tableur. Consultez [Exportation des données](/integrations/exporting/).
