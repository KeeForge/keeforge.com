// Homepage copy. Keep every locale aligned with the English structure.

const en = {
    "lang": "en",
    "path": "/",
    "title": "KeeForge — Free, Open-Source KeePass for iOS / macOS",
    "description": "Free, open source, and built for your devices. Open your existing .kdbx vaults, unlock with Face ID or Touch ID, and AutoFill your passwords wherever you need them. iOS 18 or later. macOS 15 or later.",
    "nav": {
        "features": "Features",
        "faq": "FAQ",
        "changelog": "Changelog",
        "audit": "Security audit",
        "source": "Source",
        "download": "Download",
        "menu": "Menu",
        "skip": "Skip to content"
    },
    "hero": {
        "h1": "A KeePass app for <span class=\"accent\">iPhone, iPad, and Mac.</span>",
        "lead": "Free, open source, and built for your devices. Open your existing <code>.kdbx</code> vaults, unlock with Face ID or Touch ID, and AutoFill your passwords wherever you need them."
    },
    "trustPills": [
        {
            "k": "01",
            "t": "Open source",
            "d": "GPL 3.0. Audit every line."
        },
        {
            "k": "02",
            "t": "KeePass compatible",
            "d": "KDBX 4.x read/write. KDBX 3.1 read-only."
        },
        {
            "k": "03",
            "t": "Free, forever",
            "d": "No subscription, no ads, no upsells."
        },
        {
            "k": "04",
            "t": "Biometrics + AutoFill",
            "d": "Face ID or Touch ID. Fewer steps."
        }
    ],
    "features": [
        {
            "eyebrow": "MANY VAULTS",
            "title": "All your databases.\nRight where you need them.",
            "body": "Personal, Work, and Shared vaults, together in one app. Open the KeePass files you already have and keep them in storage you choose.",
            "points": [
                "Open multiple databases, locally or through WebDAV",
                "Use a master password, a key file, or both",
                "Keep using the same files with other KeePass apps"
            ],
            "iosNote": "Open files from Files or iCloud Drive. Connect directly to Dropbox, OneDrive, or WebDAV.",
            "macNote": "Open local files or folders synced by your cloud app. Connect directly to WebDAV."
        },
        {
            "eyebrow": "ORGANIZE & FIND",
            "title": "Find the entry\nyou’re looking for.",
            "body": "Browse the folder structure you already know. Search titles, usernames, URLs, and notes across your vault, then open an entry to copy, reveal, or visit its website.",
            "points": [
                "Organize entries in hierarchical groups",
                "Move entries and groups to the Recycle Bin",
                "Preview and share attachments without exporting your vault"
            ],
            "iosNote": "Focused navigation on iPhone, with a split-view workspace on iPad.",
            "macNote": "Groups, entries, and details in one window, with native menus and keyboard shortcuts."
        },
        {
            "eyebrow": "EDIT ON DEVICE",
            "title": "Make a change.\nSave it to your vault.",
            "body": "Create and edit entries on your phone, tablet, or Mac. Update usernames, passwords, URLs, tags, and notes, then save encrypted changes back to the source .kdbx file.",
            "points": [
                "Generate a strong password without leaving the editor",
                "Create new KDBX 4.x databases locally or through WebDAV",
                "Use read-only mode when you don’t want to make changes"
            ],
            "iosNote": "",
            "macNote": ""
        }
    ],
    "safety": {
        "eyebrow": "DATA SAFETY",
        "h2": "Tested to protect\nevery part of your vault.",
        "lead": "A password manager must never corrupt your vault or silently lose any part of it. Before any change ships, automated tests verify:",
        "items": [
            {
                "title": "Nothing gets lost when you save.",
                "body": "Every kind of edit is saved and read back piece by piece — passwords, notes, attachments, entry history, and even data from other KeePass apps that KeeForge doesn’t recognize must all come back exactly as they went in."
            },
            {
                "title": "Your file is protected before it’s touched.",
                "body": "KeeForge refuses to overwrite changes made from elsewhere while you had the file open, writes a timestamped backup before every save, and rejects damaged databases outright instead of loading partial data."
            },
            {
                "title": "An independent program agrees.",
                "body": "Every release must pass a gate where KeePassXC — a widely used KeePass app that shares no code with KeeForge — opens KeeForge-written databases, decrypts the passwords, and confirms attachments match bit for bit. Databases created by other KeePass software must likewise open in KeeForge and stay readable elsewhere after KeeForge saves them."
            }
        ],
        "linkLabel": "Read how it’s tested",
        "linkHref": "https://github.com/KeeForge/KeeForge/blob/main/ci_scripts/README.md"
    },
    "compare": {
        "eyebrow": "HOW IT COMPARES",
        "h2": "Already using a password manager? Here’s where KeeForge fits.",
        "cards": [
            {
                "title": "vs iCloud Keychain",
                "bullets": [
                    "Keep your passwords in portable KeePass files that also work with compatible apps on non-Apple devices.",
                    "Choose where your encrypted database lives: local storage, WebDAV, or a cloud-synced folder.",
                    "Read the source and see how the app handles your data."
                ]
            },
            {
                "title": "vs 1Password & Bitwarden",
                "bullets": [
                    "KeeForge needs no service account or subscription. Your vault is a file, not a KeeForge-hosted account.",
                    "Keep using the open KeePass ecosystem, including KeePassXC, Strongbox, and KeePassium.",
                    "Every KeeForge feature is included, with no premium tier or telemetry."
                ]
            },
            {
                "title": "vs other KeePass clients",
                "bullets": [
                    "Native apps for iPhone, iPad, and Mac, built around each platform’s navigation and controls.",
                    "Password AutoFill, passkeys, and verification codes, all included.",
                    "Conflict checks and automatic backups protect edits to your database."
                ]
            }
        ]
    },
    "beta": {
        "eyebrow": "PUBLIC BETA",
        "h2": "Try the next version<br>before it ships.",
        "body": "New versions go out on TestFlight before they reach the App Store.",
        "availability": "Availability can differ by platform while Apple reviews a build. If a beta isn’t accepting testers, check back later.",
        "warningTitle": "Test with a copy of your database, not your primary vault.",
        "warningBody": "Beta builds can carry bugs the released app does not — and they replace the App Store install and open the same real .kdbx files. Duplicate a database first and point the beta at the copy.",
        "iosCTA": "iPhone & iPad beta",
        "macCTA": "Mac beta"
    },
    "faq": {
        "items": [
            {
                "q": "Is KeeForge really free?",
                "a": "Yes. All features are free, with no subscription, ads, or premium tier. If you’d like to help, star the repository or support development."
            },
            {
                "q": "Which devices does it support?",
                "a": "KeeForge supports iPhone and iPad running iOS 18 or later, and Mac running macOS 15 or later. Each platform has a native app."
            },
            {
                "q": "Does it work with my existing KeePass database?",
                "a": "KeeForge reads and writes KDBX 4.x databases using AES-256, ChaCha20, or Twofish with AES-KDF or Argon2. KDBX 3.1 databases open in read-only mode."
            },
            {
                "q": "Can I use the same database on my phone and Mac?",
                "a": "Yes. KeeForge reads and writes KDBX 4.x files on each device. Store a database somewhere both devices can access, such as WebDAV or a synced folder. KeeForge does not host or automatically transfer your vault."
            },
            {
                "q": "Where are my passwords stored?",
                "a": "In your encrypted database, on your device or in storage you choose. On iPhone and iPad, use Files, iCloud Drive, Dropbox, OneDrive, or WebDAV. On Mac, open local files, cloud-synced folders, or WebDAV databases. KeeForge does not host your passwords."
            },
            {
                "q": "How does AutoFill work?",
                "a": "Enable KeeForge as a password provider in your device’s system settings. In a supported app or browser, choose a saved credential and unlock KeeForge with Face ID, Touch ID, or your database credentials."
            },
            {
                "q": "How do I get KeeForge for Mac?",
                "a": "Download it from the Mac App Store or get the direct Mac download. Both are free and require macOS 15 or later."
            },
            {
                "q": "Can I inspect the security of the app?",
                "a": "Yes. Read the code, build it yourself, and review the public security audit record. The repository also documents the database compatibility tests and release checks."
            }
        ]
    },
    "footer": {
        "copy": "© 2026 · GPL 3.0 · Made by a small team",
        "privacy": "Privacy",
        "privacyHref": "/privacy",
        "support": "Support"
    },
    "downloads": {
        "ios": "Get for iPhone & iPad",
        "mac": "Get for Mac",
        "direct": "Direct Mac download",
        "iosRequirement": "iOS 18 or later",
        "macRequirement": "macOS 15 or later"
    },
    "screenshots": {
        "iosAlt": "KeeForge’s database list on iPhone",
        "macAlt": "KeeForge’s native Mac window with groups, entries, and password details",
        "groupsAlt": "KeeForge’s groups and search on iPhone",
        "editAlt": "KeeForge’s entry editor on Mac",
        "iosEditAlt": "KeeForge’s entry editor on iPhone"
    },
    "everyday": {
        "eyebrow": "Built into your day",
        "title": "Less typing.\nStill your passwords.",
        "body": "Unlock your vault, fill a login, or copy a verification code without breaking your flow.",
        "items": [
            {
                "title": "Face ID & Touch ID",
                "body": "Unlock with the biometrics supported by your device, or use your master password and key file."
            },
            {
                "title": "Password AutoFill",
                "body": "Fill credentials in supported apps and browsers through the system’s AutoFill integration."
            },
            {
                "title": "Passkeys & verification codes",
                "body": "Use KeePassXC-compatible passkeys and time-based verification codes stored in your database."
            }
        ]
    }
};

