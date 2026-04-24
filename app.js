// --- 1. Internationalization (i18n) Data & SEO ---
const i18n = {
    en: {
        pageTitle: "AnyTLS Download | Best Free Clients for Mihomo & sing-box",
        pageMetaDesc: "Download the best free and open-source AnyTLS clients. Complete directory of AnyTLS supported proxy apps for Windows, Mac, Linux, Android, iOS, and Routers.",
        title: "AnyTLS Download Hub",
        desc: "Download the best free and open-source clients supporting the AnyTLS proxy protocol. Get secure apps for Mihomo and sing-box cores across Windows, macOS, Android, and Routers.",
        catDesktop: "Desktop Proxy",
        catMobile: "Mobile Client",
        catRouter: "Router & CLI",
        btnDownload: "Download",
        btnGithub: "GitHub",
        btnWiki: "Wiki",
        btnAppStore: "App Store",
        btnPlayStore: "Google Play"
    },
    zh: {
        pageTitle: "AnyTLS 下载 | 支持 Mihomo 与 sing-box 的免费客户端大全",
        pageMetaDesc: "AnyTLS 客户端最新下载地址聚合。提供支持 AnyTLS 协议的免费开源代理软件，涵盖 Windows, Mac, Android, iOS 及 OpenWrt 路由器。",
        title: "AnyTLS 客户端下载聚合",
        desc: "为您精选全平台支持 AnyTLS 代理协议的免费与开源客户端。基于 Mihomo 和 sing-box 内核，提供更安全、高效的网络体验。",
        catDesktop: "桌面端代理",
        catMobile: "移动端代理",
        catRouter: "路由器与命令行",
        btnDownload: "官方下载",
        btnGithub: "开源仓库",
        btnWiki: "使用文档",
        btnAppStore: "苹果商店",
        btnPlayStore: "谷歌商店"
    },
    es: {
        pageTitle: "Descargar AnyTLS | Mejores Clientes Gratuitos para Mihomo y sing-box",
        pageMetaDesc: "Descarga los mejores clientes AnyTLS gratuitos y de código abierto para Windows, Mac, Linux, Android, iOS y Routers.",
        title: "Hub de Descargas AnyTLS",
        desc: "Descargue los mejores clientes gratuitos y de código abierto compatibles con el protocolo proxy AnyTLS para todos sus dispositivos.",
        catDesktop: "Proxy Escritorio",
        catMobile: "Cliente Móvil",
        catRouter: "Router y CLI",
        btnDownload: "Descargar",
        btnGithub: "GitHub",
        btnWiki: "Wiki",
        btnAppStore: "App Store",
        btnPlayStore: "Google Play"
    },
    fr: {
        pageTitle: "Télécharger AnyTLS | Meilleurs Clients Gratuits pour Mihomo & sing-box",
        pageMetaDesc: "Téléchargez les meilleurs clients AnyTLS gratuits et open-source pour Windows, Mac, Linux, Android, iOS et Routeurs.",
        title: "Hub de Téléchargement AnyTLS",
        desc: "Téléchargez les meilleurs clients gratuits et open-source prenant en charge le protocole proxy AnyTLS pour tous vos appareils.",
        catDesktop: "Proxy Bureau",
        catMobile: "Client Mobile",
        catRouter: "Routeur & CLI",
        btnDownload: "Télécharger",
        btnGithub: "GitHub",
        btnWiki: "Wiki",
        btnAppStore: "App Store",
        btnPlayStore: "Google Play"
    },
    de: {
        pageTitle: "AnyTLS Download | Beste kostenlose Clients für Mihomo & sing-box",
        pageMetaDesc: "Laden Sie die besten kostenlosen AnyTLS-Clients für Windows, Mac, Linux, Android, iOS und Router herunter.",
        title: "AnyTLS Download-Hub",
        desc: "Laden Sie die besten kostenlosen und Open-Source-Clients herunter, die das AnyTLS-Proxy-Protokoll unterstützen.",
        catDesktop: "Desktop-Proxy",
        catMobile: "Mobiler Client",
        catRouter: "Router & CLI",
        btnDownload: "Herunterladen",
        btnGithub: "GitHub",
        btnWiki: "Wiki",
        btnAppStore: "App Store",
        btnPlayStore: "Google Play"
    },
    ja: {
        pageTitle: "AnyTLS ダウンロード | Mihomoとsing-boxに最適な無料クライアント",
        pageMetaDesc: "Windows、Mac、Linux、Android、iOS、ルーター向けの最高の無料かつオープンソースのAnyTLSクライアントをダウンロード。",
        title: "AnyTLS ダウンロードハブ",
        desc: "AnyTLSプロキシプロトコルをサポートする、最高かつ安全な無料のオープンソースクライアントをダウンロードしてください。",
        catDesktop: "デスクトップ",
        catMobile: "モバイル",
        catRouter: "ルーター",
        btnDownload: "ダウンロード",
        btnGithub: "GitHub",
        btnWiki: "Wiki",
        btnAppStore: "App Store",
        btnPlayStore: "Google Play"
    },
    ru: {
        pageTitle: "Скачать AnyTLS | Лучшие бесплатные клиенты для Mihomo и sing-box",
        pageMetaDesc: "Скачайте лучшие бесплатные клиенты AnyTLS с открытым исходным кодом для Windows, Mac, Linux, Android, iOS и роутеров.",
        title: "Центр загрузок AnyTLS",
        desc: "Скачайте лучшие бесплатные клиенты с открытым исходным кодом, поддерживающие прокси-протокол AnyTLS для всех ваших устройств.",
        catDesktop: "Десктоп Прокси",
        catMobile: "Мобильный Клиент",
        catRouter: "Роутер и CLI",
        btnDownload: "Скачать",
        btnGithub: "GitHub",
        btnWiki: "Wiki",
        btnAppStore: "App Store",
        btnPlayStore: "Google Play"
    },
    ar: {
        pageTitle: "تنزيل AnyTLS | أفضل العملاء المجانيين لـ Mihomo و sing-box",
        pageMetaDesc: "قم بتنزيل أفضل عملاء AnyTLS المجانيين ومفتوحي المصدر لأنظمة Windows و Mac و Linux و Android و iOS وأجهزة التوجيه.",
        title: "مركز تنزيل AnyTLS",
        desc: "قم بتنزيل أفضل العملاء المجانيين ومفتوحي المصدر الذين يدعمون بروتوكول وكيل AnyTLS لجميع أجهزتك.",
        catDesktop: "وكيل سطح المكتب",
        catMobile: "عميل الهاتف",
        catRouter: "راوتر و CLI",
        btnDownload: "تنزيل",
        btnGithub: "جيت هاب",
        btnWiki: "ويكي",
        btnAppStore: "متجر التطبيقات",
        btnPlayStore: "جوجل بلاي"
    }
};

