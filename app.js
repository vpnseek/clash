const i18n = {
    en: {
        // ...原有词条...
        tabInstall: "Install",
        tabAbout: "About",
        installTitle: "Server Deployment",
        aboutTitle: "About AnyTLS Protocol",
        copy: "Copy",
        copied: "Copied!",
        aboutContent: `
            <div class="about-grid">
                <div class="about-item"><i class="fa-solid fa-shield-halved"></i><h3>Strong Encryption</h3><p>Built on top of TLS 1.3, providing perfect forward secrecy and resistance against active probing.</p></div>
                <div class="about-item"><i class="fa-solid fa-gauge-high"></i><h3>High Performance</h3><p>Optimized for low-latency and high-throughput environments, significantly faster than traditional wrappers.</p></div>
                <div class="about-item"><i class="fa-solid fa-mask"></i><h3>Invisible Footprint</h3><p>Simulates normal HTTPS traffic to bypass deep packet inspection (DPI) in restricted networks.</p></div>
            </div>`,
        installList: [
            { title: "AnyTLS Standalone (Official)", cmd: "bash <(curl -Ls https://raw.githubusercontent.com/anytls/release/main/install.sh)" },
            { title: "X-UI (Support AnyTLS)", cmd: "bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)" },
            { title: "V2bX (Xboard Backend)", cmd: "wget -N https://raw.githubusercontent.com/Wyatt-7/V2bX/master/install.sh && bash install.sh" }
        ]
    },
    zh: {
        // ...原有词条...
        tabDownload: "下载",
        tabInstall: "安装",
        tabAbout: "关于",
        installTitle: "服务端部署脚本",
        aboutTitle: "关于 AnyTLS 协议",
        copy: "复制",
        copied: "已复制",
        aboutContent: `
            <div class="about-grid">
                <div class="about-item"><i class="fa-solid fa-shield-halved"></i><h3>极致加密</h3><p>基于 TLS 1.3 协议，提供前向保密性，有效防止中间人攻击与主动探测。</p></div>
                <div class="about-item"><i class="fa-solid fa-gauge-high"></i><h3>高性能架构</h3><p>针对高吞吐量环境优化，降低握手延迟，相较于传统协议性能提升显著。</p></div>
                <div class="about-item"><i class="fa-solid fa-mask"></i><h3>隐匿伪装</h3><p>完美模拟 HTTPS 流量，轻松绕过严格网络环境下的深度包检测 (DPI)。</p></div>
            </div>`,
        installList: [
            { title: "AnyTLS 独立脚本 (官方)", cmd: "bash <(curl -Ls https://raw.githubusercontent.com/anytls/release/main/install.sh)" },
            { title: "X-UI 脚本 (已集成 AnyTLS)", cmd: "bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)" },
            { title: "V2bX 脚本 (支持 Xboard 后端)", cmd: "wget -N https://raw.githubusercontent.com/Wyatt-7/V2bX/master/install.sh && bash install.sh" }
        ]
    }
    // 其他语言(es, fr, de, ja, ru, ar) 建议以此模板类推填充...
};

// 工具函数：复制到剪贴板
async function copyToClipboard(text, btn) {
    try {
        await navigator.clipboard.writeText(text);
        const originalText = btn.textContent;
        btn.textContent = getI18n(langSwitch.value).copied;
        setTimeout(() => { btn.textContent = originalText; }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

// 渲染函数更新
function renderApp(lang) {
    const t = getI18n(lang);
    
    // ...原有标题渲染逻辑...
    document.getElementById('tab-install').textContent = t.tabInstall;
    document.getElementById('tab-about').textContent = t.tabAbout;
    
    // 渲染安装部分
    document.getElementById('i18n-install-title').textContent = t.installTitle;
    document.getElementById('i18n-install-content').innerHTML = (t.installList || i18n.en.installList).map(item => `
        <div class="install-card">
            <h4>${item.title}</h4>
            <div class="code-wrapper">
                <div class="code-header">
                    <span>Shell / Bash</span>
                    <button class="copy-btn" onclick="copyToClipboard('${item.cmd}', this)">${t.copy || 'Copy'}</button>
                </div>
                <pre><code><span class="code-keyword">bash</span> < <span class="code-string">(curl -Ls ...)</span></code>\n${item.cmd}</pre>
            </div>
        </div>
    `).join('');

    // 渲染关于部分
    document.getElementById('i18n-about-title').textContent = t.aboutTitle;
    document.getElementById('i18n-about-content').innerHTML = t.aboutContent;

    // ...原有 Grid 渲染逻辑...
}

// 动态 Tab 切换逻辑
const tabs = document.querySelectorAll('.nav-tab');
const sections = ['clientGrid', 'installSection', 'aboutSection', 'tutorialSection'];

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = tab.getAttribute('data-section');
        
        sections.forEach(s => {
            document.getElementById(s).style.display = (s === targetSection) ? (s === 'clientGrid' ? 'grid' : 'block') : 'none';
        });

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// ...其余主题初始化逻辑保持不变...