const de: typeof en = {
    "lang": "de",
    "path": "/de/",
    "title": "KeeForge — Kostenloser Open-Source-KeePass für iOS / macOS",
    "description": "Kostenlos, quelloffen und für deine Geräte gemacht. Öffne deine vorhandenen .kdbx-Tresore, entsperre sie mit Face ID oder Touch ID und fülle Passwörter automatisch aus, wo du sie brauchst. Ab iOS 18. Ab macOS 15.",
    "nav": {
        "features": "Funktionen",
        "faq": "FAQ",
        "changelog": "Changelog",
        "audit": "Sicherheitsaudit",
        "source": "Quellcode",
        "download": "Herunterladen",
        "menu": "Menü",
        "skip": "Zum Inhalt springen"
    },
    "hero": {
        "h1": "Eine KeePass-App für <span class=\"accent\">iPhone, iPad und Mac.</span>",
        "lead": "Kostenlos, quelloffen und für deine Geräte gemacht. Öffne deine vorhandenen <code>.kdbx</code>-Tresore, entsperre sie mit Face ID oder Touch ID und fülle Passwörter automatisch aus, wo du sie brauchst."
    },
    "trustPills": [
        {
            "k": "01",
            "t": "Open Source",
            "d": "GPL 3.0. Jede Zeile prüfbar."
        },
        {
            "k": "02",
            "t": "KeePass-kompatibel",
            "d": "KDBX 4.x lesen/schreiben. KDBX 3.1 nur lesen."
        },
        {
            "k": "03",
            "t": "Kostenlos, für immer",
            "d": "Kein Abo, keine Werbung, keine Upsells."
        },
        {
            "k": "04",
            "t": "Biometrie + AutoFill",
            "d": "Face ID oder Touch ID. Weniger Schritte."
        }
    ],
    "features": [
        {
            "eyebrow": "VIELE TRESORE",
            "title": "Alle deine Datenbanken.\nGenau dort, wo du sie brauchst.",
            "body": "Private, berufliche und geteilte Tresore in einer App. Öffne deine vorhandenen KeePass-Dateien und speichere sie dort, wo du möchtest.",
            "points": [
                "Mehrere Datenbanken lokal oder über WebDAV öffnen",
                "Master-Passwort, Schlüsseldatei oder beides verwenden",
                "Dieselben Dateien weiterhin mit anderen KeePass-Apps nutzen"
            ],
            "iosNote": "Dateien aus der Dateien-App oder iCloud Drive öffnen. Dropbox, OneDrive und WebDAV direkt verbinden.",
            "macNote": "Lokale Dateien oder mit deiner Cloud-App synchronisierte Ordner öffnen. WebDAV direkt verbinden."
        },
        {
            "eyebrow": "ORDNEN & FINDEN",
            "title": "Finde den Eintrag,\nden du suchst.",
            "body": "Nutze deine vertraute Ordnerstruktur. Durchsuche Titel, Benutzernamen, URLs und Notizen im gesamten Tresor. Öffne einen Eintrag, um ihn zu kopieren, anzuzeigen oder seine Website zu besuchen.",
            "points": [
                "Einträge in hierarchischen Gruppen organisieren",
                "Einträge und Gruppen in den Papierkorb verschieben",
                "Anhänge ansehen und teilen, ohne den Tresor zu exportieren"
            ],
            "iosNote": "Übersichtliche Navigation auf dem iPhone und eine geteilte Ansicht auf dem iPad.",
            "macNote": "Gruppen, Einträge und Details in einem Fenster, mit nativen Menüs und Tastaturkurzbefehlen."
        },
        {
            "eyebrow": "AUF DEM GERÄT BEARBEITEN",
            "title": "Änderung vornehmen.\nIm Tresor speichern.",
            "body": "Erstelle und bearbeite Einträge auf iPhone, iPad oder Mac. Ändere Benutzernamen, Passwörter, URLs, Tags und Notizen und speichere die verschlüsselten Änderungen direkt in der ursprünglichen .kdbx-Datei.",
            "points": [
                "Starke Passwörter direkt im Editor erzeugen",
                "Neue KDBX-4.x-Datenbanken lokal oder über WebDAV erstellen",
                "Nur-Lese-Modus nutzen, wenn du keine Änderungen möchtest"
            ],
            "iosNote": "",
            "macNote": ""
        }
    ],
    "safety": {
        "eyebrow": "DATENSICHERHEIT",
        "h2": "Getestet, um deinen Tresor\nvollständig zu schützen.",
        "lead": "Ein Passwort-Manager darf deinen Tresor niemals beschädigen oder unbemerkt Daten verlieren. Bevor eine Änderung ausgeliefert wird, stellen automatisierte Tests sicher:",
        "items": [
            {
                "title": "Beim Speichern geht nichts verloren.",
                "body": "Jede Art von Änderung wird gespeichert und Stück für Stück wieder eingelesen — Passwörter, Notizen, Anhänge, Eintragsverlauf und selbst Daten anderer KeePass-Apps, die KeeForge gar nicht kennt, müssen exakt so zurückkommen, wie sie hineingingen."
            },
            {
                "title": "Deine Datei ist geschützt, bevor sie angefasst wird.",
                "body": "KeeForge weigert sich, Änderungen zu überschreiben, die anderswo gemacht wurden, während die Datei bei dir geöffnet war; es legt vor jedem Speichern ein zeitgestempeltes Backup an und lehnt beschädigte Datenbanken rundweg ab, statt unvollständige Daten zu laden."
            },
            {
                "title": "Ein unabhängiges Programm bestätigt das.",
                "body": "Jede Version muss ein Prüf-Gate bestehen, in dem KeePassXC — eine weit verbreitete KeePass-App, die keinen Code mit KeeForge teilt — von KeeForge geschriebene Datenbanken öffnet, die Passwörter entschlüsselt und bestätigt, dass Anhänge Bit für Bit übereinstimmen. Umgekehrt müssen von anderer KeePass-Software erstellte Datenbanken sich in KeeForge öffnen lassen und auch nach dem Speichern durch KeeForge anderswo lesbar bleiben."
            }
        ],
        "linkLabel": "Nachlesen, wie getestet wird",
        "linkHref": "https://github.com/KeeForge/KeeForge/blob/main/ci_scripts/README.md"
    },
    "compare": {
        "eyebrow": "DER VERGLEICH",
        "h2": "Du nutzt schon einen Passwortmanager? Hier passt KeeForge hin.",
        "cards": [
            {
                "title": "vs. iCloud-Schlüsselbund",
                "bullets": [
                    "Speichere Passwörter in portablen KeePass-Dateien, die auch mit kompatiblen Apps auf Geräten anderer Hersteller funktionieren.",
                    "Wähle den Speicherort deiner verschlüsselten Datenbank: lokal, WebDAV oder ein synchronisierter Cloud-Ordner.",
                    "Lies den Quellcode und sieh nach, wie die App mit deinen Daten umgeht."
                ]
            },
            {
                "title": "vs. 1Password & Bitwarden",
                "bullets": [
                    "KeeForge braucht weder Dienstkonto noch Abo. Dein Tresor ist eine Datei, kein von KeeForge gehostetes Konto.",
                    "Nutze weiterhin das offene KeePass-Ökosystem, etwa KeePassXC, Strongbox und KeePassium.",
                    "Alle KeeForge-Funktionen sind enthalten, ohne Premium-Stufe oder Telemetrie."
                ]
            },
            {
                "title": "vs. andere KeePass-Clients",
                "bullets": [
                    "Native Apps für iPhone, iPad und Mac mit der Navigation und Bedienung der jeweiligen Plattform.",
                    "Passwort-AutoFill, Passkeys und Bestätigungscodes sind inklusive.",
                    "Konfliktprüfungen und automatische Backups schützen Änderungen an deiner Datenbank."
                ]
            }
        ]
    },
    "beta": {
        "eyebrow": "ÖFFENTLICHE BETA",
        "h2": "Teste die nächste Version,<br>bevor sie erscheint.",
        "body": "Neue Versionen erscheinen über TestFlight, bevor sie in den App Store kommen.",
        "availability": "Die Verfügbarkeit kann je nach Plattform abweichen, während Apple einen Build prüft. Nimmt eine Beta keine Tester auf, schau später wieder vorbei.",
        "warningTitle": "Teste mit einer Kopie deiner Datenbank, nicht mit deinem Haupttresor.",
        "warningBody": "Beta-Builds können Fehler enthalten, die es in der veröffentlichten App nicht gibt — und sie ersetzen die App-Store-Installation und öffnen dieselben echten .kdbx-Dateien. Dupliziere deine Datenbank vorher und öffne in der Beta nur die Kopie.",
        "iosCTA": "iPhone- & iPad-Beta",
        "macCTA": "Mac-Beta"
    },
    "faq": {
        "items": [
            {
                "q": "Ist KeeForge wirklich kostenlos?",
                "a": "Ja. Alle Funktionen sind kostenlos, ohne Abo, Werbung oder Premium-Stufe. Wenn du helfen möchtest, gib dem Repository einen Stern oder unterstütze die Entwicklung."
            },
            {
                "q": "Welche Geräte werden unterstützt?",
                "a": "KeeForge unterstützt iPhone und iPad ab iOS 18 und Mac ab macOS 15. Für jede Plattform gibt es eine native App."
            },
            {
                "q": "Funktioniert es mit meiner bestehenden KeePass-Datenbank?",
                "a": "KeeForge liest und schreibt KDBX-4.x-Datenbanken mit AES-256, ChaCha20 oder Twofish und AES-KDF oder Argon2. KDBX-3.1-Datenbanken öffnen sich im Nur-Lese-Modus."
            },
            {
                "q": "Kann ich dieselbe Datenbank auf iPhone und Mac nutzen?",
                "a": "Ja. KeeForge liest und schreibt KDBX-4.x-Dateien auf jedem Gerät. Speichere die Datenbank an einem Ort, auf den beide Geräte zugreifen können, etwa per WebDAV oder in einem synchronisierten Ordner. KeeForge hostet oder überträgt deinen Tresor nicht automatisch."
            },
            {
                "q": "Wo werden meine Passwörter gespeichert?",
                "a": "In deiner verschlüsselten Datenbank auf deinem Gerät oder im Speicher deiner Wahl. Auf iPhone und iPad stehen Dateien, iCloud Drive, Dropbox, OneDrive und WebDAV zur Verfügung. Auf dem Mac öffnest du lokale Dateien, synchronisierte Cloud-Ordner oder WebDAV-Datenbanken. KeeForge hostet deine Passwörter nicht."
            },
            {
                "q": "Wie funktioniert AutoFill?",
                "a": "Aktiviere KeeForge in den Systemeinstellungen deines Geräts als Passwortanbieter. Wähle in einer unterstützten App oder einem Browser einen gespeicherten Zugang und entsperre KeeForge mit Face ID, Touch ID oder deinen Datenbank-Zugangsdaten."
            },
            {
                "q": "Wie bekomme ich KeeForge für den Mac?",
                "a": "Lade KeeForge aus dem Mac App Store oder direkt herunter. Beide Varianten sind kostenlos und benötigen macOS 15 oder neuer."
            },
            {
                "q": "Kann ich die Sicherheit der App selbst prüfen?",
                "a": "Ja. Lies den Quellcode, baue die App selbst und prüfe den öffentlichen Sicherheitsbericht. Das Repository dokumentiert auch die Datenbank-Kompatibilitätstests und Freigabeprüfungen."
            }
        ]
    },
    "footer": {
        "copy": "© 2026 · GPL 3.0 · Von einem kleinen Team entwickelt",
        "privacy": "Datenschutz",
        "privacyHref": "/de/privacy",
        "support": "Support"
    },
    "downloads": {
        "ios": "Für iPhone & iPad",
        "mac": "Für Mac",
        "direct": "Mac direkt laden",
        "iosRequirement": "Ab iOS 18",
        "macRequirement": "Ab macOS 15"
    },
    "screenshots": {
        "iosAlt": "KeeForge-Datenbankliste auf dem iPhone",
        "macAlt": "Natives KeeForge-Fenster auf dem Mac mit Gruppen, Einträgen und Passwortdetails",
        "groupsAlt": "Gruppen und Suche in KeeForge auf dem iPhone",
        "editAlt": "Eintragseditor von KeeForge auf dem Mac",
        "iosEditAlt": "KeeForges Eintragseditor auf dem iPhone"
    },
    "everyday": {
        "eyebrow": "Für deinen Alltag",
        "title": "Weniger tippen.\nDeine Passwörter bleiben deine.",
        "body": "Entsperre deinen Tresor, fülle eine Anmeldung aus oder kopiere einen Bestätigungscode, ohne deinen Ablauf zu unterbrechen.",
        "items": [
            {
                "title": "Face ID & Touch ID",
                "body": "Entsperre mit der Biometrie deines Geräts oder mit Master-Passwort und Schlüsseldatei."
            },
            {
                "title": "Passwort-AutoFill",
                "body": "Fülle Zugangsdaten in unterstützten Apps und Browsern über die AutoFill-Integration des Systems aus."
            },
            {
                "title": "Passkeys & Bestätigungscodes",
                "body": "Nutze KeePassXC-kompatible Passkeys und zeitbasierte Bestätigungscodes aus deiner Datenbank."
            }
        ]
    }
};

