// Homepage copy for each locale. The markup lives in src/components/HomePage.astro;
// strings containing HTML are rendered with set:html.

const en = {
    lang: 'en',
    path: '/',
    title: 'KeeForge — Free, Open-Source KeePass for iOS',
    description:
        'KeeForge is a free, open-source KeePass password manager for iPhone and iPad with AutoFill, passkeys, TOTP, Dropbox, OneDrive and WebDAV sync, and no subscription.',
    nav: {
        features: 'Features',
        faq: 'FAQ',
        changelog: 'Changelog',
        audit: 'Security audit',
        source: 'Source',
    },
    hero: {
        h1: 'A KeePass app<br> that feels at <em>home</em> on&nbsp;iOS.',
        lead:
            'KeeForge opens your existing <code class="mono">.kdbx</code> vaults with Face&nbsp;ID, fills passwords across every app, and never asks for a subscription. It just lives on your phone, the way good tools do.',
        downloadTiny: 'Download on the',
        downloadBig: 'App Store',
        readSource: 'Read the source',
        screenshotAlt: 'KeeForge database list screen',
        meta: ['iOS 18 +', 'iPhone &amp; iPad', 'KDBX 3.1 / 4.x', 'No tracking, ever'],
    },
    trustPills: [
        { k: '01', t: 'Open source', d: 'GPL 3.0. Audit every line.' },
        { k: '02', t: 'KeePass compatible', d: 'KDBX 4.x read/write. KDBX 3.1 read-only.' },
        { k: '03', t: 'Free, forever', d: 'No subscription, no ads, no upsells.' },
        { k: '04', t: 'Face ID + AutoFill', d: 'Fills credentials across every app.' },
    ],
    features: [
        {
            eyebrow: 'MANY VAULTS',
            title: 'One home screen for every database you have.',
            body: 'Add .kdbx files from Files or iCloud Drive, connect Dropbox or OneDrive, or use your own WebDAV server. KeeForge keeps Personal, Work, and Shared vaults together on one home screen.',
            points: [
                'Open as many databases as you like, locally or from the cloud',
                'Each vault remembers its nickname, key file, and preferences',
                'Native Dropbox, OneDrive, and WebDAV browsing and sync',
            ],
            screen: 'screen-01-database-list.png',
            reverse: false,
        },
        {
            eyebrow: 'ORGANIZE & FIND',
            title: 'Groups, search, and the entry detail you’d expect.',
            body: 'Browse by folder the way you set up your vault on the desktop. Search titles, usernames, URLs, and notes across every group. Open an entry to copy, reveal, or jump to the URL.',
            points: [
                'Hierarchical groups, just like KeePassXC',
                'Create groups or move entries and groups to the Recycle Bin',
                'Preview and share entry attachments without exporting your vault',
            ],
            screen: 'screen-03-vault-groups.png',
            reverse: true,
        },
        {
            eyebrow: 'EDIT ON DEVICE',
            title: 'Create and edit entries without leaving your device.',
            body: 'Edit titles, usernames, passwords, URLs, tags, and notes. Generate a strong password with one tap, then save encrypted changes directly back to the source .kdbx file.',
            points: [
                'Create new KDBX 4.x vaults locally or in connected cloud folders',
                'Conflict checks and timestamped backups protect every save',
                'Read-only mode per database when you do not want changes',
            ],
            screen: 'screen-07-entry-edit.png',
            reverse: false,
        },
    ],
    safety: {
        eyebrow: 'DATA SAFETY',
        h2: 'Tested so you never<br>lose <em>a single byte</em>.',
        lead: 'A password manager must never corrupt your vault or silently lose any part of it. Before any change ships, automated tests verify:',
        items: [
            {
                title: 'Nothing gets lost when you save.',
                body: 'Every kind of edit is saved and read back piece by piece — passwords, notes, attachments, entry history, and even data from other KeePass apps that KeeForge doesn’t recognize must all come back exactly as they went in.',
            },
            {
                title: 'Your file is protected before it’s touched.',
                body: 'KeeForge refuses to overwrite changes made from elsewhere while you had the file open, writes a timestamped backup before every save, and rejects damaged databases outright instead of loading partial data.',
            },
            {
                title: 'An independent program agrees.',
                body: 'Every release must pass a gate where KeePassXC — a widely used KeePass app that shares no code with KeeForge — opens KeeForge-written databases, decrypts the passwords, and confirms attachments match bit for bit. Databases created by other KeePass software must likewise open in KeeForge and stay readable elsewhere after KeeForge saves them.',
            },
        ],
        linkLabel: 'Read how it’s tested',
        linkHref: 'https://github.com/KeeForge/KeeForge#data-safety',
    },
    compare: {
        eyebrow: 'HOW IT COMPARES',
        h2: 'Already using a password manager? <em>Here’s where KeeForge fits.</em>',
        cards: [
            {
                title: 'vs iCloud Keychain',
                bullets: [
                    'KeePass <code class="mono">.kdbx</code> vaults work with desktop tools (KeePassXC, KeePass 2.x) and across non-Apple devices.',
                    'Your encrypted database is portable — back it up locally, sync via Dropbox, OneDrive, or WebDAV, or store it offline.',
                    'Open source code you can audit, with no telemetry of any kind.',
                ],
            },
            {
                title: 'vs 1Password & Bitwarden',
                bullets: [
                    'No subscription, no account, no vendor lock-in. Your vault is a file on your device or your own cloud.',
                    'Compatible with the open KeePass ecosystem — KeePassXC, Strongbox, KeePassium, Keepass2Android.',
                    'GPLv3 open source. Every line is auditable, with zero analytics or telemetry.',
                ],
            },
            {
                title: 'vs other iOS KeePass clients',
                bullets: [
                    'Native Swift, built for iOS 18+ with current platform features (passkeys, TOTP AutoFill, Files integration).',
                    'Free forever, all features included — no premium tier, no in-app paywalls (just an optional tip jar).',
                    'Saves are conflict-detected and auto-backed-up; AutoFill works offline for cloud-backed vaults.',
                ],
            },
        ],
    },
    beta: {
        eyebrow: 'PUBLIC BETA',
        h2: 'Try the next version<br><em>before</em> it ships.',
        body: 'New versions go out on TestFlight before they reach the App Store.',
        cta: 'Join the beta on TestFlight',
        href: 'https://testflight.apple.com/join/mPAT4f1a',
        availability: 'Places are capped at 300 testers, and joining pauses while a new version is in Apple’s beta review. If the link says the beta isn’t accepting testers, check back later.',
        warningTitle: 'Test with a copy of your database, not your primary vault.',
        warningBody: 'Beta builds can carry bugs the released app does not — and they replace the App Store install and open the same real .kdbx files. Duplicate a database first and point the beta at the copy.',
    },
    faq: {
        eyebrow: 'FAQ',
        h2: 'Questions,<br>answered plainly.',
        items: [
            { q: 'Is KeeForge really free?', a: 'Yes — free on the App Store, no subscriptions, no ads, no premium tier. If you’d like to support development, star the repo or buy me a coffee.' },
            { q: 'Does it work with my existing KeePass database?', a: 'KeeForge reads and writes KDBX 4.x databases using AES-256, ChaCha20, or Twofish with AES-KDF or Argon2. KDBX 3.1 databases open in read-only mode.' },
            { q: 'Where are my passwords stored?', a: 'In your encrypted database on your device or in storage you choose, such as iCloud Drive, Dropbox, OneDrive, WebDAV, or another Files provider. KeeForge does not host your vault.' },
            { q: 'How does AutoFill work?', a: 'KeeForge registers as an iOS Credential Provider. Tap a login field anywhere, choose KeeForge, authenticate with Face ID, and your credentials are filled.' },
            { q: 'Can I trust it?', a: 'Read the code. Build it yourself. Or trust the App Store review process plus a public commit history — that’s more than most password managers offer.' },
        ],
    },
    footer: {
        copy: '© 2026 · GPL 3.0 · Made by one person',
        privacy: 'Privacy',
        privacyHref: '/privacy',
        support: 'Support',
    },
};

