---
title: Finances
description: Suivez votre budget et votre patrimoine net dans le temps.
---

Les Finances vous aident à suivre votre budget au quotidien ainsi que votre patrimoine net global dans le temps. Elles se divisent en deux sous-sections : **Budget** pour suivre les revenus et les dépenses, et **Patrimoine** pour suivre les actifs, les passifs et votre patrimoine net total dans le temps.

Les deux sous-sections sont accessibles depuis le hub Finances, et chacune dispose de sa propre route dédiée. Aucune intégration externe ni connexion bancaire n'est nécessaire — toutes les données sont saisies manuellement par vous, ce qui garantit une confidentialité totale.

## Aperçu

L'aperçu des Finances affiche deux cartes cliquables — **Budget** et **Patrimoine** — avec leurs totaux, ainsi que trois graphiques :

- **Revenus vs Dépenses** — un diagramme en barres comparant les deux
- **Répartition du patrimoine** — un anneau des valeurs actuelles de vos champs de patrimoine
- **Évolution du patrimoine** — un graphique linéaire sur 12 mois de votre patrimoine net total

## Budget

Suivez vos revenus et dépenses grâce à des entrées individuelles.

### Entrées

Chaque entrée de budget comporte :

- **Titre** — une description du revenu ou de la dépense
- **Type** — revenu ou dépense
- **Valeur** — le montant

Ajoutez des entrées au fur et à mesure de vos revenus ou dépenses. Modifiez ou supprimez des entrées à tout moment.

### Consulter les totaux

La vue Budget résume vos entrées :

- Une barre de progression proportionnelle dépenses/revenus
- Une carte **Total** avec le solde courant (`+` pour un excédent, `-` pour un déficit)
- Des sections séparées **Revenus** et **Dépenses** avec leurs sous-totaux

## Patrimoine

Suivez votre patrimoine net en enregistrant la valeur de vos actifs et passifs dans le temps. Le Patrimoine est distinct du Budget — il se concentre sur votre situation financière globale plutôt que sur les flux de trésorerie quotidiens.

### Champs de patrimoine

Créez des champs nommés pour chaque composante de votre patrimoine net :

- **Actifs** — comptes bancaires, investissements, biens immobiliers, épargne, fonds de retraite, etc.
- **Passifs** — dettes, prêts, hypothèques, soldes de cartes de crédit, etc.

Chaque champ n'est qu'un titre — ajoutez ou supprimez des champs à tout moment selon l'évolution de votre situation financière. Les champs sont colorés en vert lorsqu'ils sont positifs et en rouge lorsqu'ils sont négatifs.

### Enregistrer les valeurs

Chaque champ de patrimoine conserve un **historique de valeurs**. Modifiez la valeur actuelle directement dans le champ et solyto enregistre une nouvelle valeur horodatée. Au fil du temps, cela constitue un historique de l'évolution de chaque champ. Il n'est pas nécessaire d'enregistrer une valeur chaque jour — mettez simplement à jour les valeurs périodiquement lorsque vos soldes changent.

### Graphique historique

La page Patrimoine affiche un anneau des valeurs actuelles et une carte **Total**. Activez **Afficher l'historique** pour révéler :

- Un graphique linéaire sur 12 mois du **patrimoine net total**
- Un **graphique en aires empilées** de la valeur de chaque champ sur la même période

Cela vous donne une image claire de votre trajectoire financière et vous aide à voir si votre patrimoine net augmente, diminue ou reste stable.

## Routes

| Route | Description |
|-------|-------------|
| `/finances` | Hub Finances avec aperçu et navigation |
| `/finances/wealth` | Suivi du patrimoine avec champs, historique des valeurs et graphique |
| `/finances/budget` | Gestion du budget avec entrées de revenus et de dépenses |

## Exportation

Les données de Budget et de Patrimoine s'exportent sous forme de fichiers `.csv`, compatibles avec tout tableur comme Excel, Google Sheets ou LibreOffice Calc. Consultez [Exportation des données](/integrations/exporting/).