// --- 2. Client Database (SEO Optimized Descriptions) ---
const clients = [
    {
        name: "Clash Verge Rev",
        categoryKey: "catDesktop",
        icon: "fa-solid fa-desktop",
        desc: "Modern, highly customizable GUI for Mihomo. The best AnyTLS client for Windows, macOS, and Linux.",
        links: [
            { key: "btnDownload", icon: "fa-solid fa-download", url: "https://github.com/clash-verge-rev/clash-verge-rev/releases", primary: true },
            { key: "btnGithub", icon: "fa-brands fa-github", url: "https://github.com/clash-verge-rev/clash-verge-rev" }
        ]
    },
    {
        name: "Clash Nyanpasu",
        categoryKey: "catDesktop",
        icon: "fa-solid fa-cat",
        desc: "Lightweight, cross-platform proxy client with seamless Mihomo core integration for AnyTLS.",
        links: [
            { key: "btnDownload", icon: "fa-brands fa-windows", url: "https://github.com/LibNyanpasu/clash-nyanpasu/releases", primary: true },
            { key: "btnGithub", icon: "fa-brands fa-github", url: "https://github.com/LibNyanpasu/clash-nyanpasu" }
        ]
    },
    {
        name: "NekoBox / NekoRay",
        categoryKey: "catDesktop",
        icon: "fa-solid fa-box",
        desc: "Powerful sing-box & Xray GUI client for power users needing advanced AnyTLS configurations.",
        links: [
            { key: "btnDownload", icon: "fa-brands fa-linux", url: "https://github.com/Matsuridayo/nekoray/releases", primary: true },
            { key: "btnWiki", icon: "fa-solid fa-book", url: "#" }
        ]
    },
    {
        name: "Hiddify Next",
        categoryKey: "catDesktop",
        icon: "fa-solid fa-bolt",
        desc: "Multi-platform client built on sing-box with smart routing and quick AnyTLS proxy import.",
        links: [
            { key: "btnDownload", icon: "fa-solid fa-cloud-arrow-down", url: "https://github.com/hiddify/hiddify-next/releases", primary: true },
            { key: "btnGithub", icon: "fa-brands fa-github", url: "https://github.com/hiddify/hiddify-next" }
        ]
    },
    {
        name: "OpenClash",
        categoryKey: "catRouter",
        icon: "fa-solid fa-network-wired",
        desc: "The definitive Clash proxy client for OpenWrt routers. Compile with Mihomo core for AnyTLS support.",
        links: [
            { key: "btnDownload", icon: "fa-solid fa-router", url: "https://github.com/vernesong/OpenClash", primary: true },
            { key: "btnWiki", icon: "fa-solid fa-book", url: "https://github.com/vernesong/OpenClash/wiki" }
        ]
    },
    {
        name: "ShellClash",
        categoryKey: "catRouter",
        icon: "fa-solid fa-terminal",
        desc: "Command-line proxy script for routers and set-top boxes. Easily switch to Mihomo for AnyTLS.",
        links: [
            { key: "btnDownload", icon: "fa-solid fa-code", url: "https://github.com/juewuy/ShellClash", primary: true },
            { key: "btnGithub", icon: "fa-brands fa-github", url: "https://github.com/juewuy/ShellClash" }
        ]
    },
    {
        name: "HomeProxy",
        categoryKey: "catRouter",
        icon: "fa-solid fa-house-signal",
        desc: "Native sing-box GUI designed exclusively for ImmortalWrt. Excellent AnyTLS routing capabilities.",
        links: [
            { key: "btnGithub", icon: "fa-brands fa-github", url: "https://github.com/immortalwrt/homeproxy", primary: true },
            { key: "btnWiki", icon: "fa-solid fa-book", url: "#" }
        ]
    },
    {
        name: "Clash Meta for Android",
        categoryKey: "catMobile",
        icon: "fa-brands fa-android",
        desc: "The most robust and native AnyTLS client app for Android devices. Powered by Mihomo.",
        links: [
            { key: "btnPlayStore", icon: "fa-brands fa-google-play", url: "https://github.com/MetaCubeX/ClashMetaForAndroid/releases", primary: true },
            { key: "btnGithub", icon: "fa-brands fa-github", url: "https://github.com/MetaCubeX/ClashMetaForAndroid" }
        ]
    },
    {
        name: "sing-box",
        categoryKey: "catMobile",
        icon: "fa-solid fa-cube",
        desc: "Official sing-box app for iOS, Apple TV, and Android. Fast and secure AnyTLS connections.",
        links: [
            { key: "btnAppStore", icon: "fa-brands fa-apple", url: "https://apps.apple.com/us/app/sing-box/id6451272834", primary: true },
            { key: "btnGithub", icon: "fa-brands fa-github", url: "https://github.com/SagerNet/sing-box" }
        ]
    }
];

