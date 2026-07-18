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
        open: 'Open source',
        faq: 'FAQ',
        changelog: 'Changelog',
        source: 'Source',
    },
    switcher: { label: 'Deutsch', href: '/de/', hrefLang: 'de' },
    hero: {
        h1: 'A KeePass app<br> that feels at <em>home</em> on&nbsp;iOS.',
        lead:
            'KeeForge opens your existing <code class="mono">.kdbx</code> vaults with Face&nbsp;ID, fills passwords across every app, and never asks for a subscription. It just lives on your phone, the way good tools do.',
        downloadTiny: 'Download on the',
        downloadBig: 'App Store',
        readSource: 'Read the source',
        screenshotAlt: 'KeeForge database list screen',
        meta: ['iOS 17 +', 'iPhone &amp; iPad', 'KDBX 3.1 / 4.x', 'No tracking, ever'],
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
                    'Native Swift, built for iOS 17+ with current platform features (passkeys, TOTP AutoFill, Files integration).',
                    'Free forever, all features included — no premium tier, no in-app paywalls (just an optional tip jar).',
                    'Saves are conflict-detected and auto-backed-up; AutoFill works offline for cloud-backed vaults.',
                ],
            },
        ],
    },
    open: {
        eyebrow: 'BUILT IN THE OPEN',
        h2: 'One developer.<br><em>Public</em> commit history.',
        body: 'KeeForge is built by one person, in the open, on GitHub. File an issue, send a pull request, or just read the code before you trust it with your secrets — that’s the whole point.',
    },
    faq: {
        eyebrow: 'FAQ',
        h2: 'Questions,<br>answered plainly.',
        items: [
            { q: 'Is KeeForge really free?', a: 'Yes — free on the App Store, no subscriptions, no ads, no premium tier. If you’d like to support development, star the repo or buy me a coffee.' },
            { q: 'Does it work with my existing KeePass database?', a: 'KeeForge reads and writes KDBX 4.x databases using AES-256 or ChaCha20 with AES-KDF or Argon2. Password-only KDBX 3.1 databases open in read-only mode.' },
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
        open: 'Open Source',
        faq: 'FAQ',
        changelog: 'Changelog',
        source: 'Quellcode',
    },
    switcher: { label: 'English', href: '/', hrefLang: 'en' },
    hero: {
        h1: 'Eine KeePass-App,<br> die sich auf iOS <em>zu&nbsp;Hause</em> fühlt.',
        lead:
            'KeeForge öffnet deine bestehenden <code class="mono">.kdbx</code>-Tresore mit Face&nbsp;ID, füllt Passwörter in jeder App aus und verlangt nie ein Abo. Sie lebt einfach auf deinem iPhone — so, wie gute Werkzeuge das tun.',
        downloadTiny: 'Laden im',
        downloadBig: 'App Store',
        readSource: 'Quellcode lesen',
        screenshotAlt: 'KeeForge-Datenbankliste',
        meta: ['iOS 17 +', 'iPhone &amp; iPad', 'KDBX 3.1 / 4.x', 'Kein Tracking, niemals'],
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
                    'Natives Swift, gebaut für iOS 17+ mit aktuellen Plattformfunktionen (Passkeys, TOTP-AutoFill, Dateien-Integration).',
                    'Für immer kostenlos, alle Funktionen inklusive — keine Premium-Stufe, keine Paywalls (nur ein optionales Trinkgeld).',
                    'Speichern mit Konflikterkennung und automatischen Backups; AutoFill funktioniert für Cloud-Tresore auch offline.',
                ],
            },
        ],
    },
    open: {
        eyebrow: 'OFFEN ENTWICKELT',
        h2: 'Ein Entwickler.<br><em>Öffentliche</em> Commit-Historie.',
        body: 'KeeForge wird von einer Person entwickelt — offen, auf GitHub. Eröffne ein Issue, schicke einen Pull Request oder lies einfach den Code, bevor du ihm deine Geheimnisse anvertraust. Genau darum geht es.',
    },
    faq: {
        eyebrow: 'FAQ',
        h2: 'Fragen,<br>klar beantwortet.',
        items: [
            { q: 'Ist KeeForge wirklich kostenlos?', a: 'Ja — kostenlos im App Store, ohne Abo, ohne Werbung, ohne Premium-Stufe. Wenn du die Entwicklung unterstützen möchtest, gib dem Repo einen Stern oder spendiere mir einen Kaffee.' },
            { q: 'Funktioniert es mit meiner bestehenden KeePass-Datenbank?', a: 'KeeForge liest und schreibt KDBX-4.x-Datenbanken mit AES-256 oder ChaCha20 und AES-KDF oder Argon2. Nur mit Passwort geschützte KDBX-3.1-Datenbanken öffnen sich im Nur-Lese-Modus.' },
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

export const home = { en, de };