const fr: typeof en = {
    "lang": "fr",
    "path": "/fr/",
    "title": "KeeForge — KeePass gratuit et open source pour iOS / macOS",
    "description": "Gratuite, open source et conçue pour vos appareils. Ouvrez vos coffres .kdbx existants, déverrouillez-les avec Face ID ou Touch ID et remplissez vos mots de passe là où vous en avez besoin. iOS 18 ou ultérieur. macOS 15 ou ultérieur.",
    "nav": {
        "features": "Fonctionnalités",
        "faq": "FAQ",
        "changelog": "Journal des modifications",
        "audit": "Audit de sécurité",
        "source": "Code source",
        "download": "Télécharger",
        "menu": "Menu",
        "skip": "Aller au contenu"
    },
    "hero": {
        "h1": "Une app KeePass pour <span class=\"accent\">iPhone, iPad et Mac.</span>",
        "lead": "Gratuite, open source et conçue pour vos appareils. Ouvrez vos coffres <code>.kdbx</code> existants, déverrouillez-les avec Face ID ou Touch ID et remplissez vos mots de passe là où vous en avez besoin."
    },
    "trustPills": [
        {
            "k": "01",
            "t": "Open source",
            "d": "GPL 3.0. Auditez chaque ligne."
        },
        {
            "k": "02",
            "t": "Compatible KeePass",
            "d": "KDBX 4.x en lecture/écriture. KDBX 3.1 en lecture seule."
        },
        {
            "k": "03",
            "t": "Gratuit, pour toujours",
            "d": "Pas d’abonnement, pas de publicité, pas de vente incitative."
        },
        {
            "k": "04",
            "t": "Biométrie + remplissage",
            "d": "Face ID ou Touch ID. Moins d’étapes."
        }
    ],
    "features": [
        {
            "eyebrow": "DE NOMBREUX COFFRES-FORTS",
            "title": "Toutes vos bases.\nLà où vous en avez besoin.",
            "body": "Coffres personnels, professionnels et partagés, réunis dans une app. Ouvrez vos fichiers KeePass existants et conservez-les où vous le souhaitez.",
            "points": [
                "Ouvrez plusieurs bases en local ou via WebDAV",
                "Utilisez un mot de passe maître, un fichier clé ou les deux",
                "Continuez à utiliser les mêmes fichiers avec d’autres apps KeePass"
            ],
            "iosNote": "Ouvrez des fichiers depuis Fichiers ou iCloud Drive. Connectez directement Dropbox, OneDrive ou WebDAV.",
            "macNote": "Ouvrez des fichiers locaux ou des dossiers synchronisés par votre app cloud. Connectez directement WebDAV."
        },
        {
            "eyebrow": "ORGANISER & RETROUVER",
            "title": "Trouvez l’entrée\nque vous cherchez.",
            "body": "Parcourez votre arborescence habituelle. Recherchez parmi les titres, noms d’utilisateur, URL et notes du coffre. Ouvrez une entrée pour copier, afficher ou visiter son site.",
            "points": [
                "Organisez vos entrées dans des groupes hiérarchiques",
                "Déplacez entrées et groupes vers la corbeille",
                "Consultez et partagez les pièces jointes sans exporter le coffre"
            ],
            "iosNote": "Une navigation ciblée sur iPhone et un espace de travail à volets sur iPad.",
            "macNote": "Groupes, entrées et détails dans une fenêtre, avec menus natifs et raccourcis clavier."
        },
        {
            "eyebrow": "MODIFIER SUR L’APPAREIL",
            "title": "Modifiez une entrée.\nEnregistrez-la dans votre coffre.",
            "body": "Créez et modifiez des entrées sur iPhone, iPad ou Mac. Mettez à jour les identifiants, mots de passe, URL, tags et notes, puis enregistrez les modifications chiffrées dans le fichier .kdbx d’origine.",
            "points": [
                "Générez un mot de passe robuste sans quitter l’éditeur",
                "Créez des bases KDBX 4.x en local ou via WebDAV",
                "Activez la lecture seule pour éviter les modifications"
            ],
            "iosNote": "",
            "macNote": ""
        }
    ],
    "safety": {
        "eyebrow": "SÉCURITÉ DES DONNÉES",
        "h2": "Des tests pour protéger\nl’intégralité de votre coffre.",
        "lead": "Un gestionnaire de mots de passe ne doit jamais corrompre votre coffre-fort ni en perdre silencieusement une partie. Avant la publication de tout changement, des tests automatisés vérifient :",
        "items": [
            {
                "title": "Rien n’est perdu lors de l’enregistrement.",
                "body": "Chaque type de modification est enregistré puis relu élément par élément — mots de passe, notes, pièces jointes, historique des entrées, et même les données d’autres applications KeePass que KeeForge ne reconnaît pas doivent toutes revenir exactement telles qu’elles ont été saisies."
            },
            {
                "title": "Votre fichier est protégé avant d’être touché.",
                "body": "KeeForge refuse d’écraser des modifications faites ailleurs pendant que le fichier était ouvert chez vous, écrit une sauvegarde horodatée avant chaque enregistrement, et rejette purement et simplement les bases de données endommagées plutôt que de charger des données partielles."
            },
            {
                "title": "Un programme indépendant le confirme.",
                "body": "Chaque version doit franchir une étape de vérification où KeePassXC — une application KeePass largement utilisée qui ne partage aucun code avec KeeForge — ouvre les bases de données écrites par KeeForge, déchiffre les mots de passe et confirme que les pièces jointes correspondent bit à bit. Les bases de données créées par d’autres logiciels KeePass doivent de même s’ouvrir dans KeeForge et rester lisibles ailleurs après avoir été enregistrées par KeeForge."
            }
        ],
        "linkLabel": "Découvrir comment c’est testé",
        "linkHref": "https://github.com/KeeForge/KeeForge/blob/main/ci_scripts/README.md"
    },
    "compare": {
        "eyebrow": "LA COMPARAISON",
        "h2": "Vous utilisez déjà un gestionnaire de mots de passe ? Voici où KeeForge se situe.",
        "cards": [
            {
                "title": "Face au trousseau iCloud",
                "bullets": [
                    "Conservez vos mots de passe dans des fichiers KeePass portables, utilisables avec des apps compatibles sur des appareils non Apple.",
                    "Choisissez le stockage de votre base chiffrée : local, WebDAV ou dossier synchronisé dans le cloud.",
                    "Lisez le code pour comprendre comment l’app traite vos données."
                ]
            },
            {
                "title": "Face à 1Password et Bitwarden",
                "bullets": [
                    "KeeForge ne nécessite ni compte de service ni abonnement. Votre coffre est un fichier, pas un compte hébergé par KeeForge.",
                    "Continuez à utiliser l’écosystème KeePass ouvert, dont KeePassXC, Strongbox et KeePassium.",
                    "Toutes les fonctions de KeeForge sont incluses, sans offre premium ni télémétrie."
                ]
            },
            {
                "title": "Face aux autres clients KeePass",
                "bullets": [
                    "Des apps natives pour iPhone, iPad et Mac, adaptées à la navigation et aux commandes de chaque plateforme.",
                    "Remplissage des mots de passe, passkeys et codes de vérification sont inclus.",
                    "La détection des conflits et les sauvegardes automatiques protègent les modifications de votre base."
                ]
            }
        ]
    },
    "beta": {
        "eyebrow": "BÊTA PUBLIQUE",
        "h2": "Essayez la prochaine version<br>avant sa sortie.",
        "body": "Les nouvelles versions sont diffusées sur TestFlight avant d’arriver sur l’App Store.",
        "availability": "La disponibilité peut varier selon la plateforme pendant l’examen d’Apple. Si une bêta n’accepte pas de testeurs, réessayez plus tard.",
        "warningTitle": "Testez avec une copie de votre base de données, pas avec votre coffre-fort principal.",
        "warningBody": "Les versions bêta peuvent contenir des bugs absents de l’application publiée — et elles remplacent l’installation de l’App Store tout en ouvrant les mêmes fichiers .kdbx réels. Dupliquez d’abord une base de données, puis pointez la bêta vers la copie.",
        "iosCTA": "Bêta iPhone et iPad",
        "macCTA": "Bêta Mac"
    },
    "faq": {
        "items": [
            {
                "q": "KeeForge est-il vraiment gratuit ?",
                "a": "Oui. Toutes les fonctions sont gratuites, sans abonnement, publicité ni offre premium. Pour aider, ajoutez une étoile au dépôt ou soutenez le développement."
            },
            {
                "q": "Quels appareils sont pris en charge ?",
                "a": "KeeForge fonctionne sur iPhone et iPad avec iOS 18 ou ultérieur, et sur Mac avec macOS 15 ou ultérieur. Chaque plateforme dispose d’une app native."
            },
            {
                "q": "Fonctionne-t-elle avec ma base de données KeePass existante ?",
                "a": "KeeForge lit et écrit des bases de données KDBX 4.x avec AES-256, ChaCha20 ou Twofish, associés à AES-KDF ou Argon2. Les bases de données KDBX 3.1 s’ouvrent en lecture seule."
            },
            {
                "q": "Puis-je utiliser la même base sur mon iPhone et mon Mac ?",
                "a": "Oui. KeeForge lit et écrit les fichiers KDBX 4.x sur chaque appareil. Placez la base dans un emplacement accessible aux deux, comme WebDAV ou un dossier synchronisé. KeeForge n’héberge ni ne transfère automatiquement votre coffre."
            },
            {
                "q": "Où sont stockés mes mots de passe ?",
                "a": "Dans votre base chiffrée, sur votre appareil ou dans le stockage de votre choix. Sur iPhone et iPad : Fichiers, iCloud Drive, Dropbox, OneDrive ou WebDAV. Sur Mac : fichiers locaux, dossiers cloud synchronisés ou bases WebDAV. KeeForge n’héberge pas vos mots de passe."
            },
            {
                "q": "Comment fonctionne le remplissage automatique ?",
                "a": "Activez KeeForge comme fournisseur de mots de passe dans les réglages système. Dans une app ou un navigateur compatible, choisissez un identifiant enregistré et déverrouillez KeeForge avec Face ID, Touch ID ou les identifiants de votre base."
            },
            {
                "q": "Comment obtenir KeeForge pour Mac ?",
                "a": "Téléchargez-le depuis le Mac App Store ou directement. Les deux versions sont gratuites et nécessitent macOS 15 ou ultérieur."
            },
            {
                "q": "Puis-je examiner la sécurité de l’app ?",
                "a": "Oui. Lisez le code, compilez l’app vous-même et consultez le rapport d’audit de sécurité public. Le dépôt documente aussi les tests de compatibilité des bases et les contrôles avant publication."
            }
        ]
    },
    "footer": {
        "copy": "© 2026 · GPL 3.0 · Créé par une petite équipe",
        "privacy": "Confidentialité",
        "privacyHref": "/fr/privacy",
        "support": "Support"
    },
    "downloads": {
        "ios": "Pour iPhone et iPad",
        "mac": "Pour Mac",
        "direct": "Téléchargement direct Mac",
        "iosRequirement": "iOS 18 ou ultérieur",
        "macRequirement": "macOS 15 ou ultérieur"
    },
    "screenshots": {
        "iosAlt": "Liste des bases KeeForge sur iPhone",
        "macAlt": "Fenêtre native de KeeForge sur Mac avec groupes, entrées et détails du mot de passe",
        "groupsAlt": "Groupes et recherche de KeeForge sur iPhone",
        "editAlt": "Éditeur d’entrées de KeeForge sur Mac",
        "iosEditAlt": "L’éditeur d’entrées KeeForge sur iPhone"
    },
    "everyday": {
        "eyebrow": "Au quotidien",
        "title": "Moins de saisie.\nToujours vos mots de passe.",
        "body": "Déverrouillez votre coffre, remplissez un identifiant ou copiez un code de vérification sans interrompre votre activité.",
        "items": [
            {
                "title": "Face ID et Touch ID",
                "body": "Utilisez la biométrie de votre appareil ou votre mot de passe maître et votre fichier clé."
            },
            {
                "title": "Remplissage des mots de passe",
                "body": "Remplissez vos identifiants dans les apps et navigateurs compatibles grâce au remplissage automatique du système."
            },
            {
                "title": "Passkeys et codes de vérification",
                "body": "Utilisez les passkeys compatibles KeePassXC et les codes de vérification temporaires enregistrés dans votre base."
            }
        ]
    }
};