// --- 3. Rendering Engine & SEO Injector ---
const langSwitch = document.getElementById('langSwitch');
const clientGrid = document.getElementById('clientGrid');
const titleEl = document.getElementById('i18n-title');
const descEl = document.getElementById('i18n-desc');

function renderApp(lang) {
    const t = i18n[lang] || i18n['en'];
    
    // 1. Update HTML Attributes
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // 2. Update SEO Meta Tags Dynamically
    document.title = t.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.pageMetaDesc);

    // 3. Update DOM Content
    titleEl.textContent = t.title;
    descEl.textContent = t.desc;

    // 4. Render Grid
    clientGrid.innerHTML = clients.map(client => `
        <div class="card">
            <div class="card-header">
                <i class="${client.icon}"></i>
                <div class="card-title">
                    <h3>${client.name}</h3>
                    <span>${t[client.categoryKey]}</span>
                </div>
            </div>
            <p class="card-desc">${client.desc}</p>
            <div class="card-actions">
                ${client.links.map(link => `
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn ${link.primary ? 'primary' : ''}">
                        <i class="${link.icon}"></i> ${t[link.key]}
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Event Listener for Language Change
langSwitch.addEventListener('change', (e) => {
    renderApp(e.target.value);
});

// Initial Render (detect browser lang or default to EN)
const browserLang = navigator.language.slice(0, 2);
const initLang = i18n[browserLang] ? browserLang : 'en';
langSwitch.value = initLang;
renderApp(initLang);
