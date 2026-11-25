// Copy for the "best KeePass app for iPhone" guide, one JSON file per locale in
// ./guide/. en.json is the source; every other locale must have the same shape
// (tests/home.test.js checks this). Facts in the copy must match the vendor
// pages listed in `sourceLinks`.
import type { LocaleCode } from './locales';
import en from './guide/en.json';

export type GuideCopy = typeof en;

const files = import.meta.glob<{ default: GuideCopy }>('./guide/*.json', { eager: true });

export const guide = Object.fromEntries(
    Object.entries(files).map(([file, mod]) => [file.slice('./guide/'.length, -'.json'.length), mod.default]),
) as Record<LocaleCode, GuideCopy>;

export const guideSlug = 'best-keepass-app-iphone/';

/** Path of the guide in a locale, e.g. '/best-keepass-app-iphone/' or '/de/best-keepass-app-iphone/'. */
export const guidePath = (lang: LocaleCode) => `${lang === 'en' ? '/' : `/${lang}/`}${guideSlug}`;

/** Locales that have a translated guide. */
export const guideLocales = Object.keys(guide) as LocaleCode[];

// Not translated: app names, which rivals pass each checklist row, and source URLs.
export const guideApps = ['KeeForge', 'KeePassium', 'Strongbox', 'PanicVault', 'OneKeePass'];
export const guideRivals = ['KeePassium', 'Strongbox', 'PanicVault'];
export const verdictOk: boolean[][] = [[false, false, false], [true, false, false], [true, false, false], [true, true, false], [false, false, true]];
export const sourceLinks: Record<string, string[]> = {
    "KeeForge": [
        "https://github.com/KeeForge/KeeForge/blob/main/README.md",
        "https://github.com/KeeForge/KeeForge/blob/main/CHANGELOG.md",
        "https://github.com/KeeForge/KeeForge/blob/main/LICENSE",
        "https://apps.apple.com/app/id6759309295"
    ],
    "KeePassium": [
        "https://keepassium.com/pricing/",
        "https://support.keepassium.com/kb/security-audits/",
        "https://keepassium.com/audit/2024-10-Cure53.pdf",
        "https://support.keepassium.com/kb/sync/",
        "https://support.keepassium.com/kb/yubikey-compatibility/",
        "https://keepassium.com/blog/2024/12/keepassium-2.0/",
        "https://github.com/keepassium/KeePassium",
        "https://apps.apple.com/app/id1435127111"
    ],
    "Strongbox": [
        "https://strongboxsafe.com/comparison/",
        "https://strongboxsafe.com/pricing/",
        "https://strongbox.reamaze.com/kb/faqs/what-version-of-keepass-does-strongbox-support",
        "https://strongbox.reamaze.com/kb/security-and-privacy/security-audit",
        "https://strongboxsafe.com/strongbox-joins-applause/",
        "https://github.com/strongbox-password-safe/Strongbox",
        "https://apps.apple.com/app/id897283731"
    ],
    "PanicVault": [
        "https://panicvault.org/",
        "https://www.panicvault.org/help/",
        "https://www.panicvault.org/keepass/keepass-ios/",
        "https://apps.apple.com/app/id6759188575"
    ],
    "OneKeePass": [
        "https://onekeepass.com/",
        "https://github.com/onekeepass/mobile",
        "https://apps.apple.com/app/id6448712640"
    ],
    "KeePassXC": [
        "https://keepassxc.org/docs/"
    ]
};