const de: typeof en = {
    lang: 'de',
    path: '/de/',
    title: 'KeeForge — Kostenloser Open-Source-KeePass für iOS',
    description:
        'KeeForge ist ein kostenloser, quelloffener KeePass-Passwortmanager für iPhone und iPad mit AutoFill, Passkeys, TOTP, Dropbox-, OneDrive- und WebDAV-Sync — ohne Abo.',
    nav: {
        features: 'Funktionen',
        faq: 'FAQ',
        changelog: 'Changelog',
        audit: 'Sicherheitsaudit',
        source: 'Quellcode',
    },
    hero: {
        h1: 'Eine KeePass-App,<br> die sich auf iOS <em>zu&nbsp;Hause</em> fühlt.',
        lead:
            'KeeForge öffnet deine bestehenden <code class="mono">.kdbx</code>-Tresore mit Face&nbsp;ID, füllt Passwörter in jeder App aus und verlangt nie ein Abo. Sie lebt einfach auf deinem iPhone — so, wie gute Werkzeuge das tun.',
        downloadTiny: 'Laden im',
        downloadBig: 'App Store',
        readSource: 'Quellcode lesen',
        screenshotAlt: 'KeeForge-Datenbankliste',
        meta: ['iOS 18 +', 'iPhone &amp; iPad', 'KDBX 3.1 / 4.x', 'Kein Tracking, niemals'],
    },
    trustPills: [
        { k: '01', t: 'Open Source', d: 'GPL 3.0. Jede Zeile prüfbar.' },
        { k: '02', t: 'KeePass-kompatibel', d: 'KDBX 4.x lesen/schreiben. KDBX 3.1 nur lesen.' },
        { k: '03', t: 'Kostenlos, für immer', d: 'Kein Abo, keine Werbung, keine Upsells.' },
        { k: '04', t: 'Face ID + AutoFill', d: 'Füllt Zugangsdaten in jeder App aus.' },
    ],
    features: [
        {
            eyebrow: 'VIELE TRESORE',
            title: 'Ein Startbildschirm für alle deine Datenbanken.',
            body: 'Füge .kdbx-Dateien aus der Dateien-App oder iCloud Drive hinzu, verbinde Dropbox oder OneDrive oder nutze deinen eigenen WebDAV-Server. KeeForge hält private, berufliche und geteilte Tresore zusammen auf einem Startbildschirm.',
            points: [
                'Öffne beliebig viele Datenbanken, lokal oder aus der Cloud',
                'Jeder Tresor merkt sich Spitznamen, Schlüsseldatei und Einstellungen',
                'Natives Durchsuchen und Synchronisieren mit Dropbox, OneDrive und WebDAV',
            ],
            screen: 'screen-01-database-list.png',
            reverse: false,
        },
        {
            eyebrow: 'ORDNEN & FINDEN',
            title: 'Gruppen, Suche und die Eintragsansicht, die du erwartest.',
            body: 'Blättere nach Ordnern, so wie du deinen Tresor am Desktop eingerichtet hast. Durchsuche Titel, Benutzernamen, URLs und Notizen über alle Gruppen hinweg. Öffne einen Eintrag, um zu kopieren, anzuzeigen oder zur URL zu springen.',
            points: [
                'Hierarchische Gruppen, genau wie in KeePassXC',
                'Gruppen anlegen oder Einträge und Gruppen in den Papierkorb verschieben',
                'Anhänge ansehen und teilen, ohne den Tresor zu exportieren',
            ],
            screen: 'screen-03-vault-groups.png',
            reverse: true,
        },
        {
            eyebrow: 'AUF DEM GERÄT BEARBEITEN',
            title: 'Einträge erstellen und bearbeiten, ohne dein Gerät zu verlassen.',
            body: 'Bearbeite Titel, Benutzernamen, Passwörter, URLs, Tags und Notizen. Erzeuge mit einem Tipp ein starkes Passwort und speichere verschlüsselte Änderungen direkt zurück in die ursprüngliche .kdbx-Datei.',
            points: [
                'Neue KDBX-4.x-Tresore lokal oder in verbundenen Cloud-Ordnern anlegen',
                'Konfliktprüfungen und zeitgestempelte Backups schützen jedes Speichern',
                'Nur-Lese-Modus pro Datenbank, wenn du keine Änderungen möchtest',
            ],
            screen: 'screen-07-entry-edit.png',
            reverse: false,
        },
    ],
    safety: {
        eyebrow: 'DATENSICHERHEIT',
        h2: 'Getestet, damit du<br><em>kein Byte</em> verlierst.',
        lead: 'Ein Passwort-Manager darf deinen Tresor niemals beschädigen oder unbemerkt Daten verlieren. Bevor eine Änderung ausgeliefert wird, stellen automatisierte Tests sicher:',
        items: [
            {
                title: 'Beim Speichern geht nichts verloren.',
                body: 'Jede Art von Änderung wird gespeichert und Stück für Stück wieder eingelesen — Passwörter, Notizen, Anhänge, Eintragsverlauf und selbst Daten anderer KeePass-Apps, die KeeForge gar nicht kennt, müssen exakt so zurückkommen, wie sie hineingingen.',
            },
            {
                title: 'Deine Datei ist geschützt, bevor sie angefasst wird.',
                body: 'KeeForge weigert sich, Änderungen zu überschreiben, die anderswo gemacht wurden, während die Datei bei dir geöffnet war; es legt vor jedem Speichern ein zeitgestempeltes Backup an und lehnt beschädigte Datenbanken rundweg ab, statt unvollständige Daten zu laden.',
            },
            {
                title: 'Ein unabhängiges Programm bestätigt das.',
                body: 'Jede Version muss ein Prüf-Gate bestehen, in dem KeePassXC — eine weit verbreitete KeePass-App, die keinen Code mit KeeForge teilt — von KeeForge geschriebene Datenbanken öffnet, die Passwörter entschlüsselt und bestätigt, dass Anhänge Bit für Bit übereinstimmen. Umgekehrt müssen von anderer KeePass-Software erstellte Datenbanken sich in KeeForge öffnen lassen und auch nach dem Speichern durch KeeForge anderswo lesbar bleiben.',
            },
        ],
        linkLabel: 'Nachlesen, wie getestet wird',
        linkHref: 'https://github.com/KeeForge/KeeForge/blob/main/docs/i18n/README.de.md#datensicherheit',
    },
    compare: {
        eyebrow: 'DER VERGLEICH',
        h2: 'Du nutzt schon einen Passwortmanager? <em>Hier passt KeeForge hin.</em>',
        cards: [
            {
                title: 'vs. iCloud-Schlüsselbund',
                bullets: [
                    'KeePass-<code class="mono">.kdbx</code>-Tresore funktionieren mit Desktop-Tools (KeePassXC, KeePass 2.x) und auf Nicht-Apple-Geräten.',
                    'Deine verschlüsselte Datenbank ist portabel — sichere sie lokal, synchronisiere sie über Dropbox, OneDrive oder WebDAV oder bewahre sie offline auf.',
                    'Quelloffener Code, den du selbst prüfen kannst — ganz ohne Telemetrie.',
                ],
            },
            {
                title: 'vs. 1Password & Bitwarden',
                bullets: [
                    'Kein Abo, kein Konto, kein Vendor-Lock-in. Dein Tresor ist eine Datei auf deinem Gerät oder in deiner eigenen Cloud.',
                    'Kompatibel mit dem offenen KeePass-Ökosystem — KeePassXC, Strongbox, KeePassium, Keepass2Android.',
                    'GPLv3-Open-Source. Jede Zeile ist prüfbar, ohne jede Analytik oder Telemetrie.',
                ],
            },
            {
                title: 'vs. andere iOS-KeePass-Clients',
                bullets: [
                    'Natives Swift, gebaut für iOS 18+ mit aktuellen Plattformfunktionen (Passkeys, TOTP-AutoFill, Dateien-Integration).',
                    'Für immer kostenlos, alle Funktionen inklusive — keine Premium-Stufe, keine Paywalls (nur ein optionales Trinkgeld).',
                    'Speichern mit Konflikterkennung und automatischen Backups; AutoFill funktioniert für Cloud-Tresore auch offline.',
                ],
            },
        ],
    },
    beta: {
        eyebrow: 'ÖFFENTLICHE BETA',
        h2: 'Teste die nächste Version,<br><em>bevor</em> sie erscheint.',
        body: 'Neue Versionen erscheinen über TestFlight, bevor sie in den App Store kommen.',
        cta: 'Der Beta über TestFlight beitreten',
        href: 'https://testflight.apple.com/join/mPAT4f1a',
        availability: 'Die Plätze sind auf 300 Tester begrenzt, und der Beitritt pausiert, solange eine neue Version Apples Beta-Prüfung durchläuft. Meldet der Link, dass keine Tester aufgenommen werden, schau einfach später wieder vorbei.',
        warningTitle: 'Teste mit einer Kopie deiner Datenbank, nicht mit deinem Haupttresor.',
        warningBody: 'Beta-Builds können Fehler enthalten, die es in der veröffentlichten App nicht gibt — und sie ersetzen die App-Store-Installation und öffnen dieselben echten .kdbx-Dateien. Dupliziere deine Datenbank vorher und öffne in der Beta nur die Kopie.',
    },
    faq: {
        eyebrow: 'FAQ',
        h2: 'Fragen,<br>klar beantwortet.',
        items: [
            { q: 'Ist KeeForge wirklich kostenlos?', a: 'Ja — kostenlos im App Store, ohne Abo, ohne Werbung, ohne Premium-Stufe. Wenn du die Entwicklung unterstützen möchtest, gib dem Repo einen Stern oder spendiere mir einen Kaffee.' },
            { q: 'Funktioniert es mit meiner bestehenden KeePass-Datenbank?', a: 'KeeForge liest und schreibt KDBX-4.x-Datenbanken mit AES-256, ChaCha20 oder Twofish und AES-KDF oder Argon2. KDBX-3.1-Datenbanken öffnen sich im Nur-Lese-Modus.' },
            { q: 'Wo werden meine Passwörter gespeichert?', a: 'In deiner verschlüsselten Datenbank auf deinem Gerät oder an einem Speicherort deiner Wahl, etwa iCloud Drive, Dropbox, OneDrive, WebDAV oder einem anderen Dateien-Anbieter. KeeForge hostet deinen Tresor nicht.' },
            { q: 'Wie funktioniert AutoFill?', a: 'KeeForge registriert sich als iOS-Credential-Provider. Tippe irgendwo auf ein Anmeldefeld, wähle KeeForge, authentifiziere dich mit Face ID — und deine Zugangsdaten werden eingefüllt.' },
            { q: 'Kann ich der App vertrauen?', a: 'Lies den Code. Baue die App selbst. Oder vertraue dem App-Store-Review plus einer öffentlichen Commit-Historie — das ist mehr, als die meisten Passwortmanager bieten.' },
        ],
    },
    footer: {
        copy: '© 2026 · GPL 3.0 · Von einer Person gemacht',
        privacy: 'Datenschutz',
        privacyHref: '/de/privacy',
        support: 'Support',
    },
};