const es: typeof en = {
    "lang": "es",
    "path": "/es/",
    "title": "KeeForge — KeePass gratuito y de código abierto para iOS / macOS",
    "description": "Gratis, de código abierto y diseñada para tus dispositivos. Abre tus bóvedas .kdbx, desbloquéalas con Face ID o Touch ID y autorrellena contraseñas donde las necesites. iOS 18 o posterior. macOS 15 o posterior.",
    "nav": {
        "features": "Funciones",
        "faq": "Preguntas frecuentes",
        "changelog": "Historial de cambios",
        "audit": "Auditoría de seguridad",
        "source": "Código fuente",
        "download": "Descargar",
        "menu": "Menú",
        "skip": "Ir al contenido"
    },
    "hero": {
        "h1": "Una app KeePass para <span class=\"accent\">iPhone, iPad y Mac.</span>",
        "lead": "Gratis, de código abierto y diseñada para tus dispositivos. Abre tus bóvedas <code>.kdbx</code>, desbloquéalas con Face ID o Touch ID y autorrellena contraseñas donde las necesites."
    },
    "trustPills": [
        {
            "k": "01",
            "t": "Código abierto",
            "d": "GPL 3.0. Audite cada línea."
        },
        {
            "k": "02",
            "t": "Compatible con KeePass",
            "d": "Lectura/escritura de KDBX 4.x. KDBX 3.1 solo lectura."
        },
        {
            "k": "03",
            "t": "Gratis, para siempre",
            "d": "Sin suscripción, sin anuncios, sin ventas adicionales."
        },
        {
            "k": "04",
            "t": "Biometría + autorrelleno",
            "d": "Face ID o Touch ID. Menos pasos."
        }
    ],
    "features": [
        {
            "eyebrow": "MUCHAS BÓVEDAS",
            "title": "Todas tus bases de datos.\nDonde las necesitas.",
            "body": "Bóvedas personales, de trabajo y compartidas en una sola app. Abre los archivos KeePass que ya tienes y guárdalos donde tú elijas.",
            "points": [
                "Abre varias bases de datos en local o mediante WebDAV",
                "Usa una contraseña maestra, un archivo de clave o ambos",
                "Sigue usando los mismos archivos con otras apps KeePass"
            ],
            "iosNote": "Abre archivos desde Archivos o iCloud Drive. Conecta directamente Dropbox, OneDrive o WebDAV.",
            "macNote": "Abre archivos locales o carpetas sincronizadas por tu app de nube. Conecta directamente WebDAV."
        },
        {
            "eyebrow": "ORGANIZAR Y ENCONTRAR",
            "title": "Encuentra la entrada\nque buscas.",
            "body": "Recorre la estructura de carpetas que ya conoces. Busca títulos, usuarios, URL y notas en toda la bóveda. Abre una entrada para copiar, revelar o visitar su sitio web.",
            "points": [
                "Organiza entradas en grupos jerárquicos",
                "Mueve entradas y grupos a la papelera",
                "Consulta y comparte adjuntos sin exportar la bóveda"
            ],
            "iosNote": "Navegación sencilla en iPhone y un espacio de trabajo dividido en iPad.",
            "macNote": "Grupos, entradas y detalles en una ventana, con menús nativos y atajos de teclado."
        },
        {
            "eyebrow": "EDITAR EN EL DISPOSITIVO",
            "title": "Haz un cambio.\nGuárdalo en tu bóveda.",
            "body": "Crea y edita entradas en tu teléfono, tableta o Mac. Actualiza usuarios, contraseñas, URL, etiquetas y notas, y guarda los cambios cifrados en el archivo .kdbx original.",
            "points": [
                "Genera una contraseña segura sin salir del editor",
                "Crea bases KDBX 4.x en local o mediante WebDAV",
                "Usa el modo de solo lectura cuando no quieras hacer cambios"
            ],
            "iosNote": "",
            "macNote": ""
        }
    ],
    "safety": {
        "eyebrow": "SEGURIDAD DE LOS DATOS",
        "h2": "Pruebas para proteger\ncada parte de tu bóveda.",
        "lead": "Un gestor de contraseñas nunca debe corromper su bóveda ni perder silenciosamente ninguna parte de ella. Antes de publicar cualquier cambio, pruebas automatizadas verifican:",
        "items": [
            {
                "title": "No se pierde nada al guardar.",
                "body": "Cada tipo de edición se guarda y se vuelve a leer pieza por pieza — contraseñas, notas, archivos adjuntos, historial de entradas e incluso datos de otras apps de KeePass que KeeForge no reconoce deben volver exactamente como se introdujeron."
            },
            {
                "title": "Su archivo está protegido antes de tocarlo.",
                "body": "KeeForge se niega a sobrescribir cambios hechos desde otro lugar mientras usted tenía el archivo abierto, escribe una copia de seguridad con marca de tiempo antes de cada guardado, y rechaza directamente las bases de datos dañadas en lugar de cargar datos parciales."
            },
            {
                "title": "Un programa independiente lo confirma.",
                "body": "Cada versión debe superar una prueba de control en la que KeePassXC — una app de KeePass muy usada que no comparte código con KeeForge — abre las bases de datos escritas por KeeForge, descifra las contraseñas y confirma que los archivos adjuntos coinciden bit a bit. Las bases de datos creadas por otro software de KeePass deben, a su vez, abrirse en KeeForge y seguir siendo legibles en otros programas después de que KeeForge las guarde."
            }
        ],
        "linkLabel": "Lea cómo se prueba",
        "linkHref": "https://github.com/KeeForge/KeeForge/blob/main/ci_scripts/README.md"
    },
    "compare": {
        "eyebrow": "CÓMO SE COMPARA",
        "h2": "¿Ya usa un gestor de contraseñas? Aquí es donde encaja KeeForge.",
        "cards": [
            {
                "title": "Frente al Llavero de iCloud",
                "bullets": [
                    "Guarda contraseñas en archivos KeePass portátiles que también funcionan con apps compatibles en dispositivos que no son de Apple.",
                    "Elige dónde guardar tu base cifrada: almacenamiento local, WebDAV o una carpeta sincronizada en la nube.",
                    "Lee el código para ver cómo la app trata tus datos."
                ]
            },
            {
                "title": "Frente a 1Password y Bitwarden",
                "bullets": [
                    "KeeForge no necesita cuenta de servicio ni suscripción. Tu bóveda es un archivo, no una cuenta alojada por KeeForge.",
                    "Sigue usando el ecosistema abierto KeePass, como KeePassXC, Strongbox y KeePassium.",
                    "Todas las funciones de KeeForge están incluidas, sin nivel premium ni telemetría."
                ]
            },
            {
                "title": "Frente a otros clientes KeePass",
                "bullets": [
                    "Apps nativas para iPhone, iPad y Mac, adaptadas a la navegación y los controles de cada plataforma.",
                    "Autorrelleno, passkeys y códigos de verificación incluidos.",
                    "La detección de conflictos y las copias automáticas protegen los cambios de tu base de datos."
                ]
            }
        ]
    },
    "beta": {
        "eyebrow": "BETA PÚBLICA",
        "h2": "Pruebe la próxima versión<br>antes de que se publique.",
        "body": "Las nuevas versiones se publican en TestFlight antes de llegar a la App Store.",
        "availability": "La disponibilidad puede variar por plataforma mientras Apple revisa una compilación. Si una beta no acepta participantes, vuelve más tarde.",
        "warningTitle": "Pruebe con una copia de su base de datos, no con su bóveda principal.",
        "warningBody": "Las compilaciones beta pueden tener errores que la app publicada no tiene — y sustituyen la instalación de la App Store, abriendo los mismos archivos .kdbx reales. Duplique primero una base de datos y apunte la beta a la copia.",
        "iosCTA": "Beta para iPhone y iPad",
        "macCTA": "Beta para Mac"
    },
    "faq": {
        "items": [
            {
                "q": "¿KeeForge es realmente gratis?",
                "a": "Sí. Todas las funciones son gratuitas, sin suscripción, anuncios ni nivel premium. Si quieres ayudar, dale una estrella al repositorio o apoya el desarrollo."
            },
            {
                "q": "¿Qué dispositivos admite?",
                "a": "KeeForge admite iPhone y iPad con iOS 18 o posterior y Mac con macOS 15 o posterior. Cada plataforma tiene una app nativa."
            },
            {
                "q": "¿Funciona con mi base de datos de KeePass existente?",
                "a": "KeeForge lee y escribe bases de datos KDBX 4.x con AES-256, ChaCha20 o Twofish, junto con AES-KDF o Argon2. Las bases de datos KDBX 3.1 se abren en modo de solo lectura."
            },
            {
                "q": "¿Puedo usar la misma base en mi teléfono y mi Mac?",
                "a": "Sí. KeeForge lee y escribe archivos KDBX 4.x en cada dispositivo. Guarda la base donde ambos puedan acceder, como WebDAV o una carpeta sincronizada. KeeForge no aloja ni transfiere tu bóveda automáticamente."
            },
            {
                "q": "¿Dónde se guardan mis contraseñas?",
                "a": "En tu base cifrada, en tu dispositivo o donde tú elijas. En iPhone y iPad puedes usar Archivos, iCloud Drive, Dropbox, OneDrive o WebDAV. En Mac puedes abrir archivos locales, carpetas sincronizadas en la nube o bases WebDAV. KeeForge no aloja tus contraseñas."
            },
            {
                "q": "¿Cómo funciona el autorrelleno?",
                "a": "Activa KeeForge como proveedor de contraseñas en los ajustes del sistema. En una app o navegador compatible, elige una credencial guardada y desbloquea KeeForge con Face ID, Touch ID o los datos de acceso de tu base."
            },
            {
                "q": "¿Cómo obtengo KeeForge para Mac?",
                "a": "Descárgalo desde el Mac App Store o directamente. Ambas versiones son gratis y requieren macOS 15 o posterior."
            },
            {
                "q": "¿Puedo examinar la seguridad de la app?",
                "a": "Sí. Lee el código, compílalo tú mismo y revisa el informe público de seguridad. El repositorio también documenta las pruebas de compatibilidad de bases de datos y las comprobaciones previas a cada versión."
            }
        ]
    },
    "footer": {
        "copy": "© 2026 · GPL 3.0 · Hecho por un pequeño equipo",
        "privacy": "Privacidad",
        "privacyHref": "/es/privacy",
        "support": "Soporte"
    },
    "downloads": {
        "ios": "Para iPhone y iPad",
        "mac": "Para Mac",
        "direct": "Descarga directa para Mac",
        "iosRequirement": "iOS 18 o posterior",
        "macRequirement": "macOS 15 o posterior"
    },
    "screenshots": {
        "iosAlt": "Lista de bases de datos de KeeForge en iPhone",
        "macAlt": "Ventana nativa de KeeForge en Mac con grupos, entradas y detalles de contraseñas",
        "groupsAlt": "Grupos y búsqueda de KeeForge en iPhone",
        "editAlt": "Editor de entradas de KeeForge en Mac",
        "iosEditAlt": "El editor de entradas de KeeForge en iPhone"
    },
    "everyday": {
        "eyebrow": "Para tu día a día",
        "title": "Menos tecleo.\nTus contraseñas siguen siendo tuyas.",
        "body": "Desbloquea la bóveda, rellena un inicio de sesión o copia un código de verificación sin interrumpir lo que haces.",
        "items": [
            {
                "title": "Face ID y Touch ID",
                "body": "Desbloquea con la biometría de tu dispositivo o con tu contraseña maestra y archivo de clave."
            },
            {
                "title": "Autorrelleno de contraseñas",
                "body": "Rellena credenciales en apps y navegadores compatibles mediante el autorrelleno del sistema."
            },
            {
                "title": "Passkeys y códigos de verificación",
                "body": "Usa passkeys compatibles con KeePassXC y códigos de verificación temporales guardados en tu base de datos."
            }
        ]
    }
};

