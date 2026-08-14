---
title: Buchbibliothek
description: Verfolge dein Lesen mit Hardcover, Goodreads-Import, Lesefortschritt und Reihenverfolgung.
---

Die Buchbibliothek ist dein persönliches Leseprotokoll — verfolge Bücher, die du gelesen hast, gerade liest oder lesen möchtest. Behalte Lesefortschritt, Verleihaufzeichnungen und Reihen an einem Ort im Blick.

## Bücher hinzufügen

Füge Bücher auf zwei Arten zu deiner Bibliothek hinzu:

- **Manuelle Eingabe** — trage die Details selbst ein
- **Import** — übernimm eine bestehende Sammlung aus Hardcover oder Goodreads

### Import aus Hardcover

Verbinde dich per API mit Hardcover, um deinen Leseverlauf, deine Regale und Buchdaten zu importieren. Der Hardcover-Import basiert auf der API und übernimmt detaillierte Metadaten automatisch.

### Import aus Goodreads

Lade deine Goodreads-CSV-Exportdatei hoch, um deine Regale und deinen Leseverlauf zu importieren. Exportiere zunächst deine Daten aus Goodreads und lade die Datei anschließend in solyto hoch.

Eine Schritt-für-Schritt-Anleitung findest du unter [Daten importieren](/integrations/importing/).

## Eintragsfelder

Jeder Bucheintrag enthält:

| Feld | Beschreibung |
|-------|-------------|
| **title** | Buchtitel |
| **author** | Autorenname |
| **series** | Reihenname (falls Teil einer Reihe) |
| **volume** | Bandnummer innerhalb der Reihe |
| **rating** | 1–5 Sterne |
| **publication_year** | Erscheinungsjahr des Buchs |
| **pages** | Gesamtseitenzahl |
| **current_page** | Seite, bei der du gerade bist (Lesefortschritt) |
| **lent_to** | An wen du das Buch verliehen hast |
| **is_where** | Physischer Standort des Buchs |
| **cover** | Buchcover |
| **link** | URL (Hardcover, Goodreads, Shopseite) |
| **wishlist** | Als gewünscht, aber noch nicht im Besitz markieren |
| **summary** | Kurze Beschreibung oder Zusammenfassung |
| **started_at** | Datum, an dem du zu lesen begonnen hast |
| **finished_at** | Datum, an dem du fertig gelesen hast |
| **tags** | Farbige Tags zum Filtern |
| **genres** | Ein oder mehrere Buchgenres |

## Lesefortschritt

Verfolge, wo du in einem Buch stehst. Setze **current_page** ins Verhältnis zu den gesamten **pages**, um zu sehen, wie weit du bist. solyto zeigt deinen Fortschritt als Prozentsatz an, sodass du leicht dort weitermachen kannst, wo du aufgehört hast.

Der Fortschritt ist in der Bücherliste und auf der Detailseite jedes Buchs sichtbar.

## Reihen und Bände

Bücher, die Teil einer Reihe sind, können zusammengefasst werden. Setze den Namen der **series** und die **volume**-Nummer bei jedem Eintrag, um deine Reihen organisiert zu halten. Durchstöbere nach Reihe, um alle Bände in der richtigen Reihenfolge zu sehen.

## Verleihen

Behalte im Blick, wer deine Bücher hat. Nutze **lent_to**, um die Person zu erfassen, an die du ein Buch verliehen hast, und **is_where**, um festzuhalten, wo sich das Buch physisch befindet — bei einem Freund, im Büro oder wieder in deinem Regal.

Das ist besonders nützlich, wenn du oft Bücher verleihst und wissen möchtest, wer was hat. Ein eigener Filter **Verliehen** zeigt nur ausgeliehene Bücher.

## KI-Empfehlungen

Erhalte Buchempfehlungen basierend auf deiner Bibliothek. Wähle **Ein Favorit**, **Etwas, das ich noch nicht kenne**, **Einfach etwas Zufälliges** oder **Etwas Neues** — solyto wählt ein passendes Buch aus deiner Sammlung aus (oder ruft für "Neues" eine aktuelle Veröffentlichung über Hardcover ab). Nutze "Erneut versuchen" für einen weiteren Vorschlag.

Empfehlungen werden nur auf Anfrage erzeugt — es passiert nichts, bis du auf die Schaltfläche klickst.

## Benachrichtigungen bei Neuerscheinungen

solyto prüft Hardcover auf neue Bücher deiner Lieblingsautoren und kann dich benachrichtigen, wenn sie veröffentlicht werden. Benachrichtigungen sind pro Kanal konfigurierbar — Telegram, E-Mail oder Push. Siehe [Benachrichtigungen](/customization/notifications/) zur Einrichtung.

## Ansichten

Durchstöbere deine Büchersammlung in den Ansichten **Liste**, **Karten**, **Regal** oder **Rücken** — die Regalansicht zeigt ein Holzregal, die Rückenansicht klappt 3D-Buchrücken heraus (die Rückenbreite ergibt sich aus der Seitenzahl). Suche nach Titel oder Autor (drücke **Strg+F**) und filtere nach Genre, Bewertung, Wunschliste oder Verliehen.

## Buchgenres

Die Buchbibliothek hat ihr eigenes Genre-System. Füge Genres hinzu, die zu deinem Lesegeschmack passen — belletristische Fiktion, Science-Fiction, Biografie, Ratgeber oder alles andere. Weise jedem Buch mehrere Genres zu.

Verwalte Genres über die Bibliothekseinstellungen. Du kannst Genres jederzeit hinzufügen, umbenennen und entfernen.

## Exportieren

Exportiere deine gesamte Buchbibliothek als `.csv`. Die Datei enthält alle Felder — Titel, Autor, Reihe, Bewertung, Genres und Lesedaten. Siehe [Daten exportieren](/integrations/exporting/).