const fr: typeof en = {
    lang: 'fr',
    path: '/fr/',
    title: 'KeeForge — KeePass gratuit et open source pour iOS',
    description:
        'KeeForge est un gestionnaire de mots de passe KeePass gratuit et open source pour iPhone et iPad, avec remplissage automatique, clés d’accès, TOTP, synchronisation Dropbox, OneDrive et WebDAV, et sans abonnement.',
    nav: {
        features: 'Fonctionnalités',
        faq: 'FAQ',
        changelog: 'Journal des modifications',
        audit: 'Audit de sécurité',
        source: 'Code source',
    },
    hero: {
        h1: 'Une application KeePass<br> qui se sent <em>chez elle</em> sur&nbsp;iOS.',
        lead:
            'KeeForge ouvre vos coffres-forts <code class="mono">.kdbx</code> existants avec Face&nbsp;ID, remplit vos mots de passe dans toutes les applications, et ne vous demande jamais d’abonnement. Elle vit tout simplement sur votre iPhone, comme les bons outils savent le faire.',
        downloadTiny: 'Télécharger dans l’',
        downloadBig: 'App Store',
        readSource: 'Lire le code source',
        screenshotAlt: 'Écran de la liste des bases de données KeeForge',
        meta: ['iOS 18 +', 'iPhone &amp; iPad', 'KDBX 3.1 / 4.x', 'Aucun pistage, jamais'],
    },
    trustPills: [
        { k: '01', t: 'Open source', d: 'GPL 3.0. Auditez chaque ligne.' },
        { k: '02', t: 'Compatible KeePass', d: 'KDBX 4.x en lecture/écriture. KDBX 3.1 en lecture seule.' },
        { k: '03', t: 'Gratuit, pour toujours', d: 'Pas d’abonnement, pas de publicité, pas de vente incitative.' },
        { k: '04', t: 'Face ID + remplissage auto', d: 'Remplit vos identifiants dans toutes les applications.' },
    ],
    features: [
        {
            eyebrow: 'DE NOMBREUX COFFRES-FORTS',
            title: 'Un seul écran d’accueil pour toutes vos bases de données.',
            body: 'Ajoutez des fichiers .kdbx depuis Fichiers ou iCloud Drive, connectez Dropbox ou OneDrive, ou utilisez votre propre serveur WebDAV. KeeForge regroupe vos coffres-forts personnels, professionnels et partagés sur un seul écran d’accueil.',
            points: [
                'Ouvrez autant de bases de données que vous le souhaitez, en local ou dans le cloud',
                'Chaque coffre-fort mémorise son surnom, son fichier de clé et ses préférences',
                'Navigation et synchronisation natives avec Dropbox, OneDrive et WebDAV',
            ],
            screen: 'screen-01-database-list.png',
            reverse: false,
        },
        {
            eyebrow: 'ORGANISER & RETROUVER',
            title: 'Groupes, recherche et une fiche d’entrée telle que vous l’attendez.',
            body: 'Parcourez vos dossiers comme vous avez organisé votre coffre-fort sur ordinateur. Recherchez dans les titres, noms d’utilisateur, URL et notes de tous les groupes. Ouvrez une entrée pour copier, révéler un champ ou accéder à l’URL.',
            points: [
                'Groupes hiérarchiques, comme dans KeePassXC',
                'Créez des groupes ou déplacez entrées et groupes vers la corbeille',
                'Prévisualisez et partagez les pièces jointes d’une entrée sans exporter votre coffre-fort',
            ],
            screen: 'screen-03-vault-groups.png',
            reverse: true,
        },
        {
            eyebrow: 'MODIFIER SUR L’APPAREIL',
            title: 'Créez et modifiez des entrées sans quitter votre appareil.',
            body: 'Modifiez titres, noms d’utilisateur, mots de passe, URL, tags et notes. Générez un mot de passe robuste en un tap, puis enregistrez vos modifications chiffrées directement dans le fichier .kdbx source.',
            points: [
                'Créez de nouveaux coffres-forts KDBX 4.x en local ou dans des dossiers cloud connectés',
                'Vérification des conflits et sauvegardes horodatées protègent chaque enregistrement',
                'Mode lecture seule par base de données lorsque vous ne voulez pas de modifications',
            ],
            screen: 'screen-07-entry-edit.png',
            reverse: false,
        },
    ],
    safety: {
        eyebrow: 'SÉCURITÉ DES DONNÉES',
        h2: 'Testé pour que vous ne<br>perdiez jamais <em>un seul octet</em>.',
        lead: 'Un gestionnaire de mots de passe ne doit jamais corrompre votre coffre-fort ni en perdre silencieusement une partie. Avant la publication de tout changement, des tests automatisés vérifient :',
        items: [
            {
                title: 'Rien n’est perdu lors de l’enregistrement.',
                body: 'Chaque type de modification est enregistré puis relu élément par élément — mots de passe, notes, pièces jointes, historique des entrées, et même les données d’autres applications KeePass que KeeForge ne reconnaît pas doivent toutes revenir exactement telles qu’elles ont été saisies.',
            },
            {
                title: 'Votre fichier est protégé avant d’être touché.',
                body: 'KeeForge refuse d’écraser des modifications faites ailleurs pendant que le fichier était ouvert chez vous, écrit une sauvegarde horodatée avant chaque enregistrement, et rejette purement et simplement les bases de données endommagées plutôt que de charger des données partielles.',
            },
            {
                title: 'Un programme indépendant le confirme.',
                body: 'Chaque version doit franchir une étape de vérification où KeePassXC — une application KeePass largement utilisée qui ne partage aucun code avec KeeForge — ouvre les bases de données écrites par KeeForge, déchiffre les mots de passe et confirme que les pièces jointes correspondent bit à bit. Les bases de données créées par d’autres logiciels KeePass doivent de même s’ouvrir dans KeeForge et rester lisibles ailleurs après avoir été enregistrées par KeeForge.',
            },
        ],
        linkLabel: 'Découvrir comment c’est testé',
        linkHref: 'https://github.com/KeeForge/KeeForge/blob/main/docs/i18n/README.fr.md#sécurité-des-données',
    },
    compare: {
        eyebrow: 'LA COMPARAISON',
        h2: 'Vous utilisez déjà un gestionnaire de mots de passe ? <em>Voici où KeeForge se situe.</em>',
        cards: [
            {
                title: 'vs Trousseau iCloud',
                bullets: [
                    'Les coffres-forts KeePass <code class="mono">.kdbx</code> fonctionnent avec des outils de bureau (KeePassXC, KeePass 2.x) et sur des appareils non-Apple.',
                    'Votre base de données chiffrée est portable — sauvegardez-la en local, synchronisez-la via Dropbox, OneDrive ou WebDAV, ou conservez-la hors ligne.',
                    'Un code open source que vous pouvez auditer, sans aucune télémétrie.',
                ],
            },
            {
                title: 'vs 1Password & Bitwarden',
                bullets: [
                    'Pas d’abonnement, pas de compte, pas de dépendance à un fournisseur. Votre coffre-fort est un fichier sur votre appareil ou dans votre propre cloud.',
                    'Compatible avec l’écosystème KeePass ouvert — KeePassXC, Strongbox, KeePassium, Keepass2Android.',
                    'Open source sous licence GPLv3. Chaque ligne est auditable, sans aucune analyse ni télémétrie.',
                ],
            },
            {
                title: 'vs les autres clients KeePass pour iOS',
                bullets: [
                    'Swift natif, conçu pour iOS 18+ avec les fonctionnalités actuelles de la plateforme (clés d’accès, remplissage automatique TOTP, intégration à Fichiers).',
                    'Gratuit pour toujours, toutes les fonctionnalités incluses — pas de palier premium, pas de paywall en application (juste un pourboire optionnel).',
                    'Les enregistrements détectent les conflits et sont automatiquement sauvegardés ; le remplissage automatique fonctionne hors ligne pour les coffres-forts synchronisés dans le cloud.',
                ],
            },
        ],
    },
    beta: {
        eyebrow: 'BÊTA PUBLIQUE',
        h2: 'Essayez la prochaine version<br><em>avant</em> sa sortie.',
        body: 'Les nouvelles versions sont diffusées sur TestFlight avant d’arriver sur l’App Store.',
        cta: 'Rejoindre la bêta sur TestFlight',
        href: 'https://testflight.apple.com/join/mPAT4f1a',
        availability: 'Le nombre de places est limité à 300 testeurs, et les inscriptions sont suspendues pendant qu’une nouvelle version est en cours de revue bêta chez Apple. Si le lien indique que la bêta n’accepte plus de testeurs, revenez plus tard.',
        warningTitle: 'Testez avec une copie de votre base de données, pas avec votre coffre-fort principal.',
        warningBody: 'Les versions bêta peuvent contenir des bugs absents de l’application publiée — et elles remplacent l’installation de l’App Store tout en ouvrant les mêmes fichiers .kdbx réels. Dupliquez d’abord une base de données, puis pointez la bêta vers la copie.',
    },
    faq: {
        eyebrow: 'FAQ',
        h2: 'Des questions,<br>des réponses claires.',
        items: [
            { q: 'KeeForge est-il vraiment gratuit ?', a: 'Oui — gratuite sur l’App Store, sans abonnement, sans publicité, sans palier premium. Si vous souhaitez soutenir le développement, mettez une étoile au dépôt ou offrez-moi un café.' },
            { q: 'Fonctionne-t-elle avec ma base de données KeePass existante ?', a: 'KeeForge lit et écrit des bases de données KDBX 4.x avec AES-256, ChaCha20 ou Twofish, associés à AES-KDF ou Argon2. Les bases de données KDBX 3.1 s’ouvrent en lecture seule.' },
            { q: 'Où mes mots de passe sont-ils stockés ?', a: 'Dans votre base de données chiffrée, sur votre appareil ou dans le stockage de votre choix, comme iCloud Drive, Dropbox, OneDrive, WebDAV ou un autre fournisseur compatible avec Fichiers. KeeForge n’héberge pas votre coffre-fort.' },
            { q: 'Comment fonctionne le remplissage automatique ?', a: 'KeeForge s’enregistre comme fournisseur d’identifiants iOS. Touchez un champ de connexion n’importe où, choisissez KeeForge, authentifiez-vous avec Face ID, et vos identifiants sont remplis.' },
            { q: 'Puis-je lui faire confiance ?', a: 'Lisez le code. Compilez-le vous-même. Ou faites confiance au processus de revue de l’App Store et à un historique de commits public — c’est déjà plus que ce que proposent la plupart des gestionnaires de mots de passe.' },
        ],
    },
    footer: {
        copy: '© 2026 · GPL 3.0 · Fait par une seule personne',
        privacy: 'Confidentialité',
        privacyHref: '/fr/privacy',
        support: 'Support',
    },
};