const zhHans: typeof en = {
    "lang": "zh-hans",
    "path": "/zh-hans/",
    "title": "KeeForge — 免费开源的 iOS / macOS KeePass 密码管理器",
    "description": "免费、开源，为你的设备原生打造。打开现有的 .kdbx 数据库，通过 Face ID 或 Touch ID 解锁，随时自动填充所需的密码。 iOS 18 或更新版本. macOS 15 或更新版本.",
    "nav": {
        "features": "功能",
        "faq": "常见问题",
        "changelog": "更新日志",
        "audit": "安全审计",
        "source": "源代码",
        "download": "下载",
        "menu": "菜单",
        "skip": "跳转到正文"
    },
    "hero": {
        "h1": "适用于 <span class=\"accent\">iPhone、iPad 和 Mac</span> 的 KeePass 应用。",
        "lead": "免费、开源，为你的设备原生打造。打开现有的 <code>.kdbx</code> 数据库，通过 Face ID 或 Touch ID 解锁，随时自动填充所需的密码。"
    },
    "trustPills": [
        {
            "k": "01",
            "t": "开源",
            "d": "GPL 3.0。每一行代码都可审计。"
        },
        {
            "k": "02",
            "t": "兼容 KeePass",
            "d": "KDBX 4.x 可读写。KDBX 3.1 只读。"
        },
        {
            "k": "03",
            "t": "永久免费",
            "d": "无订阅、无广告、无付费升级。"
        },
        {
            "k": "04",
            "t": "生物识别与自动填充",
            "d": "Face ID 或 Touch ID，操作更简便。"
        }
    ],
    "features": [
        {
            "eyebrow": "多个保险库",
            "title": "所有数据库，\n随时取用。",
            "body": "个人、工作和共享数据库，集中在一个应用中。打开现有的 KeePass 文件，并将它们保存在你选择的位置。",
            "points": [
                "通过本地文件或 WebDAV 打开多个数据库",
                "使用主密码、密钥文件，或同时使用两者",
                "继续在其他 KeePass 应用中使用同一文件"
            ],
            "iosNote": "从“文件”或 iCloud Drive 打开文件，或直接连接 Dropbox、OneDrive 和 WebDAV。",
            "macNote": "打开本地文件或云盘应用同步的文件夹，也可直接连接 WebDAV。"
        },
        {
            "eyebrow": "整理与查找",
            "title": "找到你需要的条目。",
            "body": "按熟悉的文件夹结构浏览，在整个数据库中搜索标题、用户名、网址和备注。打开条目即可复制、显示内容或访问网站。",
            "points": [
                "通过层级分组整理条目",
                "将条目和分组移到回收站",
                "预览和分享附件，无需导出数据库"
            ],
            "iosNote": "iPhone 上的简洁导航，iPad 上的分栏工作区。",
            "macNote": "在同一窗口查看分组、条目和详情，支持原生菜单和键盘快捷键。"
        },
        {
            "eyebrow": "在设备上编辑",
            "title": "修改条目，\n保存回数据库。",
            "body": "在手机、平板或 Mac 上创建和编辑条目。更新用户名、密码、网址、标签和备注，再将加密后的修改保存回原始 .kdbx 文件。",
            "points": [
                "在编辑器内生成高强度密码",
                "在本地或通过 WebDAV 创建 KDBX 4.x 数据库",
                "不想修改时，可启用只读模式"
            ],
            "iosNote": "",
            "macNote": ""
        }
    ],
    "safety": {
        "eyebrow": "数据安全",
        "h2": "通过测试，\n保护数据库中的每一部分。",
        "lead": "密码管理器绝不能损坏你的保险库，也不能悄悄丢失其中的任何部分。每项更改发布之前，自动化测试都会验证：",
        "items": [
            {
                "title": "保存时不丢失任何数据。",
                "body": "每一种编辑都会被保存并逐项读回——密码、备注、附件、条目历史记录，甚至其他 KeePass 应用写入的、KeeForge 并不认识的数据，都必须与写入时完全一致地读出。"
            },
            {
                "title": "你的文件在被写入之前就受到保护。",
                "body": "KeeForge 拒绝覆盖你打开文件期间其他程序做出的更改，在每次保存前写入带时间戳的备份，并且会直接拒绝已损坏的数据库，而不是加载不完整的数据。"
            },
            {
                "title": "一个独立的程序予以确认。",
                "body": "每个版本都必须通过一道检验：KeePassXC——一款与 KeeForge 没有任何共享代码、被广泛使用的 KeePass 应用——打开 KeeForge 写入的数据库，解密其中的密码，并确认附件逐位一致。同样，其他 KeePass 软件创建的数据库必须能在 KeeForge 中打开，并在 KeeForge 保存后仍能被其他软件读取。"
            }
        ],
        "linkLabel": "了解测试方式",
        "linkHref": "https://github.com/KeeForge/KeeForge/blob/main/ci_scripts/README.md"
    },
    "compare": {
        "eyebrow": "横向对比",
        "h2": "已经在用密码管理器？看看 KeeForge 的定位。",
        "cards": [
            {
                "title": "与 iCloud 钥匙串相比",
                "bullets": [
                    "将密码保存在便于迁移的 KeePass 文件中，也能在非 Apple 设备的兼容应用中使用。",
                    "自行选择加密数据库的存储位置：本地、WebDAV 或云盘同步文件夹。",
                    "阅读源代码，了解应用如何处理你的数据。"
                ]
            },
            {
                "title": "与 1Password、Bitwarden 相比",
                "bullets": [
                    "KeeForge 无需服务账号或订阅。你的数据库是一个文件，而非 KeeForge 托管的账号。",
                    "继续使用开放的 KeePass 生态，包括 KeePassXC、Strongbox 和 KeePassium。",
                    "KeeForge 的所有功能均已包含，没有高级付费层级或遥测。"
                ]
            },
            {
                "title": "与其他 KeePass 客户端相比",
                "bullets": [
                    "为 iPhone、iPad 和 Mac 原生打造，遵循各平台的导航与操作习惯。",
                    "密码自动填充、通行密钥和验证码，全部包含。",
                    "冲突检测和自动备份保护对数据库的修改。"
                ]
            }
        ]
    },
    "beta": {
        "eyebrow": "公开测试版",
        "h2": "抢先试用<br>下一个版本。",
        "body": "新版本会先通过 TestFlight 发布，然后才登陆 App Store。",
        "availability": "Apple 审核期间，各平台的测试版开放时间可能不同。如果暂不接受测试者，请稍后再试。",
        "warningTitle": "请用数据库的副本测试，不要使用你的主保险库。",
        "warningBody": "测试版可能带有正式版没有的问题——它会替换从 App Store 安装的版本，并打开同样的真实 .kdbx 文件。请先复制一份数据库，让测试版只打开副本。",
        "iosCTA": "iPhone / iPad 测试版",
        "macCTA": "Mac 测试版"
    },
    "faq": {
        "items": [
            {
                "q": "KeeForge 真的免费吗？",
                "a": "是的。所有功能免费，无订阅、广告或高级付费层级。如果你愿意帮忙，可以给代码仓库加星，或支持开发。"
            },
            {
                "q": "支持哪些设备？",
                "a": "KeeForge 支持运行 iOS 18 或更新版本的 iPhone 和 iPad，以及运行 macOS 15 或更新版本的 Mac。每个平台都有原生应用。"
            },
            {
                "q": "它能用我现有的 KeePass 数据库吗？",
                "a": "KeeForge 可读写使用 AES-256、ChaCha20 或 Twofish 搭配 AES-KDF 或 Argon2 的 KDBX 4.x 数据库。KDBX 3.1 数据库以只读模式打开。"
            },
            {
                "q": "手机和 Mac 可以使用同一数据库吗？",
                "a": "可以。KeeForge 在各设备上均可读写 KDBX 4.x 文件。将数据库保存在两台设备都能访问的位置，例如 WebDAV 或同步文件夹。KeeForge 不托管或自动传输你的数据库。"
            },
            {
                "q": "我的密码保存在哪里？",
                "a": "保存在设备或自选存储位置的加密数据库中。iPhone 和 iPad 可使用“文件”、iCloud Drive、Dropbox、OneDrive 或 WebDAV。Mac 可打开本地文件、云盘同步文件夹或 WebDAV 数据库。KeeForge 不托管你的密码。"
            },
            {
                "q": "自动填充如何使用？",
                "a": "在设备的系统设置中启用 KeeForge 作为密码提供程序。在支持的应用或浏览器中选择已保存的凭据，再通过 Face ID、Touch ID 或数据库凭据解锁 KeeForge。"
            },
            {
                "q": "如何获取 Mac 版 KeeForge？",
                "a": "从 Mac App Store 下载，或直接下载 Mac 版。两者都免费，需要 macOS 15 或更新版本。"
            },
            {
                "q": "我可以审查应用的安全性吗？",
                "a": "可以。阅读源代码、自行构建，并查看公开的安全审计记录。代码仓库还记录了数据库兼容性测试和发布检查。"
            }
        ]
    },
    "footer": {
        "copy": "© 2026 · GPL 3.0 · 由小团队开发",
        "privacy": "隐私",
        "privacyHref": "/zh-hans/privacy",
        "support": "支持"
    },
    "downloads": {
        "ios": "下载 iPhone / iPad 版",
        "mac": "下载 Mac 版",
        "direct": "直接下载 Mac 版",
        "iosRequirement": "iOS 18 或更新版本",
        "macRequirement": "macOS 15 或更新版本"
    },
    "screenshots": {
        "iosAlt": "iPhone 上的 KeeForge 数据库列表",
        "macAlt": "Mac 上的 KeeForge 原生窗口，显示分组、条目和密码详情",
        "groupsAlt": "iPhone 上的 KeeForge 分组和搜索",
        "editAlt": "Mac 上的 KeeForge 条目编辑器",
        "iosEditAlt": "iPhone 上的 KeeForge 条目编辑器"
    },
    "everyday": {
        "eyebrow": "融入日常使用",
        "title": "少些输入，\n密码仍由你掌控。",
        "body": "解锁数据库、填充登录信息或复制验证码，不打断手头的事。",
        "items": [
            {
                "title": "Face ID 与 Touch ID",
                "body": "使用设备支持的生物识别方式解锁，也可使用主密码和密钥文件。"
            },
            {
                "title": "密码自动填充",
                "body": "通过系统自动填充功能，在支持的应用和浏览器中填充登录信息。"
            },
            {
                "title": "通行密钥与验证码",
                "body": "使用数据库中保存的 KeePassXC 兼容通行密钥和基于时间的一次性验证码。"
            }
        ]
    }
};

