const i18n = {
    en: {
        // ... 原有 key ...
        tabAbout: "About",
        tabInstall: "Install",
        aboutTitle: "The Next Generation Protocol",
        installTitle: "Server Side Installation",
        copy: "Copy",
        copied: "Copied!",
        aboutFeatures: [
            { t: "Ultimate Performance", d: "Zero RTT handshake based on TLS 1.3, reducing latency significantly." },
            { t: "Perfect Camouflage", d: "Indistinguishable from normal HTTPS traffic to bypass deep packet inspection." },
            { t: "Native Support", d: "Seamlessly integrated into Mihomo and sing-box cores." }
        ],
        installGuides: [
            { title: "AnyTLS Standalone (Official)", cmd: "bash <(curl -Ls https://raw.githubusercontent.com/AnyTLS/painless/main/install.sh)" },
            { title: "3X-UI (Recommended)", cmd: "bash <(curl -Ls https://raw.githubusercontent.com/mxtp/x-ui/master/install.sh)" },
            { title: "V2bx (Xboard Backend)", cmd: "wget -N https://raw.githubusercontent.com/Wyatt-Luu/V2bX/master/install.sh && bash install.sh" }
        ]
    },
    zh: {
        // ... 原有 key ...
        tabDownload: "下载",
        tabAbout: "关于协议",
        tabInstall: "服务端安装",
        tabTutorial: "教程",
        aboutTitle: "为什么选择 AnyTLS？",
        installTitle: "服务端部署脚本",
        copy: "复制",
        copied: "已复制",
        aboutFeatures: [
            { t: "极致性能", d: "基于 TLS 1.3 的 0-RTT 握手，显著降低首包延迟。" },
            { t: "完美伪装", d: "流量特征与标准 HTTPS 完全一致，有效对抗 DPI 深度检测。" },
            { t: "原生支持", d: "已完美集成至 Mihomo (原 Clash Meta) 与 sing-box 内核。" }
        ],
        installGuides: [
            { title: "AnyTLS 官方独立安装", cmd: "bash <(curl -Ls https://raw.githubusercontent.com/AnyTLS/painless/main/install.sh)" },
            { title: "3X-UI 面板安装 (支持图形化管理)", cmd: "bash <(curl -Ls https://raw.githubusercontent.com/mxtp/x-ui/master/install.sh)" },
            { title: "V2bx 后端安装 (适配 Xboard/V2board)", cmd: "wget -N https://raw.githubusercontent.com/Wyatt-Luu/V2bX/master/install.sh && bash install.sh" }
        ]
    }
    // 其他语言建议按此结构补充...
};

// ... 其他原有变量 ...
const sections = {
    'tab-download': 'downloadSection',
    'tab-about': 'aboutSection',
    'tab-install': 'installSection',
    'tab-tutorial': 'tutorialSection'
};

function renderApp(lang) {
    const t = getI18n(lang);
    // ... 原有基础渲染逻辑 ...

    // 渲染 About 页面内容
    const aboutContent = document.getElementById('i18n-about-content');
    aboutContent.innerHTML = t.aboutFeatures.map(f => `
        <div class="about-card">
            <h4 style="color:var(--accent-color);margin-bottom:0.5rem">${f.t}</h4>
            <p style="font-size:0.9rem;color:var(--text-secondary)">${f.d}</p>
        </div>
    `).join('');

    // 渲染 Install 页面内容 (含代码高亮和复制)
    const installContent = document.getElementById('i18n-install-content');
    installContent.innerHTML = t.installGuides.map(g => `
        <div class="install-item">
            <h3 style="font-size:1.1rem;margin-bottom:1rem">${g.title}</h3>
            <div class="code-wrapper">
                <button class="copy-btn" onclick="copyCode(this)">${t.copy}</button>
                <pre><code>${g.cmd}</code></pre>
            </div>
        </div>
    `).join('');

    // 更新导航文本
    Object.keys(sections).forEach(id => {
        document.getElementById(id).textContent = t[id.replace('tab-', 'tab').replace(/^\w/, c => c.toUpperCase())] || t[id.replace('tab-', 'tab')];
    });
}

// 统一的标签切换逻辑
Object.keys(sections).forEach(tabId => {
    document.getElementById(tabId).addEventListener('click', (e) => {
        e.preventDefault();
        // 切换 Active 类
        Object.keys(sections).forEach(id => document.getElementById(id).classList.remove('active'));
        document.getElementById(tabId).classList.add('active');

        // 切换 Section 显示
        Object.values(sections).forEach(secId => {
            document.getElementById(secId).style.display = 'none';
        });
        const target = document.getElementById(sections[tabId]);
        target.style.display = tabId === 'tab-download' ? 'grid' : 'block';
    });
});

// 复制功能
window.copyCode = function(btn) {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        const lang = document.documentElement.lang;
        btn.innerText = i18n[lang]?.copied || 'Copied!';
        setTimeout(() => { btn.innerText = originalText; }, 2000);
    });
};

// ... 保留 initTheme 等其他函数 ...