const es: typeof en = {
    lang: 'es',
    path: '/es/',
    title: 'KeeForge — KeePass gratuito y de código abierto para iOS',
    description:
        'KeeForge es un gestor de contraseñas KeePass gratuito y de código abierto para iPhone y iPad, con autorrelleno, llaves de acceso, TOTP, sincronización con Dropbox, OneDrive y WebDAV, y sin suscripción.',
    nav: {
        features: 'Funciones',
        faq: 'Preguntas frecuentes',
        changelog: 'Historial de cambios',
        audit: 'Auditoría de seguridad',
        source: 'Código fuente',
    },
    hero: {
        h1: 'Una app KeePass<br> que se siente como en <em>casa</em> en&nbsp;iOS.',
        lead:
            'KeeForge abre sus bóvedas <code class="mono">.kdbx</code> existentes con Face&nbsp;ID, rellena sus contraseñas en todas las apps, y nunca le pide una suscripción. Simplemente vive en su iPhone, tal como lo hacen las buenas herramientas.',
        downloadTiny: 'Disponible en',
        downloadBig: 'App Store',
        readSource: 'Leer el código fuente',
        screenshotAlt: 'Pantalla de la lista de bases de datos de KeeForge',
        meta: ['iOS 18 +', 'iPhone &amp; iPad', 'KDBX 3.1 / 4.x', 'Ningún rastreo, jamás'],
    },
    trustPills: [
        { k: '01', t: 'Código abierto', d: 'GPL 3.0. Audite cada línea.' },
        { k: '02', t: 'Compatible con KeePass', d: 'Lectura/escritura de KDBX 4.x. KDBX 3.1 solo lectura.' },
        { k: '03', t: 'Gratis, para siempre', d: 'Sin suscripción, sin anuncios, sin ventas adicionales.' },
        { k: '04', t: 'Face ID + autorrelleno', d: 'Rellena credenciales en todas las apps.' },
    ],
    features: [
        {
            eyebrow: 'MUCHAS BÓVEDAS',
            title: 'Una sola pantalla de inicio para todas sus bases de datos.',
            body: 'Añada archivos .kdbx desde Archivos o iCloud Drive, conecte Dropbox u OneDrive, o use su propio servidor WebDAV. KeeForge mantiene sus bóvedas personales, de trabajo y compartidas juntas en una sola pantalla de inicio.',
            points: [
                'Abra tantas bases de datos como quiera, localmente o desde la nube',
                'Cada bóveda recuerda su apodo, archivo de clave y preferencias',
                'Exploración y sincronización nativas con Dropbox, OneDrive y WebDAV',
            ],
            screen: 'screen-01-database-list.png',
            reverse: false,
        },
        {
            eyebrow: 'ORGANIZAR Y ENCONTRAR',
            title: 'Grupos, búsqueda y el detalle de entrada que esperaría.',
            body: 'Navegue por carpetas tal como organizó su bóveda en el escritorio. Busque títulos, nombres de usuario, URL y notas en todos los grupos. Abra una entrada para copiar datos, revelarlos o ir a la URL.',
            points: [
                'Grupos jerárquicos, igual que en KeePassXC',
                'Cree grupos o mueva entradas y grupos a la papelera',
                'Vea previsualizaciones y comparta archivos adjuntos de una entrada sin exportar su bóveda',
            ],
            screen: 'screen-03-vault-groups.png',
            reverse: true,
        },
        {
            eyebrow: 'EDITAR EN EL DISPOSITIVO',
            title: 'Cree y edite entradas sin salir de su dispositivo.',
            body: 'Edite títulos, nombres de usuario, contraseñas, URL, etiquetas y notas. Genere una contraseña segura con un toque y luego guarde los cambios cifrados directamente en el archivo .kdbx de origen.',
            points: [
                'Cree nuevas bóvedas KDBX 4.x localmente o en carpetas conectadas en la nube',
                'Comprobaciones de conflictos y copias de seguridad con marca de tiempo protegen cada guardado',
                'Modo de solo lectura por base de datos cuando no quiera hacer cambios',
            ],
            screen: 'screen-07-entry-edit.png',
            reverse: false,
        },
    ],
    safety: {
        eyebrow: 'SEGURIDAD DE LOS DATOS',
        h2: 'Probado para que nunca<br>pierda <em>ni un solo byte</em>.',
        lead: 'Un gestor de contraseñas nunca debe corromper su bóveda ni perder silenciosamente ninguna parte de ella. Antes de publicar cualquier cambio, pruebas automatizadas verifican:',
        items: [
            {
                title: 'No se pierde nada al guardar.',
                body: 'Cada tipo de edición se guarda y se vuelve a leer pieza por pieza — contraseñas, notas, archivos adjuntos, historial de entradas e incluso datos de otras apps de KeePass que KeeForge no reconoce deben volver exactamente como se introdujeron.',
            },
            {
                title: 'Su archivo está protegido antes de tocarlo.',
                body: 'KeeForge se niega a sobrescribir cambios hechos desde otro lugar mientras usted tenía el archivo abierto, escribe una copia de seguridad con marca de tiempo antes de cada guardado, y rechaza directamente las bases de datos dañadas en lugar de cargar datos parciales.',
            },
            {
                title: 'Un programa independiente lo confirma.',
                body: 'Cada versión debe superar una prueba de control en la que KeePassXC — una app de KeePass muy usada que no comparte código con KeeForge — abre las bases de datos escritas por KeeForge, descifra las contraseñas y confirma que los archivos adjuntos coinciden bit a bit. Las bases de datos creadas por otro software de KeePass deben, a su vez, abrirse en KeeForge y seguir siendo legibles en otros programas después de que KeeForge las guarde.',
            },
        ],
        linkLabel: 'Lea cómo se prueba',
        linkHref: 'https://github.com/KeeForge/KeeForge/blob/main/docs/i18n/README.es.md#seguridad-de-los-datos',
    },
    compare: {
        eyebrow: 'CÓMO SE COMPARA',
        h2: '¿Ya usa un gestor de contraseñas? <em>Aquí es donde encaja KeeForge.</em>',
        cards: [
            {
                title: 'vs. Llavero de iCloud',
                bullets: [
                    'Las bóvedas KeePass <code class="mono">.kdbx</code> funcionan con herramientas de escritorio (KeePassXC, KeePass 2.x) y en dispositivos que no son de Apple.',
                    'Su base de datos cifrada es portátil: haga una copia de seguridad local, sincronícela mediante Dropbox, OneDrive o WebDAV, o guárdela sin conexión.',
                    'Código abierto que usted puede auditar, sin ningún tipo de telemetría.',
                ],
            },
            {
                title: 'vs. 1Password y Bitwarden',
                bullets: [
                    'Sin suscripción, sin cuenta, sin dependencia de un proveedor. Su bóveda es un archivo en su dispositivo o en su propia nube.',
                    'Compatible con el ecosistema abierto de KeePass — KeePassXC, Strongbox, KeePassium, Keepass2Android.',
                    'Código abierto bajo GPLv3. Cada línea es auditable, sin análisis ni telemetría de ningún tipo.',
                ],
            },
            {
                title: 'vs. otros clientes de KeePass para iOS',
                bullets: [
                    'Swift nativo, creado para iOS 18+ con las funciones actuales de la plataforma (llaves de acceso, autorrelleno de TOTP, integración con Archivos).',
                    'Gratis para siempre, con todas las funciones incluidas — sin nivel premium, sin muros de pago dentro de la app (solo una propina opcional).',
                    'Los guardados detectan conflictos y se respaldan automáticamente; el autorrelleno funciona sin conexión para bóvedas sincronizadas con la nube.',
                ],
            },
        ],
    },
    beta: {
        eyebrow: 'BETA PÚBLICA',
        h2: 'Pruebe la próxima versión<br><em>antes</em> de que se publique.',
        body: 'Las nuevas versiones se publican en TestFlight antes de llegar a la App Store.',
        cta: 'Únase a la beta en TestFlight',
        href: 'https://testflight.apple.com/join/mPAT4f1a',
        availability: 'Las plazas están limitadas a 300 probadores, y la incorporación se pausa mientras una nueva versión está en revisión beta de Apple. Si el enlace indica que la beta no acepta más probadores, vuelva a comprobarlo más tarde.',
        warningTitle: 'Pruebe con una copia de su base de datos, no con su bóveda principal.',
        warningBody: 'Las compilaciones beta pueden tener errores que la app publicada no tiene — y sustituyen la instalación de la App Store, abriendo los mismos archivos .kdbx reales. Duplique primero una base de datos y apunte la beta a la copia.',
    },
    faq: {
        eyebrow: 'PREGUNTAS FRECUENTES',
        h2: 'Preguntas,<br>respondidas con claridad.',
        items: [
            { q: '¿KeeForge es realmente gratis?', a: 'Sí — gratis en la App Store, sin suscripciones, sin anuncios, sin nivel premium. Si desea apoyar el desarrollo, puede darle una estrella al repositorio o invitarme a un café.' },
            { q: '¿Funciona con mi base de datos de KeePass existente?', a: 'KeeForge lee y escribe bases de datos KDBX 4.x con AES-256, ChaCha20 o Twofish, junto con AES-KDF o Argon2. Las bases de datos KDBX 3.1 se abren en modo de solo lectura.' },
            { q: '¿Dónde se guardan mis contraseñas?', a: 'En su base de datos cifrada, en su dispositivo o en el almacenamiento que elija, como iCloud Drive, Dropbox, OneDrive, WebDAV u otro proveedor compatible con Archivos. KeeForge no aloja su bóveda.' },
            { q: '¿Cómo funciona el autorrelleno?', a: 'KeeForge se registra como proveedor de credenciales de iOS. Toque un campo de inicio de sesión en cualquier lugar, elija KeeForge, autentíquese con Face ID, y sus credenciales se rellenan.' },
            { q: '¿Puedo confiar en él?', a: 'Lea el código. Compílelo usted mismo. O confíe en el proceso de revisión de la App Store y en un historial de confirmaciones público — eso ya es más de lo que ofrecen la mayoría de los gestores de contraseñas.' },
        ],
    },
    footer: {
        copy: '© 2026 · GPL 3.0 · Hecho por una sola persona',
        privacy: 'Privacidad',
        privacyHref: '/es/privacy',
        support: 'Soporte',
    },
};