const zhHant: typeof en = {
    "lang": "zh-hant",
    "path": "/zh-hant/",
    "title": "KeeForge — 免費、開源的 iOS / macOS 版 KeePass",
    "description": "免費、開源，為你的裝置原生打造。開啟現有的 .kdbx 資料庫，透過 Face ID 或 Touch ID 解鎖，隨時自動填寫所需的密碼。 iOS 18 或更新版本. macOS 15 或更新版本.",
    "nav": {
        "features": "功能",
        "faq": "常見問題",
        "changelog": "更新記錄",
        "audit": "安全性稽核",
        "source": "原始碼",
        "download": "下載",
        "menu": "選單",
        "skip": "跳到主要內容"
    },
    "hero": {
        "h1": "適用於 <span class=\"accent\">iPhone、iPad 和 Mac</span> 的 KeePass App。",
        "lead": "免費、開源，為你的裝置原生打造。開啟現有的 <code>.kdbx</code> 資料庫，透過 Face ID 或 Touch ID 解鎖，隨時自動填寫所需的密碼。"
    },
    "trustPills": [
        {
            "k": "01",
            "t": "開源",
            "d": "GPL 3.0。每一行程式碼皆可稽核。"
        },
        {
            "k": "02",
            "t": "相容 KeePass",
            "d": "KDBX 4.x 可讀寫，KDBX 3.1 唯讀。"
        },
        {
            "k": "03",
            "t": "永久免費",
            "d": "無訂閱、無廣告、無加購。"
        },
        {
            "k": "04",
            "t": "生物辨識與自動填寫",
            "d": "Face ID 或 Touch ID，操作更簡便。"
        }
    ],
    "features": [
        {
            "eyebrow": "多個保險庫",
            "title": "所有資料庫，\n隨時取用。",
            "body": "個人、工作和共用資料庫，集中在一個 App 中。開啟現有的 KeePass 檔案，並將它們儲存在你選擇的位置。",
            "points": [
                "透過本機檔案或 WebDAV 開啟多個資料庫",
                "使用主密碼、金鑰檔案，或同時使用兩者",
                "繼續在其他 KeePass App 中使用相同檔案"
            ],
            "iosNote": "從「檔案」或 iCloud Drive 開啟檔案，或直接連接 Dropbox、OneDrive 和 WebDAV。",
            "macNote": "開啟本機檔案或雲端 App 同步的資料夾，也可直接連接 WebDAV。"
        },
        {
            "eyebrow": "整理與搜尋",
            "title": "找到你需要的項目。",
            "body": "依熟悉的資料夾結構瀏覽，在整個資料庫中搜尋標題、使用者名稱、網址與備註。開啟項目即可複製、顯示內容或前往網站。",
            "points": [
                "透過階層式群組整理項目",
                "將項目與群組移至資源回收筒",
                "預覽與分享附件，無需匯出資料庫"
            ],
            "iosNote": "iPhone 上的簡潔導覽，iPad 上的分割工作區。",
            "macNote": "在同一視窗查看群組、項目和詳細資訊，支援原生選單與鍵盤快速鍵。"
        },
        {
            "eyebrow": "在裝置上編輯",
            "title": "修改項目，\n存回資料庫。",
            "body": "在手機、平板或 Mac 上建立與編輯項目。更新使用者名稱、密碼、網址、標籤和備註，再將加密後的變更存回原始 .kdbx 檔案。",
            "points": [
                "在編輯器中產生高強度密碼",
                "在本機或透過 WebDAV 建立 KDBX 4.x 資料庫",
                "不想修改時，可啟用唯讀模式"
            ],
            "iosNote": "",
            "macNote": ""
        }
    ],
    "safety": {
        "eyebrow": "資料安全",
        "h2": "透過測試，\n保護資料庫的每個部分。",
        "lead": "密碼管理員絕不能損毀你的保險庫，也不能悄悄遺失其中任何一部分。每項變更在發佈前，都必須通過自動化測試驗證：",
        "items": [
            {
                "title": "儲存時，什麼都不會遺失。",
                "body": "每一種編輯都會先儲存，再逐項讀回比對——密碼、備註、附件、項目歷史記錄，甚至是 KeeForge 無法辨識、來自其他 KeePass App 的資料，都必須與寫入時分毫不差。"
            },
            {
                "title": "在動到你的檔案之前，先保護好它。",
                "body": "KeeForge 拒絕覆寫你開啟檔案期間由其他地方所做的變更，在每次儲存前寫入含時間戳記的備份，並直接拒絕已損毀的資料庫，而不是載入不完整的資料。"
            },
            {
                "title": "由獨立程式交叉驗證。",
                "body": "每個版本都必須通過一道關卡：由 KeePassXC——一款廣泛使用、與 KeeForge 不共用任何程式碼的 KeePass App——開啟 KeeForge 寫入的資料庫、解密其中的密碼，並確認附件逐位元一致。同樣地，其他 KeePass 軟體建立的資料庫必須能在 KeeForge 中開啟，且經 KeeForge 儲存後仍可在其他軟體中正常讀取。"
            }
        ],
        "linkLabel": "瞭解測試方式",
        "linkHref": "https://github.com/KeeForge/KeeForge/blob/main/ci_scripts/README.md"
    },
    "compare": {
        "eyebrow": "橫向比較",
        "h2": "已經在用密碼管理員？看看 KeeForge 的定位。",
        "cards": [
            {
                "title": "與 iCloud 鑰匙圈相比",
                "bullets": [
                    "將密碼儲存在方便移轉的 KeePass 檔案中，也能在非 Apple 裝置的相容 App 中使用。",
                    "自行選擇加密資料庫的位置：本機、WebDAV 或雲端同步資料夾。",
                    "閱讀原始碼，了解 App 如何處理你的資料。"
                ]
            },
            {
                "title": "與 1Password、Bitwarden 相比",
                "bullets": [
                    "KeeForge 無需服務帳號或訂閱。你的資料庫是一個檔案，而非 KeeForge 託管的帳號。",
                    "繼續使用開放的 KeePass 生態，包括 KeePassXC、Strongbox 和 KeePassium。",
                    "KeeForge 的所有功能均已包含，沒有進階付費層級或遙測。"
                ]
            },
            {
                "title": "與其他 KeePass 用戶端相比",
                "bullets": [
                    "為 iPhone、iPad 和 Mac 原生打造，遵循各平台的導覽與操作習慣。",
                    "密碼自動填寫、通行密鑰和驗證碼，全部包含。",
                    "衝突偵測和自動備份保護對資料庫的修改。"
                ]
            }
        ]
    },
    "beta": {
        "eyebrow": "公開測試版",
        "h2": "在正式推出之前，<br>搶先試用下一個版本。",
        "body": "新版本會先在 TestFlight 上發佈，之後才會登上 App Store。",
        "availability": "Apple 審核期間，各平台的測試版開放時間可能不同。若暫不接受測試者，請稍後再試。",
        "warningTitle": "請用資料庫的複本測試，不要用你的主要保險庫。",
        "warningBody": "測試版可能帶有正式版沒有的錯誤——而且它會取代 App Store 安裝的版本，並開啟同樣真實的 .kdbx 檔案。請先複製一份資料庫，讓測試版只開啟複本。",
        "iosCTA": "iPhone / iPad 測試版",
        "macCTA": "Mac 測試版"
    },
    "faq": {
        "items": [
            {
                "q": "KeeForge 真的免費嗎？",
                "a": "是的。所有功能免費，無訂閱、廣告或進階付費層級。如果你願意幫忙，可以為程式碼儲存庫加星，或支持開發。"
            },
            {
                "q": "支援哪些裝置？",
                "a": "KeeForge 支援執行 iOS 18 或更新版本的 iPhone 和 iPad，以及執行 macOS 15 或更新版本的 Mac。每個平台都有原生 App。"
            },
            {
                "q": "它能開啟我現有的 KeePass 資料庫嗎？",
                "a": "KeeForge 可讀寫採用 AES-256、ChaCha20 或 Twofish 搭配 AES-KDF 或 Argon2 的 KDBX 4.x 資料庫。KDBX 3.1 資料庫會以唯讀模式開啟。"
            },
            {
                "q": "手機和 Mac 可以使用同一資料庫嗎？",
                "a": "可以。KeeForge 在各裝置上均可讀寫 KDBX 4.x 檔案。將資料庫儲存在兩台裝置都能存取的位置，例如 WebDAV 或同步資料夾。KeeForge 不託管或自動傳輸你的資料庫。"
            },
            {
                "q": "我的密碼儲存在哪裡？",
                "a": "儲存在裝置或自選儲存位置的加密資料庫中。iPhone 和 iPad 可使用「檔案」、iCloud Drive、Dropbox、OneDrive 或 WebDAV。Mac 可開啟本機檔案、雲端同步資料夾或 WebDAV 資料庫。KeeForge 不託管你的密碼。"
            },
            {
                "q": "如何使用自動填寫？",
                "a": "在裝置的系統設定中啟用 KeeForge 作為密碼提供者。在支援的 App 或瀏覽器中選擇已儲存的憑證，再透過 Face ID、Touch ID 或資料庫憑證解鎖 KeeForge。"
            },
            {
                "q": "如何取得 Mac 版 KeeForge？",
                "a": "從 Mac App Store 下載，或直接下載 Mac 版。兩者都免費，需要 macOS 15 或更新版本。"
            },
            {
                "q": "我可以審查 App 的安全性嗎？",
                "a": "可以。閱讀原始碼、自行建置，並查看公開的安全性稽核記錄。程式碼儲存庫也記錄了資料庫相容性測試和發佈檢查。"
            }
        ]
    },
    "footer": {
        "copy": "© 2026 · GPL 3.0 · 由小團隊打造",
        "privacy": "隱私權",
        "privacyHref": "/zh-hant/privacy",
        "support": "支援"
    },
    "downloads": {
        "ios": "下載 iPhone / iPad 版",
        "mac": "下載 Mac 版",
        "direct": "直接下載 Mac 版",
        "iosRequirement": "iOS 18 或更新版本",
        "macRequirement": "macOS 15 或更新版本"
    },
    "screenshots": {
        "iosAlt": "iPhone 上的 KeeForge 資料庫列表",
        "macAlt": "Mac 上的 KeeForge 原生視窗，顯示群組、項目和密碼詳細資訊",
        "groupsAlt": "iPhone 上的 KeeForge 群組與搜尋",
        "editAlt": "Mac 上的 KeeForge 項目編輯器",
        "iosEditAlt": "iPhone 上的 KeeForge 項目編輯器"
    },
    "everyday": {
        "eyebrow": "融入日常使用",
        "title": "少些輸入，\n密碼仍由你掌控。",
        "body": "解鎖資料庫、填寫登入資訊或複製驗證碼，不打斷手邊的事。",
        "items": [
            {
                "title": "Face ID 與 Touch ID",
                "body": "使用裝置支援的生物辨識方式解鎖，也可使用主密碼和金鑰檔案。"
            },
            {
                "title": "密碼自動填寫",
                "body": "透過系統自動填寫功能，在支援的 App 與瀏覽器中填寫登入資訊。"
            },
            {
                "title": "通行密鑰與驗證碼",
                "body": "使用資料庫中儲存的 KeePassXC 相容通行密鑰與以時間為基礎的一次性驗證碼。"
            }
        ]
    }
};

