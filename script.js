// 8大语言词典
const translations = {
    en: {
        nav_home: "Home", nav_download: "Download", nav_tutorial: "Tutorial",
        hero_title: "Next Generation Proxy Tool",
        hero_subtitle: "Simple, Powerful, and Open Source. The best way to manage your network traffic securely and efficiently.",
        get_started: "Get Started", view_tutorial: "View Guide",
        download_title: "Download Clients", download_subtitle: "Choose the right version for your operating system.",
        btn_dl_win: "Download .exe", btn_dl_zip: "Portable .zip",
        btn_dl_mac: "Download .dmg", btn_dl_apk: "Download .apk", btn_dl_gp: "Google Play", btn_dl_lin: "Download Core",
        tutorial_title: "How to Use",
        step1_title: "Download & Install", step1_desc: "Choose your platform and install the client.",
        step2_title: "Import Subscription", step2_desc: "Copy your API URL and paste it into the Config section.",
        step3_title: "Connect", step3_desc: "Select a node and turn on the System Proxy."
    },
    "zh-CN": {
        nav_home: "首页", nav_download: "下载中心", nav_tutorial: "使用教程",
        hero_title: "下一代网络代理工具",
        hero_subtitle: "简单、强大、开源。安全高效管理您的网络流量的最佳选择。",
        get_started: "立即下载", view_tutorial: "查看教程",
        download_title: "客户端下载", download_subtitle: "选择适合您操作系统的版本进行安装。",
        btn_dl_win: "下载安装版", btn_dl_zip: "免安装便携版",
        btn_dl_mac: "下载 DMG", btn_dl_apk: "下载 APK", btn_dl_gp: "前往 Google Play", btn_dl_lin: "下载核心文件",
        tutorial_title: "快速入门指南",
        step1_title: "下载与安装", step1_desc: "根据您的设备选择对应的客户端并完成安装。",
        step2_title: "导入订阅链接", step2_desc: "复制您的订阅链接，在软件内的配置(Config)选项中进行导入。",
        step3_title: "开启代理", step3_desc: "选择延迟较低的节点，并开启系统代理(System Proxy)即可畅游网络。"
    },
    "zh-TW": {
        nav_home: "首頁", nav_download: "下載中心", nav_tutorial: "使用教學",
        hero_title: "下一代網路代理工具",
        hero_subtitle: "簡單、強大、開源。安全高效管理您的網路流量的最佳選擇。",
        get_started: "立即下載", view_tutorial: "查看教學",
        download_title: "客戶端下載", download_subtitle: "選擇適合您作業系統的版本進行安裝。",
        btn_dl_win: "下載安裝版", btn_dl_zip: "免安裝便攜版",
        btn_dl_mac: "下載 DMG", btn_dl_apk: "下載 APK", btn_dl_gp: "前往 Google Play", btn_dl_lin: "下載核心檔案",
        tutorial_title: "快速入門指南",
        step1_title: "下載與安裝", step1_desc: "根據您的裝置選擇對應的客戶端並完成安裝。",
        step2_title: "匯入訂閱連結", step2_desc: "複製您的訂閱連結，在軟體內的設定(Config)選項中進行匯入。",
        step3_title: "開啟代理", step3_desc: "選擇延遲較低的節點，並開啟系統代理(System Proxy)即可暢遊網路。"
    },
    ja: {
        nav_home: "ホーム", nav_download: "ダウンロード", nav_tutorial: "チュートリアル",
        hero_title: "次世代プロキシツール",
        hero_subtitle: "シンプル、強力、そしてオープンソース。ネットワークトラフィックを管理する最適な方法。",
        get_started: "はじめる", view_tutorial: "ガイドを見る",
        download_title: "クライアントのダウンロード", download_subtitle: "ご使用のOSに合ったバージョンを選択してください。",
        btn_dl_win: ".exe をダウンロード", btn_dl_zip: "ポータブル .zip",
        btn_dl_mac: ".dmg をダウンロード", btn_dl_apk: ".apk をダウンロード", btn_dl_gp: "Google Play", btn_dl_lin: "コアをダウンロード",
        tutorial_title: "使い方",
        step1_title: "ダウンロードとインストール", step1_desc: "プラットフォームを選択し、クライアントをインストールします。",
        step2_title: "サブスクリプションのインポート", step2_desc: "URLをコピーし、設定(Config)セクションに貼り付けます。",
        step3_title: "接続", step3_desc: "ノードを選択し、システムプロキシをオンにします。"
    },
    ko: {
        nav_home: "홈", nav_download: "다운로드", nav_tutorial: "튜토리얼",
        hero_title: "차세대 프록시 도구",
        hero_subtitle: "단순하고 강력하며 오픈 소스입니다. 네트워크 트래픽을 관리하는 가장 좋은 방법입니다.",
        get_started: "시작하기", view_tutorial: "가이드 보기",
        download_title: "클라이언트 다운로드", download_subtitle: "운영 체제에 맞는 버전을 선택하세요.",
        btn_dl_win: ".exe 다운로드", btn_dl_zip: "포터블 .zip",
        btn_dl_mac: ".dmg 다운로드", btn_dl_apk: ".apk 다운로드", btn_dl_gp: "Google Play", btn_dl_lin: "코어 다운로드",
        tutorial_title: "사용 방법",
        step1_title: "다운로드 및 설치", step1_desc: "플랫폼을 선택하고 클라이언트를 설치합니다.",
        step2_title: "구독 가져오기", step2_desc: "URL을 복사하여 설정(Config) 섹션에 붙여넣습니다.",
        step3_title: "연결", step3_desc: "노드를 선택하고 시스템 프록시를 켭니다."
    },
    ru: {
        nav_home: "Главная", nav_download: "Скачать", nav_tutorial: "Руководство",
        hero_title: "Прокси-инструмент нового поколения",
        hero_subtitle: "Простой, мощный и с открытым исходным кодом. Лучший способ управления трафиком.",
        get_started: "Начать", view_tutorial: "Смотреть гайд",
        download_title: "Скачать клиенты", download_subtitle: "Выберите версию для вашей операционной системы.",
        btn_dl_win: "Скачать .exe", btn_dl_zip: "Портативный .zip",
        btn_dl_mac: "Скачать .dmg", btn_dl_apk: "Скачать .apk", btn_dl_gp: "Google Play", btn_dl_lin: "Скачать ядро",
        tutorial_title: "Как использовать",
        step1_title: "Скачать и установить", step1_desc: "Выберите платформу и установите клиент.",
        step2_title: "Импорт подписки", step2_desc: "Скопируйте URL и вставьте его в раздел конфигурации.",
        step3_title: "Подключение", step3_desc: "Выберите узел и включите системный прокси."
    },
    es: {
        nav_home: "Inicio", nav_download: "Descargar", nav_tutorial: "Tutorial",
        hero_title: "Herramienta Proxy de Próxima Generación",
        hero_subtitle: "Simple, potente y de código abierto. La mejor manera de gestionar tu tráfico.",
        get_started: "Empezar", view_tutorial: "Ver Guía",
        download_title: "Descargar Clientes", download_subtitle: "Elige la versión adecuada para tu sistema operativo.",
        btn_dl_win: "Descargar .exe", btn_dl_zip: "Portable .zip",
        btn_dl_mac: "Descargar .dmg", btn_dl_apk: "Descargar .apk", btn_dl_gp: "Google Play", btn_dl_lin: "Descargar Core",
        tutorial_title: "Cómo usar",
        step1_title: "Descargar e Instalar", step1_desc: "Elige tu plataforma e instala el cliente.",
        step2_title: "Importar Suscripción", step2_desc: "Copia la URL y pégala en la sección de Configuración.",
        step3_title: "Conectar", step3_desc: "Selecciona un nodo y enciende el Proxy del Sistema."
    },
    fr: {
        nav_home: "Accueil", nav_download: "Télécharger", nav_tutorial: "Tutoriel",
        hero_title: "Outil Proxy Nouvelle Génération",
        hero_subtitle: "Simple, puissant et open source. La meilleure façon de gérer votre trafic.",
        get_started: "Commencer", view_tutorial: "Voir le guide",
        download_title: "Télécharger les Clients", download_subtitle: "Choisissez la version adaptée à votre OS.",
        btn_dl_win: "Télécharger .exe", btn_dl_zip: "Portable .zip",
        btn_dl_mac: "Télécharger .dmg", btn_dl_apk: "Télécharger .apk", btn_dl_gp: "Google Play", btn_dl_lin: "Télécharger Core",
        tutorial_title: "Comment utiliser",
        step1_title: "Télécharger et Installer", step1_desc: "Choisissez votre plateforme et installez le client.",
        step2_title: "Importer l'Abonnement", step2_desc: "Copiez l'URL et collez-la dans la section Configuration.",
        step3_title: "Se Connecter", step3_desc: "Sélectionnez un nœud et activez le Proxy Système."
    }
};

// 页面切换逻辑
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// 语言切换逻辑
function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    localStorage.setItem('preferredLang', lang);
}

// 初始化
window.onload = () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    document.getElementById('langSelect').value = savedLang;
    changeLanguage(savedLang);
};