const zhHans: typeof en = {
    lang: 'zh-hans',
    path: '/zh-hans/',
    title: 'KeeForge — 免费开源的 iOS KeePass 密码管理器',
    description:
        'KeeForge 是一款面向 iPhone 和 iPad 的免费开源 KeePass 密码管理器，支持自动填充、通行密钥、TOTP，以及 Dropbox、OneDrive 和 WebDAV 同步，无需订阅。',
    nav: {
        features: '功能',
        faq: '常见问题',
        changelog: '更新日志',
        audit: '安全审计',
        source: '源代码',
    },
    hero: {
        h1: '一款真正<em>融入</em> iOS 的<br>KeePass 应用。',
        lead:
            'KeeForge 用 Face&nbsp;ID 打开你现有的 <code class="mono">.kdbx</code> 保险库，在每个应用中自动填充密码，而且从不要求订阅。它就安安静静地待在你的 iPhone 上——好工具本该如此。',
        downloadTiny: '在 App Store 中',
        downloadBig: '下载',
        readSource: '阅读源代码',
        screenshotAlt: 'KeeForge 数据库列表界面',
        meta: ['iOS 18 +', 'iPhone 和 iPad', 'KDBX 3.1 / 4.x', '绝无跟踪'],
    },
    trustPills: [
        { k: '01', t: '开源', d: 'GPL 3.0。每一行代码都可审计。' },
        { k: '02', t: '兼容 KeePass', d: 'KDBX 4.x 可读写。KDBX 3.1 只读。' },
        { k: '03', t: '永久免费', d: '无订阅、无广告、无付费升级。' },
        { k: '04', t: 'Face ID + 自动填充', d: '在每个应用中填充登录凭证。' },
    ],
    features: [
        {
            eyebrow: '多个保险库',
            title: '一个主屏幕，容纳你所有的数据库。',
            body: '从“文件”App 或 iCloud 云盘添加 .kdbx 文件，连接 Dropbox 或 OneDrive，或使用你自己的 WebDAV 服务器。KeeForge 把个人、工作和共享保险库集中在同一个主屏幕上。',
            points: [
                '想打开多少个数据库都可以，本地或云端均可',
                '每个保险库都会记住自己的昵称、密钥文件和偏好设置',
                '原生支持 Dropbox、OneDrive 和 WebDAV 的浏览与同步',
            ],
            screen: 'screen-01-database-list.png',
            reverse: false,
        },
        {
            eyebrow: '整理与查找',
            title: '群组、搜索，以及你期待的条目详情。',
            body: '按照你在桌面端整理保险库的方式，逐个文件夹浏览。跨所有群组搜索标题、用户名、URL 和备注。打开条目即可拷贝、显示字段或跳转到 URL。',
            points: [
                '层级群组，与 KeePassXC 完全一致',
                '创建群组，或将条目和群组移入回收站',
                '无需导出保险库即可预览和分享条目附件',
            ],
            screen: 'screen-03-vault-groups.png',
            reverse: true,
        },
        {
            eyebrow: '在设备上编辑',
            title: '创建和编辑条目，无需离开你的设备。',
            body: '编辑标题、用户名、密码、URL、标签和备注。轻点一下即可生成强密码，然后将加密的更改直接保存回源 .kdbx 文件。',
            points: [
                '在本地或已连接的云文件夹中创建新的 KDBX 4.x 保险库',
                '冲突检查和带时间戳的备份保护每一次保存',
                '可为单个数据库开启只读模式，防止意外更改',
            ],
            screen: 'screen-07-entry-edit.png',
            reverse: false,
        },
    ],
    safety: {
        eyebrow: '数据安全',
        h2: '经过严格测试，<br><em>一个字节</em>都不丢失。',
        lead: '密码管理器绝不能损坏你的保险库，也不能悄悄丢失其中的任何部分。每项更改发布之前，自动化测试都会验证：',
        items: [
            {
                title: '保存时不丢失任何数据。',
                body: '每一种编辑都会被保存并逐项读回——密码、备注、附件、条目历史记录，甚至其他 KeePass 应用写入的、KeeForge 并不认识的数据，都必须与写入时完全一致地读出。',
            },
            {
                title: '你的文件在被写入之前就受到保护。',
                body: 'KeeForge 拒绝覆盖你打开文件期间其他程序做出的更改，在每次保存前写入带时间戳的备份，并且会直接拒绝已损坏的数据库，而不是加载不完整的数据。',
            },
            {
                title: '一个独立的程序予以确认。',
                body: '每个版本都必须通过一道检验：KeePassXC——一款与 KeeForge 没有任何共享代码、被广泛使用的 KeePass 应用——打开 KeeForge 写入的数据库，解密其中的密码，并确认附件逐位一致。同样，其他 KeePass 软件创建的数据库必须能在 KeeForge 中打开，并在 KeeForge 保存后仍能被其他软件读取。',
            },
        ],
        linkLabel: '了解测试方式',
        linkHref: 'https://github.com/KeeForge/KeeForge/blob/main/docs/i18n/README.zh-Hans.md#数据安全',
    },
    compare: {
        eyebrow: '横向对比',
        h2: '已经在用密码管理器？<em>看看 KeeForge 的定位。</em>',
        cards: [
            {
                title: 'vs iCloud 钥匙串',
                bullets: [
                    'KeePass <code class="mono">.kdbx</code> 保险库可与桌面工具（KeePassXC、KeePass 2.x）配合使用，也能在非 Apple 设备上使用。',
                    '你的加密数据库是可移植的——可以本地备份，通过 Dropbox、OneDrive 或 WebDAV 同步，或完全离线存放。',
                    '代码开源可审计，没有任何形式的遥测。',
                ],
            },
            {
                title: 'vs 1Password 和 Bitwarden',
                bullets: [
                    '无订阅、无账户、无供应商锁定。你的保险库就是一个文件，存放在你的设备或你自己的云端。',
                    '兼容开放的 KeePass 生态——KeePassXC、Strongbox、KeePassium、Keepass2Android。',
                    'GPLv3 开源。每一行代码都可审计，零分析、零遥测。',
                ],
            },
            {
                title: 'vs 其他 iOS KeePass 客户端',
                bullets: [
                    '原生 Swift 编写，面向 iOS 18+，支持最新平台功能（通行密钥、TOTP 自动填充、“文件”集成）。',
                    '永久免费，功能齐全——没有高级版，没有应用内付费墙（只有可选的打赏）。',
                    '保存带冲突检测并自动备份；云端保险库的自动填充可离线使用。',
                ],
            },
        ],
    },
    beta: {
        eyebrow: '公开测试版',
        h2: '<em>抢先</em>试用<br>下一个版本。',
        body: '新版本会先通过 TestFlight 发布，然后才登陆 App Store。',
        cta: '通过 TestFlight 加入测试',
        href: 'https://testflight.apple.com/join/mPAT4f1a',
        availability: '测试名额上限为 300 人；当新版本正在 Apple 的 Beta 版审核中时，加入会暂停。如果链接提示测试版暂不接受新测试员，请稍后再试。',
        warningTitle: '请用数据库的副本测试，不要使用你的主保险库。',
        warningBody: '测试版可能带有正式版没有的问题——它会替换从 App Store 安装的版本，并打开同样的真实 .kdbx 文件。请先复制一份数据库，让测试版只打开副本。',
    },
    faq: {
        eyebrow: '常见问题',
        h2: '你的疑问，<br>直白作答。',
        items: [
            { q: 'KeeForge 真的免费吗？', a: '是的——App Store 免费下载，无订阅、无广告、无高级版。如果你想支持开发，可以给仓库加星，或请我喝杯咖啡。' },
            { q: '它能用我现有的 KeePass 数据库吗？', a: 'KeeForge 可读写使用 AES-256、ChaCha20 或 Twofish 搭配 AES-KDF 或 Argon2 的 KDBX 4.x 数据库。KDBX 3.1 数据库以只读模式打开。' },
            { q: '我的密码存储在哪里？', a: '存储在你的加密数据库中——在你的设备上，或你选择的存储位置，例如 iCloud 云盘、Dropbox、OneDrive、WebDAV 或其他“文件”提供方。KeeForge 不托管你的保险库。' },
            { q: '自动填充如何工作？', a: 'KeeForge 会注册为 iOS 凭证提供程序。在任何地方轻点登录输入框，选择 KeeForge，用 Face ID 验证身份，登录凭证即会自动填入。' },
            { q: '我可以信任它吗？', a: '读一读代码，或者自己编译。也可以信任 App Store 的审核流程加上公开的提交历史——这已经比大多数密码管理器给出的多。' },
        ],
    },
    footer: {
        copy: '© 2026 · GPL 3.0 · 一人开发',
        privacy: '隐私',
        privacyHref: '/zh-hans/privacy',
        support: '支持',
    },
};