const ja: typeof en = {
    "lang": "ja",
    "path": "/ja/",
    "title": "KeeForge — 無料・オープンソースの iOS / macOS 向け KeePass",
    "description": "無料、オープンソースで、お使いのデバイスに合わせたアプリです。既存の .kdbx データベースを開き、Face ID や Touch ID でロック解除。必要な場所でパスワードを自動入力できます。 iOS 18 以降. macOS 15 以降.",
    "nav": {
        "features": "機能",
        "faq": "よくある質問",
        "changelog": "変更履歴",
        "audit": "セキュリティ監査",
        "source": "ソースコード",
        "download": "ダウンロード",
        "menu": "メニュー",
        "skip": "本文へ移動"
    },
    "hero": {
        "h1": "<span class=\"accent\">iPhone、iPad、Mac</span> のための KeePass アプリ。",
        "lead": "無料、オープンソースで、お使いのデバイスに合わせたアプリです。既存の <code>.kdbx</code> データベースを開き、Face ID や Touch ID でロック解除。必要な場所でパスワードを自動入力できます。"
    },
    "trustPills": [
        {
            "k": "01",
            "t": "オープンソース",
            "d": "GPL 3.0。すべての行を検証できます。"
        },
        {
            "k": "02",
            "t": "KeePass 互換",
            "d": "KDBX 4.x は読み書き対応。KDBX 3.1 は読み取り専用。"
        },
        {
            "k": "03",
            "t": "ずっと無料",
            "d": "サブスクなし、広告なし、アップセルなし。"
        },
        {
            "k": "04",
            "t": "生体認証と自動入力",
            "d": "Face ID や Touch ID で、手間を減らす。"
        }
    ],
    "features": [
        {
            "eyebrow": "複数の保管庫",
            "title": "すべてのデータベースを、\n必要なときに。",
            "body": "個人用、仕事用、共有のデータベースをひとつのアプリに。既存の KeePass ファイルを開き、好きな場所に保存できます。",
            "points": [
                "ローカルや WebDAV から複数のデータベースを開く",
                "マスターパスワード、キーファイル、または両方を使用",
                "同じファイルをほかの KeePass アプリでも引き続き使用"
            ],
            "iosNote": "「ファイル」や iCloud Drive から開くほか、Dropbox、OneDrive、WebDAV に直接接続できます。",
            "macNote": "ローカルファイルやクラウドアプリの同期フォルダを開き、WebDAV にも直接接続できます。"
        },
        {
            "eyebrow": "整理と検索",
            "title": "探しているエントリが\n見つかる。",
            "body": "使い慣れたフォルダ構成で閲覧し、データベース全体のタイトル、ユーザー名、URL、メモを検索。エントリを開いてコピー、表示、Web サイトへの移動ができます。",
            "points": [
                "階層グループでエントリを整理",
                "エントリやグループをごみ箱へ移動",
                "データベースをエクスポートせずに添付ファイルを確認・共有"
            ],
            "iosNote": "iPhone ではシンプルなナビゲーション、iPad では分割表示の作業スペース。",
            "macNote": "グループ、エントリ、詳細をひとつのウィンドウに。ネイティブメニューとキーボードショートカットにも対応。"
        },
        {
            "eyebrow": "端末上で編集",
            "title": "変更して、\nデータベースに保存。",
            "body": "iPhone、iPad、Mac でエントリを作成・編集。ユーザー名、パスワード、URL、タグ、メモを更新し、暗号化した変更を元の .kdbx ファイルに保存します。",
            "points": [
                "エディタを離れずに強力なパスワードを生成",
                "ローカルや WebDAV に KDBX 4.x データベースを作成",
                "変更したくないときは読み取り専用モードを使用"
            ],
            "iosNote": "",
            "macNote": ""
        }
    ],
    "safety": {
        "eyebrow": "データの安全性",
        "h2": "データベースのすべてを\n守るためのテスト。",
        "lead": "パスワードマネージャーが保管庫を壊したり、その一部を黙って失ったりすることは、決してあってはなりません。変更が出荷される前に、自動テストが次のことを検証します。",
        "items": [
            {
                "title": "保存しても、何ひとつ失われない。",
                "body": "あらゆる種類の編集が保存され、ひとつずつ読み戻されます。パスワード、メモ、添付ファイル、エントリ履歴、さらには KeeForge が認識しない他の KeePass アプリのデータまで、すべてが入れたときとまったく同じ形で戻ってこなければなりません。"
            },
            {
                "title": "書き込む前に、ファイルを守る。",
                "body": "KeeForge は、あなたがファイルを開いているあいだに他所から加えられた変更を上書きすることを拒み、保存のたびにタイムスタンプ付きのバックアップを書き出し、壊れたデータベースは中途半端に読み込まず、きっぱり拒否します。"
            },
            {
                "title": "独立した別のプログラムが、それを裏づける。",
                "body": "すべてのリリースは、あるゲートを通過しなければなりません。KeeForge とコードを一切共有しない、広く使われている KeePass アプリ KeePassXC が、KeeForge の書き出したデータベースを開き、パスワードを復号し、添付ファイルがビット単位で一致することを確認します。同様に、他の KeePass ソフトウェアで作られたデータベースは KeeForge で開けなければならず、KeeForge が保存したあとも他のソフトウェアで読めなければなりません。"
            }
        ],
        "linkLabel": "テスト方法を読む",
        "linkHref": "https://github.com/KeeForge/KeeForge/blob/main/ci_scripts/README.md"
    },
    "compare": {
        "eyebrow": "他との比較",
        "h2": "すでにパスワードマネージャーを使っている？KeeForge の立ち位置はこちら。",
        "cards": [
            {
                "title": "iCloud キーチェーンとの違い",
                "bullets": [
                    "パスワードを持ち運べる KeePass ファイルに保存。Apple 以外のデバイスの互換アプリでも利用できます。",
                    "暗号化データベースの保存先は自由。ローカル、WebDAV、クラウドの同期フォルダを選べます。",
                    "ソースコードを読んで、データの扱いを確認できます。"
                ]
            },
            {
                "title": "1Password・Bitwarden との違い",
                "bullets": [
                    "KeeForge にサービスアカウントやサブスクリプションは不要。データベースはファイルであり、KeeForge がホストするアカウントではありません。",
                    "KeePassXC、Strongbox、KeePassium など、オープンな KeePass エコシステムを引き続き使えます。",
                    "KeeForge の全機能を利用でき、有料プランやテレメトリーはありません。"
                ]
            },
            {
                "title": "ほかの KeePass クライアントとの違い",
                "bullets": [
                    "iPhone、iPad、Mac 向けのネイティブアプリ。それぞれの操作やナビゲーションに合わせて設計しています。",
                    "パスワード自動入力、パスキー、確認コードをすべて利用できます。",
                    "競合チェックと自動バックアップでデータベースへの変更を保護します。"
                ]
            }
        ]
    },
    "beta": {
        "eyebrow": "公開ベータ",
        "h2": "次のバージョンを、<br>リリース前に。",
        "body": "新しいバージョンは、App Store に届く前に TestFlight で配信されます。",
        "availability": "Apple の審査中は、プラットフォームによって参加状況が異なる場合があります。募集が停止している場合は、後で確認してください。",
        "warningTitle": "メインの保管庫ではなく、データベースのコピーでテストしてください。",
        "warningBody": "ベータ版には、リリース版にはない不具合が含まれることがあります。しかも App Store 版を置き換え、同じ本物の .kdbx ファイルを開きます。まずデータベースを複製し、ベータ版にはそのコピーを開かせてください。",
        "iosCTA": "iPhone・iPad ベータ",
        "macCTA": "Mac ベータ"
    },
    "faq": {
        "items": [
            {
                "q": "KeeForge は本当に無料ですか？",
                "a": "はい。全機能が無料で、サブスクリプション、広告、有料プランはありません。応援していただける方は、リポジトリにスターを付けるか、開発をご支援ください。"
            },
            {
                "q": "どのデバイスに対応していますか？",
                "a": "iOS 18 以降の iPhone と iPad、macOS 15 以降の Mac に対応しています。それぞれにネイティブアプリを用意しています。"
            },
            {
                "q": "手持ちの KeePass データベースで使えますか？",
                "a": "KeeForge は、AES-256、ChaCha20、Twofish を AES-KDF または Argon2 と組み合わせた KDBX 4.x データベースを読み書きします。KDBX 3.1 のデータベースは読み取り専用で開きます。"
            },
            {
                "q": "iPhone と Mac で同じデータベースを使えますか？",
                "a": "はい。各デバイスで KDBX 4.x ファイルを読み書きできます。WebDAV や同期フォルダなど、両方からアクセスできる場所に保存してください。KeeForge がデータベースをホストしたり、自動で転送したりすることはありません。"
            },
            {
                "q": "パスワードはどこに保存されますか？",
                "a": "デバイス上、または選んだ保存先にある暗号化データベースに保存されます。iPhone と iPad では「ファイル」、iCloud Drive、Dropbox、OneDrive、WebDAV、Mac ではローカルファイル、クラウドの同期フォルダ、WebDAV を利用できます。KeeForge はパスワードをホストしません。"
            },
            {
                "q": "自動入力はどう使いますか？",
                "a": "デバイスのシステム設定で KeeForge をパスワードプロバイダとして有効にします。対応するアプリやブラウザで保存済みの認証情報を選び、Face ID、Touch ID、またはデータベースの認証情報でロック解除してください。"
            },
            {
                "q": "Mac 版はどこから入手できますか？",
                "a": "Mac App Store、または直接ダウンロードで入手できます。どちらも無料で、macOS 15 以降が必要です。"
            },
            {
                "q": "アプリの安全性を自分で確認できますか？",
                "a": "はい。コードを読み、自分でビルドし、公開されているセキュリティ監査記録を確認できます。リポジトリには、データベースの互換性テストやリリース前の検証も記載されています。"
            }
        ]
    },
    "footer": {
        "copy": "© 2026 · GPL 3.0 · 小さなチームで作っています",
        "privacy": "プライバシー",
        "privacyHref": "/ja/privacy",
        "support": "サポート"
    },
    "downloads": {
        "ios": "iPhone・iPad 版",
        "mac": "Mac 版",
        "direct": "Mac 版を直接ダウンロード",
        "iosRequirement": "iOS 18 以降",
        "macRequirement": "macOS 15 以降"
    },
    "screenshots": {
        "iosAlt": "iPhone の KeeForge データベース一覧",
        "macAlt": "グループ、エントリ、パスワードの詳細を表示する Mac の KeeForge ウィンドウ",
        "groupsAlt": "iPhone の KeeForge のグループと検索",
        "editAlt": "Mac の KeeForge エントリエディタ",
        "iosEditAlt": "iPhone の KeeForge エントリー編集画面"
    },
    "everyday": {
        "eyebrow": "日々の操作を快適に",
        "title": "入力を減らす。\nパスワードは自分の手に。",
        "body": "データベースのロック解除、ログイン情報の入力、確認コードのコピーを、作業の流れを止めずに。",
        "items": [
            {
                "title": "Face ID と Touch ID",
                "body": "デバイスの生体認証、またはマスターパスワードとキーファイルでロック解除できます。"
            },
            {
                "title": "パスワードの自動入力",
                "body": "システムの自動入力機能を通じて、対応するアプリやブラウザに認証情報を入力します。"
            },
            {
                "title": "パスキーと確認コード",
                "body": "データベースに保存された KeePassXC 互換のパスキーと、時間ベースの確認コードを使用できます。"
            }
        ]
    }
};

