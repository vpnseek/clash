// 1. Tab Switching Logic
function switchTab(tabId) {
    document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');

    document.getElementById('section-install').style.display = 'none';
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

// 4. i18n Translation Dictionary (Added Japanese & Arabic)
const translations = {
    en: {
        navInstall: "Install", navDownload: "Download", navTutorial: "Tutorial",
        heroTitle: "AnyTLS Download Hub",
        heroDesc: "Download the best free and open-source clients supporting the AnyTLS proxy protocol. Get secure apps across all devices.",
        installTitle: "AnyTLS Server Installation",
        installDesc: "Run this one-click script on your server (Ubuntu/Debian/CentOS) to automatically deploy the AnyTLS backend directly from GitHub.",
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
    ja: {
        navInstall: "インストール", navDownload: "ダウンロード", navTutorial: "チュートリアル",
        heroTitle: "AnyTLS ダウンロードハブ",
        heroDesc: "AnyTLSプロキシプロトコルをサポートする最高の無料オープンソースクライアントをダウンロードしてください。すべてのデバイスで安全なアプリを入手できます。",
        installTitle: "AnyTLS サーバーのインストール",
        installDesc: "サーバー (Ubuntu/Debian/CentOS) でこのワンクリックスクリプトを実行して、GitHub から直接 AnyTLS バックエンドを自動デプロイします。",
        descHiddify: "初心者から上級者まで使える強力で使いやすいクライアント。全プラットフォームでAnyTLSを完全サポート。",
        descMihomo: "Mihomoコアの究極のグラフィカルインターフェース。クロスプラットフォームでエレガント。",
        descVerge: "Clash Vergeの正統な後継。優れたUIとルール管理。",
        descAndroid: "ネイティブのMaterial YouデザインとAnyTLSサポートを備えたAndroid向けクライアント。",
        descIOS: "強力なiOSクライアント。ClashプロファイルをシームレスにインポートしてAnyTLS接続を実現。",
        descRouter: "OpenWrtルータープラグイン。ホームネットワーク全体にAnyTLSプロキシ機能を提供します。",
        tutTitle: "Clash サブスクリプションのインポート方法",
        step1Title: "ステップ 1: サブスクリプションリンクの取得",
        step1Desc: "サービスプロバイダーのパネルにログインし、「Clash サブスクリプションのコピー」ボタンを見つけてクリックします！",
        step2Title: "ステップ 2: クライアントへのインポート",
        step2Desc: "クライアント（Mihomo Partyなど）を開き、プロファイル (Profiles) で「追加」をクリックし、先ほどコピーしたURLを貼り付けます。",
        step3Title: "ステップ 3: 接続して開始",
        step3Desc: "「更新」を押して最新ノードをダウンロードし、メインスイッチを ON に切り替えます。おめでとうございます！"
    },
    ar: {
        navInstall: "تثبيت", navDownload: "تحميل", navTutorial: "تعليمات",
        heroTitle: "مركز تحميل AnyTLS",
        heroDesc: "قم بتنزيل أفضل العملاء المجانيين ومفتوحي المصدر الذين يدعمون بروتوكول وكيل AnyTLS. احصل على تطبيقات آمنة عبر جميع الأجهزة.",
        installTitle: "تثبيت خادم AnyTLS",
        installDesc: "قم بتشغيل هذا البرنامج النصي بنقرة واحدة على الخادم الخاص بك لنشر الواجهة الخلفية لـ AnyTLS تلقائيًا من GitHub.",
        descHiddify: "عميل قوي وسهل الاستخدام لجميع المنصات. دعم ممتاز لـ AnyTLS للمبتدئين والمحترفين.",
        descMihomo: "الواجهة الرسومية النهائية لنواة Mihomo. متعدد المنصات وأنيق.",
        descVerge: "استمرار لـ Clash Verge. واجهة مستخدم وإدارة قواعد ممتازة.",
        descAndroid: "عملاء من الدرجة الأولى لنظام Android مع تصميم Material You الأصلي ودعم AnyTLS.",
        descIOS: "عملاء iOS أقوياء. قم باستيراد ملفات تعريف Clash بسلاسة لاتصال AnyTLS الكامل.",
        descRouter: "مكون إضافي لجهاز التوجيه OpenWrt. اجلب إمكانية وكيل AnyTLS إلى شبكتك المنزلية بالكامل.",
        tutTitle: "كيفية استيراد اشتراك Clash",
        step1Title: "الخطوة 1: احصل على رابط الاشتراك الخاص بك",
        step1Desc: "قم بتسجيل الدخول إلى لوحة مزود الخدمة الخاص بك. ابحث عن زر \"نسخ اشتراك Clash\" وانقر عليه!",
        step2Title: "الخطوة 2: أدخله في العميل الخاص بك",
        step2Desc: "افتح العميل الذي تم تنزيله. انتقل إلى الملفات الشخصية / الاشتراكات، وانقر فوق إضافة، والصق عنوان URL الذي قمت بنسخه للتو.",
        step3Title: "الخطوة 3: اتصل وانطلق",
        step3Desc: "اضغط على زر \"تحديث\" لتنزيل أحدث العقد. أخيرًا، قم بتبديل المفتاح الرئيسي إلى وضع التشغيل ON. تهانينا!"
    }
};

// 5. Language Switching Logic (Added RTL support for Arabic)
function changeLanguage(langCode) {
    const lang = translations[langCode] ? langCode : 'en'; 
    
    // Update direction for RTL languages like Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key]; 
        }
    });
    document.documentElement.lang = lang;
}