const zhHant: typeof en = {
    lang: 'zh-hant',
    path: '/zh-hant/',
    title: 'KeeForge — 免費、開源的 iOS 版 KeePass',
    description:
        'KeeForge 是一款免費、開源的 KeePass 密碼管理員，適用於 iPhone 和 iPad，支援自動填寫、通行金鑰、TOTP，以及 Dropbox、OneDrive 與 WebDAV 同步，而且無需訂閱。',
    nav: {
        features: '功能',
        faq: '常見問題',
        changelog: '更新記錄',
        audit: '安全性稽核',
        source: '原始碼',
    },
    hero: {
        h1: '一款真正<em>融入</em> iOS 的<br>KeePass&nbsp;App。',
        lead:
            'KeeForge 以 Face&nbsp;ID 開啟你現有的 <code class="mono">.kdbx</code> 保險庫，在每個 App 中自動填寫密碼，而且永遠不會要求你訂閱。它就這樣安安靜靜地待在你的 iPhone 上——如同一件好工具該有的樣子。',
        downloadTiny: '在 App Store',
        downloadBig: '下載',
        readSource: '閱讀原始碼',
        screenshotAlt: 'KeeForge 資料庫列表畫面',
        meta: ['iOS 18 +', 'iPhone 和 iPad', 'KDBX 3.1 / 4.x', '永遠零追蹤'],
    },
    trustPills: [
        { k: '01', t: '開源', d: 'GPL 3.0。每一行程式碼皆可稽核。' },
        { k: '02', t: '相容 KeePass', d: 'KDBX 4.x 可讀寫，KDBX 3.1 唯讀。' },
        { k: '03', t: '永久免費', d: '無訂閱、無廣告、無加購。' },
        { k: '04', t: 'Face ID + 自動填寫', d: '在每個 App 中填寫登入資訊。' },
    ],
    features: [
        {
            eyebrow: '多個保險庫',
            title: '一個主畫面，收納你所有的資料庫。',
            body: '從「檔案」或 iCloud 雲碟加入 .kdbx 檔案，連接 Dropbox 或 OneDrive，或使用你自己的 WebDAV 伺服器。KeeForge 將個人、工作與共用保險庫集中在同一個主畫面上。',
            points: [
                '想開啟多少個資料庫都可以，本機或雲端皆可',
                '每個保險庫都會記住自己的暱稱、金鑰檔案與偏好設定',
                '原生支援 Dropbox、OneDrive 與 WebDAV 的瀏覽與同步',
            ],
            screen: 'screen-01-database-list.png',
            reverse: false,
        },
        {
            eyebrow: '整理與搜尋',
            title: '群組、搜尋，以及你所期待的項目詳細畫面。',
            body: '依照你在桌面端整理保險庫的方式，逐層瀏覽資料夾。跨所有群組搜尋標題、使用者名稱、URL 與備註。打開項目即可拷貝、顯示欄位或前往 URL。',
            points: [
                '階層式群組，與 KeePassXC 如出一轍',
                '建立群組，或將項目與群組移到資源回收筒',
                '不必匯出保險庫，即可預覽並分享項目附件',
            ],
            screen: 'screen-03-vault-groups.png',
            reverse: true,
        },
        {
            eyebrow: '在裝置上編輯',
            title: '不必離開裝置，就能建立與編輯項目。',
            body: '編輯標題、使用者名稱、密碼、URL、標籤與備註。點一下即可產生高強度密碼，再將加密後的變更直接儲存回原始 .kdbx 檔案。',
            points: [
                '在本機或已連接的雲端資料夾中建立新的 KDBX 4.x 保險庫',
                '衝突檢查與含時間戳記的備份，保護每一次儲存',
                '不想改動時，可為個別資料庫開啟唯讀模式',
            ],
            screen: 'screen-07-entry-edit.png',
            reverse: false,
        },
    ],
    safety: {
        eyebrow: '資料安全',
        h2: '徹底測試，讓你<br>連<em>一個位元組</em>都不會遺失。',
        lead: '密碼管理員絕不能損毀你的保險庫，也不能悄悄遺失其中任何一部分。每項變更在發佈前，都必須通過自動化測試驗證：',
        items: [
            {
                title: '儲存時，什麼都不會遺失。',
                body: '每一種編輯都會先儲存，再逐項讀回比對——密碼、備註、附件、項目歷史記錄，甚至是 KeeForge 無法辨識、來自其他 KeePass App 的資料，都必須與寫入時分毫不差。',
            },
            {
                title: '在動到你的檔案之前，先保護好它。',
                body: 'KeeForge 拒絕覆寫你開啟檔案期間由其他地方所做的變更，在每次儲存前寫入含時間戳記的備份，並直接拒絕已損毀的資料庫，而不是載入不完整的資料。',
            },
            {
                title: '由獨立程式交叉驗證。',
                body: '每個版本都必須通過一道關卡：由 KeePassXC——一款廣泛使用、與 KeeForge 不共用任何程式碼的 KeePass App——開啟 KeeForge 寫入的資料庫、解密其中的密碼，並確認附件逐位元一致。同樣地，其他 KeePass 軟體建立的資料庫必須能在 KeeForge 中開啟，且經 KeeForge 儲存後仍可在其他軟體中正常讀取。',
            },
        ],
        linkLabel: '瞭解測試方式',
        linkHref: 'https://github.com/KeeForge/KeeForge/blob/main/docs/i18n/README.zh-Hant.md#資料安全',
    },
    compare: {
        eyebrow: '橫向比較',
        h2: '已經在用密碼管理員？<em>看看 KeeForge 的定位。</em>',
        cards: [
            {
                title: 'vs iCloud 鑰匙圈',
                bullets: [
                    'KeePass <code class="mono">.kdbx</code> 保險庫可搭配桌面工具（KeePassXC、KeePass 2.x），也能在非 Apple 裝置上使用。',
                    '你的加密資料庫可以隨身帶著走——在本機備份、透過 Dropbox、OneDrive 或 WebDAV 同步，或離線保存。',
                    '程式碼開源、可供稽核，而且完全沒有任何遙測。',
                ],
            },
            {
                title: 'vs 1Password 與 Bitwarden',
                bullets: [
                    '無訂閱、無帳號、不被廠商綁定。你的保險庫就是一個檔案，存放在你的裝置或你自己的雲端。',
                    '相容開放的 KeePass 生態系——KeePassXC、Strongbox、KeePassium、Keepass2Android。',
                    'GPLv3 開源。每一行程式碼皆可稽核，零分析、零遙測。',
                ],
            },
            {
                title: 'vs 其他 iOS KeePass 用戶端',
                bullets: [
                    '原生 Swift 打造，鎖定 iOS 18+，支援最新平台功能（通行金鑰、TOTP 自動填寫、「檔案」整合）。',
                    '永久免費，功能全數開放——沒有進階版，App 內也沒有付費牆（只有可自由選擇的打賞）。',
                    '儲存具備衝突偵測與自動備份；雲端保險庫離線時也能使用自動填寫。',
                ],
            },
        ],
    },
    beta: {
        eyebrow: '公開測試版',
        h2: '在正式推出<em>之前</em>，<br>搶先試用下一個版本。',
        body: '新版本會先在 TestFlight 上發佈，之後才會登上 App Store。',
        cta: '透過 TestFlight 加入測試',
        href: 'https://testflight.apple.com/join/mPAT4f1a',
        availability: '測試名額上限為 300 位；當新版本正在 Apple 的 Beta 審查中時，會暫停接受加入。如果連結顯示測試版目前不接受新測試者，請稍後再試。',
        warningTitle: '請用資料庫的複本測試，不要用你的主要保險庫。',
        warningBody: '測試版可能帶有正式版沒有的錯誤——而且它會取代 App Store 安裝的版本，並開啟同樣真實的 .kdbx 檔案。請先複製一份資料庫，讓測試版只開啟複本。',
    },
    faq: {
        eyebrow: '常見問題',
        h2: '你的疑問，<br>直白解答。',
        items: [
            { q: 'KeeForge 真的免費嗎？', a: '是的——在 App Store 免費下載，無訂閱、無廣告、沒有進階付費版。如果你想支持開發，歡迎在 GitHub 上給儲存庫一顆星，或請我喝杯咖啡。' },
            { q: '它能開啟我現有的 KeePass 資料庫嗎？', a: 'KeeForge 可讀寫採用 AES-256、ChaCha20 或 Twofish 搭配 AES-KDF 或 Argon2 的 KDBX 4.x 資料庫。KDBX 3.1 資料庫會以唯讀模式開啟。' },
            { q: '我的密碼儲存在哪裡？', a: '儲存在你的加密資料庫中——位於你的裝置，或你選擇的儲存位置，例如 iCloud 雲碟、Dropbox、OneDrive、WebDAV 或其他「檔案」提供者。KeeForge 不會代管你的保險庫。' },
            { q: '自動填寫如何運作？', a: 'KeeForge 會註冊為 iOS 的憑證提供者。在任何地方點一下登入欄位，選擇 KeeForge，以 Face ID 驗證身分，你的登入資訊就會自動填入。' },
            { q: '我可以信任它嗎？', a: '讀程式碼、自己編譯，或者相信 App Store 的審查流程加上公開的提交歷史——這已經比大多數密碼管理員能給的更多。' },
        ],
    },
    footer: {
        copy: '© 2026 · GPL 3.0 · 一人打造',
        privacy: '隱私權',
        privacyHref: '/zh-hant/privacy',
        support: '支援',
    },
};

