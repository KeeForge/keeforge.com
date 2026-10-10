import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';
import { home } from '../src/i18n/home.ts';

const siteRoot = new URL('../dist/', import.meta.url);
const locales = ['en', 'de', 'fr', 'es', 'zh-hans', 'zh-hant', 'ja', 'it'];
const appStore = 'https://apps.apple.com/us/app/keeforge/id6759309295';

for (const locale of locales) {
    test(`${locale}: homepage exposes both downloads, the shared beta link, and existing local destinations`, () => {
        const copy = home[locale];
        const html = readFileSync(new URL(`${locale === 'en' ? '' : `${locale}/`}index.html`, siteRoot), 'utf8');
        assert.match(html, /<title>[^<]*iOS[^<]*macOS/);
        assert.match(html, /rel="canonical"/);
        for (const platform of ['iphone', 'mac']) {
            assert.equal(html.split(`href="${appStore}?platform=${platform}"`).length - 1, 1);
        }
        for (const destination of [
            'https://github.com/KeeForge/KeeForge/releases/latest',
            'https://testflight.apple.com/join/mPAT4f1a',
            'mailto:support@keeforge.com',
        ]) assert.ok(html.includes(`href="${destination}"`), destination);
        assert.equal((html.match(/href="https:\/\/testflight\.apple\.com\/join\//g) ?? []).length, 1);
        assert.ok(html.includes(copy.beta.cta.replaceAll('&', '&amp;')));
        assert.equal((html.match(/class="faq-symbol"/g) ?? []).length, 8);
        assert.equal(copy.faq.items.length, 8);
        assert.ok(copy.hero.h1.includes('iPhone') && copy.hero.h1.includes('iPad') && copy.hero.h1.includes('Mac'));
        assert.ok(copy.features[0].iosNote.includes('Dropbox'));
        assert.ok(copy.features[0].macNote.includes('WebDAV'));
        for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
            let path = match[1].slice(1);
            if (!path || path.endsWith('/')) path += 'index.html';
            if (!path.split('/').at(-1).includes('.')) path += '/index.html';
            assert.ok(existsSync(new URL(path, siteRoot)), `Missing local destination: ${match[1]}`);
        }
    });
}

test('new homepage text is present in every shipped locale', () => {
    const newText = copy => [copy.hero.h1, copy.hero.lead, copy.downloads.ios,
        copy.downloads.mac, copy.downloads.direct, copy.nav.download, copy.nav.menu,
        copy.everyday.title, copy.screenshots.iosEditAlt, ...copy.features.map(f => f.body)];
    for (const locale of locales.slice(1)) {
        const translated = newText(home[locale]);
        const english = newText(home.en);
        translated.forEach((value, i) => {
            assert.ok(value.trim(), `${locale}: empty copy at ${i}`);
            // "Menu" is also French and Italian.
            if (i !== 6) assert.notEqual(value, english[i], `${locale}: untranslated copy at ${i}`);
        });
    }
});

test('every translated page exposes the Italian alternative and keeps Italian navigation local', () => {
    for (const page of ['', 'privacy/', 'vs/keepassium/', 'vs/strongbox/']) {
        const italianPath = `/it/${page}`;
        for (const locale of locales) {
            const path = `${locale === 'en' ? '' : `${locale}/`}${page}index.html`;
            const html = readFileSync(new URL(path, siteRoot), 'utf8');
            assert.ok(html.includes(`hreflang="it" href="https://keeforge.com${italianPath}"`), `${path}: Italian SEO alternative`);
            if (locale === 'it') {
                assert.match(html, /<html lang="it">/);
                assert.match(html, /aria-current="true"[^>]*>Italiano</);
                assert.ok(html.includes('href="/it/"'), `${path}: Italian homepage`);
            } else {
                assert.ok(html.includes(`href="${italianPath}?setlang=1"`), `${path}: Italian language switcher`);
            }
        }
    }
});
