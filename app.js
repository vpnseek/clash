// 1. Tab Switching Logic
function switchTab(tabId) {
    document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');

    document.getElementById('section-whois').style.display = 'none';
    document.getElementById('section-download').style.display = 'none';
    document.getElementById('section-tutorial').style.display = 'none';

    if(tabId === 'download') {
        document.getElementById('section-download').style.display = 'grid';
    } else {
        document.getElementById(`section-${tabId}`).style.display = 'block';
    }
}

// 2. Theme Switching Logic
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.querySelector('#themeToggle i');
    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        html.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// 3. Copy Code Logic
function copyCode() {
    const code = document.getElementById('scriptCode').innerText;
    const btn = document.getElementById('copyBtn');
    navigator.clipboard.writeText(code).then(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => { btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy'; }, 2000);
    });
}

// 4. i18n Full Translation Dictionary
const translations = {
    en: {
        navWhois: "Who is AnyTLS", navDownload: "Download", navTutorial: "Tutorial",
        heroTitle: "AnyTLS Download Hub",
        heroDesc: "Download the best free and open-source clients supporting the AnyTLS proxy protocol. Get secure apps across all devices.",
        whoisTitle: "Who is AnyTLS & Installation",
        whoisIntro: "<strong>AnyTLS</strong> is a cutting-edge proxy protocol designed for maximum security, speed, and undetectability. It masks your internet traffic to ensure seamless global connectivity.",
        whoisDesc: "Run this one-click script on your server (Ubuntu/Debian/CentOS) to automatically deploy the AnyTLS backend directly from GitHub.",
        descHiddify: "Powerful, user-friendly client for all platforms. Excellent AnyTLS support for both beginners and pros.",
        descMihomo: "The ultimate graphical interface for Mihomo core. Cross-platform and elegant.",
        descVerge: "Continuation of Clash Verge. Excellent UI and rule management.",
        descAndroid: "Top-tier clients for Android with native Material You design and AnyTLS support.",
        descIOS: "Powerful iOS clients. Import Clash profiles seamlessly for full AnyTLS connectivity.",
        descRouter: "OpenWrt router plugin. Bring AnyTLS proxy capability to your entire home network.",
        tutTitle: "How to Import Clash Subscription",
        step1Title: "Step 1: Get Your Subscription Link",
        step1Desc: "Log into your service provider's panel. Find the \"Copy Clash Subscription\" button and click it! The link will look something like this:",
        step2Title: "Step 2: Feed It to Your Client",
        step2Desc: "Open your downloaded client (like Mihomo Party). Go to Profiles / Subscriptions, click Add, and paste the URL you just copied.",
        step3Title: "Step 3: Connect and Fly",
        step3Desc: "Hit the \"Update\" button to download the latest nodes. Finally, toggle the main switch to ON. Congratulations!"
    },
    zh: {
        navWhois: "关于 AnyTLS", navDownload: "下载中心", navTutorial: "使用教程",
        heroTitle: "AnyTLS 客户端下载",
        heroDesc: "下载支持 AnyTLS 代理协议的最佳免费开源客户端。获取全平台设备的安全应用。",
        whoisTitle: "什么是 AnyTLS 及服务端安装",
        whoisIntro: "<strong>AnyTLS</strong> 是一种旨在提供最高安全性、速度和隐蔽性的尖端代理协议。它能伪装您的互联网流量，确保全球无缝连接。",
        whoisDesc: "在您的服务器（Ubuntu/Debian/CentOS）上运行此一键脚本，即可从 GitHub 自动部署 AnyTLS 后端。",
        descHiddify: "强大且用户友好的全平台客户端。对新手和专业人士都有极佳的 AnyTLS 支持。",
        descMihomo: "Mihomo 核心的终极图形界面。跨平台且优雅。",
        descVerge: "Clash Verge 的正统延续。出色的 UI 和规则管理。",
        descAndroid: "Android 顶配客户端，原生质感设计，全面支持 AnyTLS。",
        descIOS: "强大的 iOS 客户端。无缝导入 Clash 配置以获得 AnyTLS 体验。",
        descRouter: "OpenWrt 路由器插件。为整个家庭网络赋予 AnyTLS 代理能力。",
        tutTitle: "如何导入 Clash 订阅",
        step1Title: "第一步：获取订阅链接",
        step1Desc: "登录服务商面板，找到“复制 Clash 订阅”按钮并点击！链接通常长这样：",
        step2Title: "第二步：导入客户端",
        step2Desc: "打开下载好的客户端，前往 配置 / 订阅，点击 添加，然后粘贴刚刚复制的 URL。",
        step3Title: "第三步：连接起飞",
        step3Desc: "点击“更新”下载最新节点。最后把主开关拨到 ON。恭喜你，现在正安全冲浪！"
    },
    ja: {
        navWhois: "AnyTLSとは", navDownload: "ダウンロード", navTutorial: "チュートリアル",
        heroTitle: "AnyTLS ダウンロードハブ",
        heroDesc: "AnyTLSプロキシプロトコルをサポートする最高の無料オープンソースクライアントをダウンロードしてください。",
        whoisTitle: "AnyTLSとは & インストール",
        whoisIntro: "<strong>AnyTLS</strong>は、最大限のセキュリティ、速度、検出不可能性を実現するために設計された最先端のプロキシプロトコルです。",
        whoisDesc: "サーバー (Ubuntu/Debian/CentOS) でこのワンクリックスクリプトを実行して、GitHub から直接 AnyTLS バックエンドを自動デプロイします。",
        descHiddify: "初心者から上級者まで使える強力で使いやすいクライアント。",
        descMihomo: "Mihomoコアの究極のグラフィカルインターフェース。",
        descVerge: "Clash Vergeの正統な後継。優れたUIとルール管理。",
        descAndroid: "ネイティブのMaterial Youデザインを備えたAndroid向けクライアント。",
        descIOS: "強力なiOSクライアント。Clashプロファイルをシームレスにインポート。",
        descRouter: "OpenWrtルータープラグイン。ホームネットワーク全体にAnyTLSを提供します。",
        tutTitle: "Clash サブスクリプションのインポート方法",
        step1Title: "ステップ 1: サブスクリプションリンクの取得",
        step1Desc: "サービスプロバイダーのパネルにログインし、「Clash サブスクリプションのコピー」ボタンをクリックします！",
        step2Title: "ステップ 2: クライアントへのインポート",
        step2Desc: "クライアントを開き、プロファイルで「追加」をクリックし、URLを貼り付けます。",
        step3Title: "ステップ 3: 接続して開始",
        step3Desc: "「更新」を押して最新ノードをダウンロードし、メインスイッチを ON にします。おめでとうございます！"
    },
    es: {
        navWhois: "Qué es AnyTLS", navDownload: "Descargar", navTutorial: "Tutorial",
        heroTitle: "Centro de Descargas AnyTLS",
        heroDesc: "Descargue los mejores clientes gratuitos y de código abierto que admiten el protocolo AnyTLS.",
        whoisTitle: "Qué es AnyTLS e Instalación",
        whoisIntro: "<strong>AnyTLS</strong> es un protocolo proxy de vanguardia diseñado para máxima seguridad, velocidad e indetectabilidad.",
        whoisDesc: "Ejecute este script en su servidor para implementar automáticamente el backend AnyTLS directamente desde GitHub.",
        descHiddify: "Cliente potente y fácil de usar para todas las plataformas. Excelente soporte AnyTLS.",
        descMihomo: "La interfaz gráfica definitiva para el núcleo Mihomo. Multiplataforma y elegante.",
        descVerge: "Continuación de Clash Verge. Excelente gestión de interfaz y reglas.",
        descAndroid: "Clientes de primer nivel para Android con diseño Material You.",
        descIOS: "Potentes clientes de iOS. Importe perfiles Clash sin problemas.",
        descRouter: "Complemento de enrutador OpenWrt. Lleve AnyTLS a toda su red doméstica.",
        tutTitle: "Cómo importar la suscripción a Clash",
        step1Title: "Paso 1: Obtenga su enlace de suscripción",
        step1Desc: "Inicie sesión en el panel de su proveedor y haga clic en 'Copiar suscripción de Clash'.",
        step2Title: "Paso 2: Ingrese a su cliente",
        step2Desc: "Abra su cliente, vaya a Perfiles / Suscripciones, haga clic en Agregar y pegue la URL.",
        step3Title: "Paso 3: Conectar y navegar",
        step3Desc: "Presione 'Actualizar' y encienda el interruptor principal. ¡Felicidades!"
    },
    fr: {
        navWhois: "Qu'est-ce qu'AnyTLS", navDownload: "Télécharger", navTutorial: "Tutoriel",
        heroTitle: "Centre de téléchargement AnyTLS",
        heroDesc: "Téléchargez les meilleurs clients gratuits et open source prenant en charge le protocole AnyTLS.",
        whoisTitle: "Qu'est-ce qu'AnyTLS & Installation",
        whoisIntro: "<strong>AnyTLS</strong> est un protocole proxy de pointe conçu pour une sécurité, une vitesse et une indétectabilité maximales.",
        whoisDesc: "Exécutez ce script sur votre serveur pour déployer automatiquement le backend AnyTLS.",
        descHiddify: "Client puissant et convivial pour toutes les plateformes. Excellent support AnyTLS.",
        descMihomo: "L'interface graphique ultime pour le cœur Mihomo.",
        descVerge: "La suite de Clash Verge. Excellente interface utilisateur.",
        descAndroid: "Clients de premier plan pour Android avec Material You.",
        descIOS: "Clients iOS puissants. Importez vos profils Clash de manière transparente.",
        descRouter: "Plugin de routeur OpenWrt pour tout votre réseau domestique.",
        tutTitle: "Comment importer un abonnement Clash",
        step1Title: "Étape 1 : Obtenez votre lien d'abonnement",
        step1Desc: "Connectez-vous à votre panneau et copiez le lien d'abonnement Clash.",
        step2Title: "Étape 2 : Ajoutez-le à votre client",
        step2Desc: "Ouvrez le client, allez dans Profils / Abonnements, et collez l'URL.",
        step3Title: "Étape 3 : Connectez-vous",
        step3Desc: "Cliquez sur 'Mettre à jour' et activez le commutateur principal. Félicitations !"
    },
    de: {
        navWhois: "Was ist AnyTLS", navDownload: "Herunterladen", navTutorial: "Anleitung",
        heroTitle: "AnyTLS Download-Hub",
        heroDesc: "Laden Sie die besten kostenlosen Open-Source-Clients für das AnyTLS-Protokoll herunter.",
        whoisTitle: "Was ist AnyTLS & Installation",
        whoisIntro: "<strong>AnyTLS</strong> ist ein hochmodernes Proxy-Protokoll für maximale Sicherheit, Geschwindigkeit und Unauffindbarkeit.",
        whoisDesc: "Führen Sie dieses Skript auf Ihrem Server aus, um das AnyTLS-Backend bereitzustellen.",
        descHiddify: "Leistungsstarker, benutzerfreundlicher Client für alle Plattformen.",
        descMihomo: "Die ultimative grafische Oberfläche für den Mihomo-Core.",
        descVerge: "Fortsetzung von Clash Verge. Exzellentes Regelmanagement.",
        descAndroid: "Erstklassige Android-Clients mit Material You-Design.",
        descIOS: "Leistungsstarke iOS-Clients. Nahtloser Import von Clash-Profilen.",
        descRouter: "OpenWrt-Router-Plugin für Ihr gesamtes Heimnetzwerk.",
        tutTitle: "So importieren Sie das Clash-Abonnement",
        step1Title: "Schritt 1: Holen Sie sich Ihren Link",
        step1Desc: "Melden Sie sich im Panel Ihres Anbieters an und kopieren Sie den Clash-Link.",
        step2Title: "Schritt 2: Fügen Sie ihn hinzu",
        step2Desc: "Öffnen Sie Ihren Client, gehen Sie zu Profile und fügen Sie die URL ein.",
        step3Title: "Schritt 3: Verbinden",
        step3Desc: "Klicken Sie auf 'Aktualisieren' und schalten Sie den Hauptschalter ein. Glückwunsch!"
    },
    pt: {
        navWhois: "O que é AnyTLS", navDownload: "Baixar", navTutorial: "Tutorial",
        heroTitle: "Centro de Downloads AnyTLS",
        heroDesc: "Baixe os melhores clientes gratuitos e de código aberto compatíveis com o protocolo AnyTLS.",
        whoisTitle: "O que é AnyTLS e Instalação",
        whoisIntro: "<strong>AnyTLS</strong> é um protocolo proxy de ponta projetado para máxima segurança, velocidade e indetectabilidade.",
        whoisDesc: "Execute este script em seu servidor para implantar automaticamente o backend do AnyTLS.",
        descHiddify: "Cliente poderoso e fácil de usar para todas as plataformas.",
        descMihomo: "A interface gráfica definitiva para o núcleo Mihomo.",
        descVerge: "Continuação do Clash Verge. Excelente interface.",
        descAndroid: "Clientes de primeira linha para Android com Material You.",
        descIOS: "Clientes iOS poderosos. Importe perfis do Clash perfeitamente.",
        descRouter: "Plugin de roteador OpenWrt para toda a sua rede doméstica.",
        tutTitle: "Como importar a assinatura do Clash",
        step1Title: "Passo 1: Obtenha seu link de assinatura",
        step1Desc: "Faça login no painel do seu provedor e copie o link de assinatura do Clash.",
        step2Title: "Passo 2: Adicione ao seu cliente",
        step2Desc: "Abra seu cliente, vá para Perfis / Assinaturas e cole a URL.",
        step3Title: "Passo 3: Conectar",
        step3Desc: "Clique em 'Atualizar' e ative o botão principal. Parabéns!"
    },
    ru: {
        navWhois: "Что такое AnyTLS", navDownload: "Скачать", navTutorial: "Руководство",
        heroTitle: "Центр загрузок AnyTLS",
        heroDesc: "Загрузите лучшие бесплатные клиенты с открытым исходным кодом для AnyTLS.",
        whoisTitle: "Что такое AnyTLS и Установка",
        whoisIntro: "<strong>AnyTLS</strong> — это передовой прокси-протокол, разработанный для максимальной безопасности и скорости.",
        whoisDesc: "Запустите этот скрипт на своем сервере для автоматического развертывания AnyTLS.",
        descHiddify: "Мощный и удобный клиент для всех платформ. Отличная поддержка AnyTLS.",
        descMihomo: "Лучший графический интерфейс для ядра Mihomo.",
        descVerge: "Продолжение Clash Verge. Отличный интерфейс.",
        descAndroid: "Лучшие клиенты для Android с дизайном Material You.",
        descIOS: "Мощные клиенты для iOS. Плавный импорт профилей Clash.",
        descRouter: "Плагин для роутера OpenWrt для вашей домашней сети.",
        tutTitle: "Как импортировать подписку Clash",
        step1Title: "Шаг 1: Получите ссылку на подписку",
        step1Desc: "Войдите в панель вашего провайдера и скопируйте ссылку Clash.",
        step2Title: "Шаг 2: Добавьте в клиент",
        step2Desc: "Откройте клиент, перейдите в Профили и вставьте URL.",
        step3Title: "Шаг 3: Подключение",
        step3Desc: "Нажмите «Обновить» и включите главный переключатель. Поздравляем!"
    },
    ar: {
        navWhois: "ما هو AnyTLS", navDownload: "تحميل", navTutorial: "تعليمات",
        heroTitle: "مركز تحميل AnyTLS",
        heroDesc: "قم بتنزيل أفضل العملاء المجانيين ومفتوحي المصدر الذين يدعمون بروتوكول وكيل AnyTLS.",
        whoisTitle: "ما هو AnyTLS والتثبيت",
        whoisIntro: "<strong>AnyTLS</strong> هو بروتوكول وكيل متطور مصمم لتوفير أقصى درجات الأمان والسرعة.",
        whoisDesc: "قم بتشغيل هذا البرنامج النصي على الخادم الخاص بك لنشر الواجهة الخلفية لـ AnyTLS تلقائيًا.",
        descHiddify: "عميل قوي وسهل الاستخدام لجميع المنصات.",
        descMihomo: "الواجهة الرسومية النهائية لنواة Mihomo.",
        descVerge: "استمرار لـ Clash Verge. واجهة مستخدم ممتازة.",
        descAndroid: "عملاء من الدرجة الأولى لنظام Android.",
        descIOS: "عملاء iOS أقوياء. قم باستيراد ملفات تعريف Clash بسلاسة.",
        descRouter: "مكون إضافي لجهاز التوجيه OpenWrt.",
        tutTitle: "كيفية استيراد اشتراك Clash",
        step1Title: "الخطوة 1: احصل على رابط الاشتراك",
        step1Desc: "قم بتسجيل الدخول إلى لوحة مزود الخدمة الخاص بك وانسخ رابط الاشتراك.",
        step2Title: "الخطوة 2: أدخله في العميل الخاص بك",
        step2Desc: "افتح العميل الخاص بك وأضف عنوان URL الذي نسخته للتو في قسم الاشتراكات.",
        step3Title: "الخطوة 3: اتصل وانطلق",
        step3Desc: "اضغط على \"تحديث\" لتنزيل العقد وقم بتشغيل المفتاح الرئيسي. تهانينا!"
    }
};

// 5. Language Switching Logic
function changeLanguage(langCode) {
    const lang = translations[langCode] ? langCode : 'en'; 
    
    // Arabic RTL Layout Handling
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key]; 
        }
    });
    document.documentElement.lang = lang;
}
