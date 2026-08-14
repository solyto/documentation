---
title: Profil et paramètres
description: Gérez votre photo de profil, votre mot de passe et les paramètres de l'application.
---

Votre profil et vos paramètres vous permettent de personnaliser solyto selon votre façon de travailler.

## Profil

La page **Profil** affiche votre avatar, votre nom et votre identifiant utilisateur. Depuis cette page, vous pouvez :

- **Changer votre photo de profil** — cliquez sur l'avatar et choisissez une nouvelle image (2 Mo maximum)
- **Gérer vos amis** — consultez votre liste d'amis et gérez les demandes d'amis entrantes/sortantes
- **Administration** — si vous êtes administrateur, une icône de bouclier renvoie vers l'espace d'administration
- **Se déconnecter** — déconnectez-vous de l'appareil actuel

## Paramètres

Les paramètres sont organisés en huit onglets :

### Tâches

Configurez le comportement des tâches dans toute l'application :

- Gérez les **catégories** (créer, renommer, supprimer)
- Gérez les **espaces de travail** — attachez/détachez des catégories et activez l'option **Masquer**

### Étiquettes

Gérez vos étiquettes de manière globale. Créez-les, renommez-les, changez leur couleur et supprimez-les.

### Régionalisation

Contrôlez l'affichage des dates, des heures et des nombres :

| Paramètre | Options |
|-----------|---------|
| Langue | Anglais, allemand, français, espagnol |
| Fuseau horaire | N'importe quel fuseau horaire IANA (ex. `Europe/Berlin`, `America/New_York`) |
| Format de date | `dd.mm.YYYY`, `dd.mm.YY`, `YYYY/mm/dd`, `YY/mm/dd`, `YYYY-mm-dd`, `YY-mm-dd` |
| Format d'heure | 24 heures (`13:37`) ou 12 heures (`1.37 PM`) |

### Fonctionnalités

Activez ou désactivez des fonctionnalités individuelles. Si vous n'utilisez pas une fonctionnalité, vous pouvez la masquer de la barre latérale et du tableau de bord. Cela permet de garder une interface épurée.

### Notifications

Configurez comment et quand solyto vous notifie :

- Connectez le [bot Telegram](/integrations/telegram/) et activez les notifications push
- Activez ou désactivez chaque type de notification par canal (Interface, E-mail, Push, Bot)

Consultez [Notifications](/customization/notifications/) pour plus de détails.

### Application

Paramètres au niveau de l'application :

- **Thème** — choisissez parmi 10 thèmes (voir [Thèmes](/customization/themes/))
- **Animations** — activez ou désactivez les animations CSS/JS
- **Relancer la visite guidée** — rejouez le tour guidé de bienvenue
- **Installer en tant qu'application** — installez solyto en tant qu'[application web progressive](/account/pwa/)
- **Version** — la version installée de l'application

### Sécurité

Gérez vos clés d'accès (passkeys) :

- Ajoutez une clé d'accès (WebAuthn), renommez-la ou supprimez-la
- Consultez la dernière date d'utilisation de chaque clé d'accès

### Exporter les données

Exportez vos données depuis solyto. Consultez [Exportation](/integrations/exporting/) pour les détails sur les formats pris en charge.

## Changer votre mot de passe

Les mots de passe sont définis lors de l'inscription ou via la procédure de réinitialisation du mot de passe. Les mots de passe doivent comporter au moins **12 caractères**, et solyto vérifie les nouveaux mots de passe par rapport à une base de données de mots de passe compromis connus, en rejetant tout mot de passe apparaissant dans une fuite connue.