const it: typeof en = {
    "lang": "it",
    "path": "/it/",
    "title": "KeeForge — KeePass gratuito e open source per iOS / macOS",
    "description": "Gratuito, open source e pensato per i tuoi dispositivi. Apri i tuoi vault .kdbx, sbloccali con Face ID o Touch ID e inserisci automaticamente le password dove ti servono. iOS 18 o successivo. macOS 15 o successivo.",
    "nav": {
        "features": "Funzionalità",
        "faq": "FAQ",
        "changelog": "Registro delle modifiche",
        "audit": "Audit di sicurezza",
        "source": "Codice sorgente",
        "download": "Scarica",
        "menu": "Menu",
        "skip": "Vai al contenuto"
    },
    "hero": {
        "h1": "Un’app KeePass per <span class=\"accent\">iPhone, iPad e Mac.</span>",
        "lead": "Gratuito, open source e pensato per i tuoi dispositivi. Apri i tuoi vault <code>.kdbx</code>, sbloccali con Face ID o Touch ID e inserisci automaticamente le password dove ti servono."
    },
    "trustPills": [
        {
            "k": "01",
            "t": "Open source",
            "d": "GPL 3.0. Puoi verificare ogni riga."
        },
        {
            "k": "02",
            "t": "Compatibile con KeePass",
            "d": "Lettura e scrittura KDBX 4.x. KDBX 3.1 in sola lettura."
        },
        {
            "k": "03",
            "t": "Gratuito, per sempre",
            "d": "Nessun abbonamento, pubblicità o offerta premium."
        },
        {
            "k": "04",
            "t": "Biometria + inserimento automatico",
            "d": "Face ID o Touch ID. Meno passaggi."
        }
    ],
    "features": [
        {
            "eyebrow": "PIÙ VAULT",
            "title": "Tutti i tuoi database.\nProprio dove ti servono.",
            "body": "Vault personali, di lavoro e condivisi, insieme in un’unica app. Apri i file KeePass che hai già e conservali nella posizione che preferisci.",
            "points": [
                "Apri più database, in locale o tramite WebDAV",
                "Usa una password principale, un file chiave o entrambi",
                "Continua a usare gli stessi file con altre app KeePass"
            ],
            "iosNote": "Apri i file da File o iCloud Drive. Collegati direttamente a Dropbox, OneDrive o WebDAV.",
            "macNote": "Apri file locali o cartelle sincronizzate dalla tua app cloud. Collegati direttamente a WebDAV."
        },
        {
            "eyebrow": "ORGANIZZA E TROVA",
            "title": "Trova la voce\nche stai cercando.",
            "body": "Sfoglia la struttura di cartelle che conosci già. Cerca titoli, nomi utente, URL e note in tutto il vault, poi apri una voce per copiarla, mostrarla o visitarne il sito web.",
            "points": [
                "Organizza le voci in gruppi gerarchici",
                "Sposta voci e gruppi nel Cestino",
                "Visualizza e condividi gli allegati senza esportare il vault"
            ],
            "iosNote": "Navigazione essenziale su iPhone e un’area di lavoro con vista suddivisa su iPad.",
            "macNote": "Gruppi, voci e dettagli in un’unica finestra, con menu nativi e scorciatoie da tastiera."
        },
        {
            "eyebrow": "MODIFICA SUL DISPOSITIVO",
            "title": "Fai una modifica.\nSalvala nel tuo vault.",
            "body": "Crea e modifica le voci sul telefono, sul tablet o sul Mac. Aggiorna nomi utente, password, URL, tag e note, poi salva le modifiche cifrate nel file .kdbx originale.",
            "points": [
                "Genera una password sicura senza uscire dall’editor",
                "Crea nuovi database KDBX 4.x in locale o tramite WebDAV",
                "Usa la modalità di sola lettura quando non vuoi apportare modifiche"
            ],
            "iosNote": "",
            "macNote": ""
        }
    ],
    "safety": {
        "eyebrow": "SICUREZZA DEI DATI",
        "h2": "Testato per proteggere\nogni parte del tuo vault.",
        "lead": "Un gestore di password non deve mai danneggiare il tuo vault né perderne in silenzio una parte. Prima che una modifica venga rilasciata, i test automatici verificano che:",
        "items": [
            {
                "title": "Nulla vada perso quando salvi.",
                "body": "Ogni tipo di modifica viene salvato e riletto elemento per elemento: password, note, allegati, cronologia delle voci e persino dati di altre app KeePass che KeeForge non riconosce devono tornare esattamente come erano."
            },
            {
                "title": "Il tuo file sia protetto prima di modificarlo.",
                "body": "KeeForge rifiuta di sovrascrivere modifiche apportate altrove mentre il file era aperto, crea una copia di backup con data e ora prima di ogni salvataggio e rifiuta i database danneggiati anziché caricare dati incompleti."
            },
            {
                "title": "Un programma indipendente confermi il risultato.",
                "body": "Ogni versione deve superare un controllo in cui KeePassXC, un’app KeePass molto diffusa che non condivide codice con KeeForge, apre i database scritti da KeeForge, decifra le password e conferma che gli allegati corrispondano bit per bit. Allo stesso modo, i database creati da altri programmi KeePass devono aprirsi in KeeForge e restare leggibili altrove dopo il salvataggio."
            }
        ],
        "linkLabel": "Leggi come viene testato",
        "linkHref": "https://github.com/KeeForge/KeeForge/blob/main/ci_scripts/README.md"
    },
    "compare": {
        "eyebrow": "A CONFRONTO",
        "h2": "Usi già un gestore di password? Ecco cosa offre KeeForge.",
        "cards": [
            {
                "title": "Rispetto al Portachiavi iCloud",
                "bullets": [
                    "Conserva le password in file KeePass portabili, utilizzabili anche con app compatibili su dispositivi non Apple.",
                    "Scegli dove conservare il database cifrato: archiviazione locale, WebDAV o una cartella sincronizzata nel cloud.",
                    "Leggi il codice sorgente e scopri come l’app gestisce i tuoi dati."
                ]
            },
            {
                "title": "Rispetto a 1Password e Bitwarden",
                "bullets": [
                    "KeeForge non richiede un account di servizio né un abbonamento. Il tuo vault è un file, non un account ospitato da KeeForge.",
                    "Continua a usare l’ecosistema aperto di KeePass, compresi KeePassXC, Strongbox e KeePassium.",
                    "Tutte le funzionalità di KeeForge sono incluse, senza un piano premium né telemetria."
                ]
            },
            {
                "title": "Rispetto ad altri client KeePass",
                "bullets": [
                    "App native per iPhone, iPad e Mac, con la navigazione e i controlli di ogni piattaforma.",
                    "Inserimento automatico delle password, passkey e codici di verifica, tutto incluso.",
                    "I controlli dei conflitti e i backup automatici proteggono le modifiche al database."
                ]
            }
        ]
    },
    "beta": {
        "eyebrow": "BETA PUBBLICA",
        "h2": "Prova la prossima versione<br>prima del rilascio.",
        "body": "Le nuove versioni arrivano su TestFlight prima di essere pubblicate sull’App Store.",
        "availability": "La disponibilità può variare tra le piattaforme mentre Apple esamina una build. Se una beta non accetta tester, riprova più tardi.",
        "warningTitle": "Prova la beta con una copia del database, non con il tuo vault principale.",
        "warningBody": "Le build beta possono contenere errori assenti nell’app pubblicata: sostituiscono l’installazione dell’App Store e aprono gli stessi file .kdbx reali. Duplica prima il database e apri la copia nella beta.",
        "iosCTA": "Beta per iPhone e iPad",
        "macCTA": "Beta per Mac"
    },
    "faq": {
        "items": [
            {
                "q": "KeeForge è davvero gratuito?",
                "a": "Sì. Tutte le funzionalità sono gratuite, senza abbonamento, pubblicità o piano premium. Se vuoi aiutare, aggiungi una stella al repository o sostieni lo sviluppo."
            },
            {
                "q": "Quali dispositivi supporta?",
                "a": "KeeForge supporta iPhone e iPad con iOS 18 o successivo e Mac con macOS 15 o successivo. Ogni piattaforma ha un’app nativa."
            },
            {
                "q": "Funziona con il mio database KeePass esistente?",
                "a": "KeeForge legge e scrive database KDBX 4.x con AES-256, ChaCha20 o Twofish e AES-KDF o Argon2. I database KDBX 3.1 si aprono in modalità di sola lettura."
            },
            {
                "q": "Posso usare lo stesso database sul telefono e sul Mac?",
                "a": "Sì. KeeForge legge e scrive file KDBX 4.x su ogni dispositivo. Conserva il database in una posizione accessibile a entrambi, come WebDAV o una cartella sincronizzata. KeeForge non ospita né trasferisce automaticamente il tuo vault."
            },
            {
                "q": "Dove sono conservate le mie password?",
                "a": "Nel database cifrato, sul tuo dispositivo o nell’archiviazione che scegli. Su iPhone e iPad puoi usare File, iCloud Drive, Dropbox, OneDrive o WebDAV. Su Mac puoi aprire file locali, cartelle sincronizzate nel cloud o database WebDAV. KeeForge non ospita le tue password."
            },
            {
                "q": "Come funziona l’inserimento automatico?",
                "a": "Attiva KeeForge come provider di password nelle impostazioni di sistema del dispositivo. In un’app o un browser compatibile, scegli una credenziale salvata e sblocca KeeForge con Face ID, Touch ID o le credenziali del database."
            },
            {
                "q": "Come posso ottenere KeeForge per Mac?",
                "a": "Scaricalo dal Mac App Store o usa il download diretto per Mac. Entrambe le versioni sono gratuite e richiedono macOS 15 o successivo."
            },
            {
                "q": "Posso verificare la sicurezza dell’app?",
                "a": "Sì. Leggi il codice, compila l’app e consulta il registro pubblico degli audit di sicurezza. Il repository documenta anche i test di compatibilità dei database e i controlli per il rilascio."
            }
        ]
    },
    "footer": {
        "copy": "© 2026 · GPL 3.0 · Creato da un piccolo team",
        "privacy": "Privacy",
        "privacyHref": "/it/privacy",
        "support": "Assistenza"
    },
    "downloads": {
        "ios": "Scarica per iPhone e iPad",
        "mac": "Scarica per Mac",
        "direct": "Download diretto per Mac",
        "iosRequirement": "iOS 18 o successivo",
        "macRequirement": "macOS 15 o successivo"
    },
    "screenshots": {
        "iosAlt": "Elenco dei database di KeeForge su iPhone",
        "macAlt": "Finestra nativa di KeeForge per Mac con gruppi, voci e dettagli delle password",
        "groupsAlt": "Gruppi e ricerca di KeeForge su iPhone",
        "editAlt": "Editor delle voci di KeeForge su Mac",
        "iosEditAlt": "Editor delle voci di KeeForge su iPhone"
    },
    "everyday": {
        "eyebrow": "Parte della tua giornata",
        "title": "Meno da digitare.\nLe password restano tue.",
        "body": "Sblocca il vault, inserisci le credenziali o copia un codice di verifica senza interrompere quello che stai facendo.",
        "items": [
            {
                "title": "Face ID e Touch ID",
                "body": "Sblocca con la biometria supportata dal dispositivo oppure usa la password principale e il file chiave."
            },
            {
                "title": "Inserimento automatico delle password",
                "body": "Inserisci le credenziali nelle app e nei browser compatibili tramite l’integrazione con l’inserimento automatico di sistema."
            },
            {
                "title": "Passkey e codici di verifica",
                "body": "Usa le passkey compatibili con KeePassXC e i codici di verifica a tempo conservati nel database."
            }
        ]
    }
};

export const home = { en, de, fr, es, 'zh-hans': zhHans, 'zh-hant': zhHant, ja, it };
