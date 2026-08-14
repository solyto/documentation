---
title: Kontakte
description: Kontaktverwaltung mit CardDAV-Synchronisierung und Adressbüchern.
---

Kontakte ist ein vollwertiges Adressbuch, das fest in solyto integriert ist. Es unterstützt mehrere farblich gekennzeichnete Adressbücher, detaillierte Kontaktfelder inklusive Fotos, Suche mit A–Z-Gruppierung und eine bidirektionale CardDAV-Synchronisierung mit externen Diensten wie Google Contacts und Apple Contacts.

## Adressbücher

Erstelle mehrere Adressbücher und kennzeichne jedes farblich. So kannst du Kontakte nach Kontext trennen — zum Beispiel ein Adressbuch "Privat" und eines "Arbeit".

Jedes Adressbuch ist unabhängig und hat seine eigene Kontaktliste. Du kannst Adressbücher jederzeit erstellen, umbenennen und löschen, ohne deine Kontakte zu beeinträchtigen.

## Kontakte hinzufügen

Öffne ein Adressbuch und klicke auf die **+**-Schaltfläche, um einen neuen Kontakt zu erstellen. Fülle die benötigten Felder aus:

### Kontaktfelder

- **Name** — Präfix, Vorname, zweiter Vorname, Nachname und Suffix
- **Telefonnummern** — eine oder mehrere, jeweils mit einem Typ (Mobil, Privat, Arbeit, Sonstiges)
- **E-Mail-Adressen** — eine oder mehrere, jeweils mit einem Typ (Privat, Arbeit, Sonstiges)
- **Gruppen** — einer oder mehreren Gruppen zur Organisation zuweisen
- **Organisation** — Unternehmen oder Zugehörigkeit
- **Titel** — Berufsbezeichnung
- **Notiz** — Freitext-Notizen zum Kontakt
- **Adresse** — Straße, Stadt, Bundesland, Postleitzahl und Land
- **Foto** — ein Bild für den Kontakt hochladen (passend skaliert)

Alle Felder außer dem Namen sind optional. Kontakte können mehreren Gruppen innerhalb eines Adressbuchs angehören.

### Kontakt-Detailansicht

Klicke auf einen Kontakt, um seine Detailansicht zu öffnen — mit einem Initialen-Avatar, Tippen-zum-Anrufen- (`tel:`) und Tippen-zum-Mailen-Links (`mailto:`), Chips für Adressbuch und Gruppen, Adresse, Organisation, Notiz und Foto. Bearbeite oder lösche den Kontakt direkt aus dieser Ansicht.

## Kontaktfotos

Lade für jeden Kontakt ein Foto hoch:

- **Hochladen** — wähle eine Bilddatei von deinem Gerät aus (wird automatisch skaliert)
- **Anzeigen** — das Foto erscheint in der Kontaktliste und der Detailansicht
- **Löschen** — entferne das Foto jederzeit

Fotos helfen dir, Kontakte auf einen Blick wiederzuerkennen, besonders in großen Adressbüchern.

## Suche und Filter

Finde Kontakte schnell mit den integrierten Such- und Organisationswerkzeugen:

- **Suche** — gib einen Namen, eine E-Mail-Adresse oder Telefonnummer ein, um einen Kontakt sofort zu finden
- **A–Z-Gruppierung** — Kontakte werden alphabetisch nach dem ersten Buchstaben ihres Namens gruppiert, für eine schnell überblickbare Liste
- **Nach Adressbuch filtern** — zeige Kontakte aus einem bestimmten Adressbuch
- **Nach Gruppe filtern** — zeige Kontakte, die zu einer bestimmten Gruppe gehören

## CardDAV-Synchronisierung

solyto unterstützt eine bidirektionale CardDAV-Synchronisierung, die deine Kontakte mit externen Kontaktdiensten abgleicht. Nach der Einrichtung fließen Änderungen in beide Richtungen — bearbeite einen Kontakt in solyto und er wird auf dem Server aktualisiert, oder bearbeite ihn auf dem Server und er wird in solyto aktualisiert.

- Google Contacts
- Apple Contacts
- Nextcloud Contacts
- Jeder CardDAV-kompatible Dienst

Änderungen, die in solyto vorgenommen werden, werden an den externen Server übertragen — und umgekehrt.

### Importvorgang

Der Import von einem externen CardDAV-Server läuft in mehreren Schritten ab:

1. **Start** — gib die URL, den Benutzernamen und das Passwort deines externen Servers ein
2. **Auswahl** — wähle aus, welche Adressbücher vom Server importiert werden sollen
3. **Import** — Kontakte werden mit Live-Fortschrittsanzeige abgerufen und lokal gespeichert
4. **Fertig** — deine Kontakte stehen in solyto zur Verfügung

Eine ausführliche Anleitung findest du unter [DAV-Synchronisierung](/integrations/dav-sync/).

## Exportieren

Deine Kontakte können als `.vcf`-Datei (vCard) exportiert werden, kompatibel mit jeder Kontakte-Anwendung. Siehe [Daten exportieren](/integrations/exporting/).