const ja: typeof en = {
    lang: 'ja',
    path: '/ja/',
    title: 'KeeForge — 無料・オープンソースの iOS 向け KeePass',
    description:
        'KeeForge は iPhone と iPad のための無料・オープンソースの KeePass パスワードマネージャーです。自動入力、パスキー、TOTP、Dropbox・OneDrive・WebDAV 同期に対応し、サブスクリプションは不要です。',
    nav: {
        features: '機能',
        faq: 'よくある質問',
        changelog: '変更履歴',
        audit: 'セキュリティ監査',
        source: 'ソースコード',
    },
    hero: {
        h1: 'iOS に<em>溶け込む</em><br>KeePass アプリ',
        lead:
            'KeeForge は手持ちの <code class="mono">.kdbx</code> 保管庫を Face&nbsp;ID で開き、あらゆるアプリでパスワードを自動入力します。サブスクリプションを求めることは一切ありません。よい道具がそうであるように、ただ静かに iPhone の中にあり続けます。',
        downloadTiny: 'App Store から',
        downloadBig: 'ダウンロード',
        readSource: 'ソースコードを読む',
        screenshotAlt: 'KeeForge のデータベース一覧画面',
        meta: ['iOS 18 +', 'iPhone と iPad', 'KDBX 3.1 / 4.x', 'トラッキングは一切なし'],
    },
    trustPills: [
        { k: '01', t: 'オープンソース', d: 'GPL 3.0。すべての行を検証できます。' },
        { k: '02', t: 'KeePass 互換', d: 'KDBX 4.x は読み書き対応。KDBX 3.1 は読み取り専用。' },
        { k: '03', t: 'ずっと無料', d: 'サブスクなし、広告なし、アップセルなし。' },
        { k: '04', t: 'Face ID + 自動入力', d: 'あらゆるアプリでログイン情報を入力します。' },
    ],
    features: [
        {
            eyebrow: '複数の保管庫',
            title: '手持ちのデータベースを、ひとつのホーム画面に。',
            body: '「ファイル」App や iCloud Drive から .kdbx ファイルを追加し、Dropbox や OneDrive を接続したり、自分の WebDAV サーバーを使ったりできます。KeeForge は個人用・仕事用・共有の保管庫を、ひとつのホーム画面にまとめます。',
            points: [
                'ローカルでもクラウドでも、好きなだけデータベースを開けます',
                '保管庫ごとに、愛称・キーファイル・設定を記憶します',
                'Dropbox、OneDrive、WebDAV のブラウズと同期にネイティブ対応',
            ],
            screen: 'screen-01-database-list.png',
            reverse: false,
        },
        {
            eyebrow: '整理と検索',
            title: 'グループ、検索、そして期待どおりのエントリ詳細。',
            body: 'デスクトップで組み立てた保管庫の構成そのままに、フォルダ単位で閲覧できます。すべてのグループを横断して、タイトル・ユーザー名・URL・メモを検索。エントリを開けば、コピーも表示も、URL を開くこともできます。',
            points: [
                'KeePassXC と同じ、階層構造のグループ',
                'グループを作成したり、エントリやグループをゴミ箱へ移動したり',
                '保管庫を書き出さずに、添付ファイルをプレビュー・共有',
            ],
            screen: 'screen-03-vault-groups.png',
            reverse: true,
        },
        {
            eyebrow: '端末上で編集',
            title: '端末を離れることなく、エントリを作成・編集。',
            body: 'タイトル、ユーザー名、パスワード、URL、タグ、メモを編集できます。ワンタップで強力なパスワードを生成し、暗号化された変更をそのまま元の .kdbx ファイルに保存します。',
            points: [
                'ローカルにも、接続済みのクラウドフォルダにも、新しい KDBX 4.x 保管庫を作成できます',
                '競合チェックとタイムスタンプ付きバックアップが、すべての保存を守ります',
                '変更したくないときは、データベースごとに読み取り専用モードを設定できます',
            ],
            screen: 'screen-07-entry-edit.png',
            reverse: false,
        },
    ],
    safety: {
        eyebrow: 'データの安全性',
        h2: '<em>1 バイト</em>も<br>失わないよう、<br>テスト済み。',
        lead: 'パスワードマネージャーが保管庫を壊したり、その一部を黙って失ったりすることは、決してあってはなりません。変更が出荷される前に、自動テストが次のことを検証します。',
        items: [
            {
                title: '保存しても、何ひとつ失われない。',
                body: 'あらゆる種類の編集が保存され、ひとつずつ読み戻されます。パスワード、メモ、添付ファイル、エントリ履歴、さらには KeeForge が認識しない他の KeePass アプリのデータまで、すべてが入れたときとまったく同じ形で戻ってこなければなりません。',
            },
            {
                title: '書き込む前に、ファイルを守る。',
                body: 'KeeForge は、あなたがファイルを開いているあいだに他所から加えられた変更を上書きすることを拒み、保存のたびにタイムスタンプ付きのバックアップを書き出し、壊れたデータベースは中途半端に読み込まず、きっぱり拒否します。',
            },
            {
                title: '独立した別のプログラムが、それを裏づける。',
                body: 'すべてのリリースは、あるゲートを通過しなければなりません。KeeForge とコードを一切共有しない、広く使われている KeePass アプリ KeePassXC が、KeeForge の書き出したデータベースを開き、パスワードを復号し、添付ファイルがビット単位で一致することを確認します。同様に、他の KeePass ソフトウェアで作られたデータベースは KeeForge で開けなければならず、KeeForge が保存したあとも他のソフトウェアで読めなければなりません。',
            },
        ],
        linkLabel: 'テスト方法を読む',
        linkHref: 'https://github.com/KeeForge/KeeForge/blob/main/docs/i18n/README.ja.md#データの安全性',
    },
    compare: {
        eyebrow: '他との比較',
        h2: 'すでにパスワードマネージャーを使っている？<em>KeeForge の立ち位置はこちら。</em>',
        cards: [
            {
                title: 'vs iCloud キーチェーン',
                bullets: [
                    'KeePass の <code class="mono">.kdbx</code> 保管庫は、デスクトップのツール（KeePassXC、KeePass 2.x）でも、Apple 以外の端末でも使えます。',
                    '暗号化されたデータベースは持ち運び自由です。ローカルにバックアップしても、Dropbox・OneDrive・WebDAV で同期しても、オフラインで保管してもかまいません。',
                    '自分で検証できるオープンソースのコード。テレメトリは一切ありません。',
                ],
            },
            {
                title: 'vs 1Password・Bitwarden',
                bullets: [
                    'サブスクなし、アカウントなし、ベンダーロックインなし。保管庫は、あなたの端末か、あなた自身のクラウドにあるひとつのファイルです。',
                    'オープンな KeePass エコシステムと互換 — KeePassXC、Strongbox、KeePassium、Keepass2Android。',
                    'GPLv3 のオープンソース。すべての行が検証可能で、解析もテレメトリもゼロです。',
                ],
            },
            {
                title: 'vs 他の iOS 向け KeePass クライアント',
                bullets: [
                    'ネイティブ Swift 製。iOS 18 以降を対象に、最新のプラットフォーム機能（パスキー、TOTP 自動入力、「ファイル」App 連携）を活かして作られています。',
                    'ずっと無料で、機能はすべて込み。上位プランも、アプリ内のペイウォールもありません（任意のチップだけです）。',
                    '保存は競合を検出して自動でバックアップ。クラウド上の保管庫でも、自動入力はオフラインで動きます。',
                ],
            },
        ],
    },
    beta: {
        eyebrow: '公開ベータ',
        h2: '次のバージョンを、<br>リリース<em>前</em>に。',
        body: '新しいバージョンは、App Store に届く前に TestFlight で配信されます。',
        cta: 'TestFlight でベータに参加',
        href: 'https://testflight.apple.com/join/mPAT4f1a',
        availability: '定員は 300 名で、新しいバージョンが Apple のベータ審査中のあいだは参加受付が止まります。リンクがテスターを受け付けていないと表示される場合は、しばらくしてからもう一度お試しください。',
        warningTitle: 'メインの保管庫ではなく、データベースのコピーでテストしてください。',
        warningBody: 'ベータ版には、リリース版にはない不具合が含まれることがあります。しかも App Store 版を置き換え、同じ本物の .kdbx ファイルを開きます。まずデータベースを複製し、ベータ版にはそのコピーを開かせてください。',
    },
    faq: {
        eyebrow: 'よくある質問',
        h2: '疑問に、<br>率直にお答え。',
        items: [
            { q: 'KeeForge は本当に無料ですか？', a: 'はい。App Store で無料、サブスクも広告も上位プランもありません。開発を応援したい場合は、リポジトリにスターを付けるか、コーヒーをおごってください。' },
            { q: '手持ちの KeePass データベースで使えますか？', a: 'KeeForge は、AES-256、ChaCha20、Twofish を AES-KDF または Argon2 と組み合わせた KDBX 4.x データベースを読み書きします。KDBX 3.1 のデータベースは読み取り専用で開きます。' },
            { q: 'パスワードはどこに保存されますか？', a: 'あなたの端末、または iCloud Drive、Dropbox、OneDrive、WebDAV、その他の「ファイル」プロバイダなど、あなたが選んだ保存先にある暗号化データベースの中です。KeeForge が保管庫を預かることはありません。' },
            { q: '自動入力はどう動きますか？', a: 'KeeForge は iOS の Credential Provider として登録されます。どのアプリでもログイン欄をタップして KeeForge を選び、Face ID で認証すれば、ログイン情報が入力されます。' },
            { q: '信頼できますか？', a: 'コードを読んでください。自分でビルドしてもかまいません。あるいは、App Store の審査プロセスと、公開されたコミット履歴を信頼してください。それだけでも、たいていのパスワードマネージャーより多くを差し出しています。' },
        ],
    },
    footer: {
        copy: '© 2026 · GPL 3.0 · ひとりで作っています',
        privacy: 'プライバシー',
        privacyHref: '/ja/privacy',
        support: 'サポート',
    },
};

export const home = { en, de, fr, es, 'zh-hans': zhHans, 'zh-hant': zhHant, ja };

