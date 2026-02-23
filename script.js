// Data and Translations
const translations = {
    "en": {
        "header_title": "ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL",
        "header_prompt": "ENTER COMMAND NOW",
        "nav_home": "> SYSTEM_STATUS",
        "nav_core": "> DIR/CORE_SYS",
        "nav_exp": "> DIR/EXP_SYS",
        "nav_contact": "> COMMUNICATE",
        "dir_core": "> DIR /PROJECTS/CORE_SYSTEMS",
        "af_desc": "_DESC: A service management automation project based on Docker Compose.",
        "afweb_desc": "_DESC: A web interface for AF extracted from a WordPress environment.",
        "afweb2_desc": "_DESC: The second iteration of the AF web interface, built entirely from scratch.",
        "dir_exp": "> DIR /PROJECTS/EXPERIMENTAL",
        "ichat_back_desc": "_DESC: Backend FastAPI for AI agent chat, MCP servers, visual bifurcated chat.",
        "ichat_front_desc": "_DESC: Frontend React for AI agent chat visual user interface.",
        "inotes_desc": "_DESC: A TypeScript-based note-taking utility.",
        "contact_init": "> INITIATING MAIL PROTOCOL...",
        "contact_rcpt": "RECIPIENT: valejlorda@gmail.com",
        "contact_enc": "ENCRYPTION: NONE",
        "contact_transmit": "[ CLICK TO TRANSMIT MESSAGE ]",
        "typewriter_text": "WELCOME TO ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM.<br>COPYRIGHT 2075-2077 ROBCO INDUSTRIES.<br>-Server 1-<br><br>&gt; SYSTEM: ONLINE<br>&gt; USER AUTHENTICATION: V_JAUREGUI_LORDA ... OK<br><br>&gt; READY FOR INPUT_"
    },
    "es": {
        "header_title": "ROBCO INDUSTRIES (TM) PROTOCOLO TERMLINK",
        "header_prompt": "INGRESE COMANDO AHORA",
        "nav_home": "> ESTADO_SISTEMA",
        "nav_core": "> DIR/SIST_PRINCIPALES",
        "nav_exp": "> DIR/SIST_EXP",
        "nav_contact": "> COMUNICAR",
        "dir_core": "> DIR /PROYECTOS/SISTEMAS_PRINCIPALES",
        "af_desc": "_DESC: Un proyecto de automatización de gestión de servicios basado en Docker Compose.",
        "afweb_desc": "_DESC: Una interfaz web para AF extraída de un entorno WordPress.",
        "afweb2_desc": "_DESC: La segunda iteración de la interfaz web de AF, construida desde cero.",
        "dir_exp": "> DIR /PROYECTOS/EXPERIMENTALES",
        "ichat_back_desc": "_DESC: Backend FastAPI para chat de agentes IA, servidores MCP, chat visual bifurcado.",
        "ichat_front_desc": "_DESC: Frontend React para interfaz visual de usuario de chat de agentes IA.",
        "inotes_desc": "_DESC: Una utilidad de toma de notas basada en TypeScript.",
        "contact_init": "> INICIANDO PROTOCOLO DE CORREO...",
        "contact_rcpt": "DESTINATARIO: valejlorda@gmail.com",
        "contact_enc": "ENCRIPTACIÓN: NINGUNA",
        "contact_transmit": "[ CLIC PARA TRANSMITIR MENSAJE ]",
        "typewriter_text": "BIENVENIDO AL SISTEMA OPERATIVO UNIFICADO DE ROBCO INDUSTRIES.<br>COPYRIGHT 2075-2077 ROBCO INDUSTRIES.<br>-Servidor 1-<br><br>&gt; SISTEMA: EN LÍNEA<br>&gt; AUTENTICACIÓN DE USUARIO: V_JAUREGUI_LORDA ... OK<br><br>&gt; LISTO PARA ENTRADA_"
    }
};

const pages = {
    home: (t) => `<p>${t.typewriter_text}</p>`,
    core_projects: (t) => `
<p>${t.dir_core}</p>
<br>
<p>+--------------------------------------------------+</p>
<p>| 0xF924 &lt; AF &gt;</p>
<p>| ${t.af_desc}</p>
<p>| _TECH: [Shell] [Docker]</p>
<p>| _CMD : <a href="https://github.com/ValeryJL/AF" target="_blank" class="term-link">[EXECUTE: SRC_CODE]</a></p>
<p>+--------------------------------------------------+</p>
<br>
<p>+--------------------------------------------------+</p>
<p>| 0xF930 &lt; AF-web &gt;</p>
<p>| ${t.afweb_desc}</p>
<p>| _TECH: [HTML] [CSS]</p>
<p>| _CMD : <a href="https://github.com/ValeryJL/AF-web" target="_blank" class="term-link">[EXECUTE: SRC_CODE]</a> <a href="https://valeryjl.github.io/AF-web/" target="_blank" class="term-link">[EXECUTE: LIVE_PREVIEW]</a></p>
<p>+--------------------------------------------------+</p>
<br>
<p>+--------------------------------------------------+</p>
<p>| 0xF948 &lt; AF-web-v2 &gt;</p>
<p>| ${t.afweb2_desc}</p>
<p>| _TECH: [HTML] [CSS]</p>
<p>| _CMD : <a href="https://github.com/ValeryJL/AF-web-v2" target="_blank" class="term-link">[EXECUTE: SRC_CODE]</a> <a href="https://valeryjl.github.io/AF-web-v2/" target="_blank" class="term-link">[EXECUTE: LIVE_PREVIEW]</a></p>
<p>+--------------------------------------------------+</p>
`,
    exp_projects: (t) => `
<p>${t.dir_exp}</p>
<br>
<p>+--------------------------------------------------+</p>
<p>| 0xFA20 &lt; InsanusChat Backend &gt;</p>
<p>| ${t.ichat_back_desc}</p>
<p>| _TECH: [Python] [FastAPI]</p>
<p>| _CMD : <a href="https://github.com/ValeryJL/InsanusChat_Backend" target="_blank" class="term-link">[EXECUTE: SRC_CODE]</a></p>
<p>+--------------------------------------------------+</p>
<br>
<p>+--------------------------------------------------+</p>
<p>| 0xFA38 &lt; InsanusChat Frontend &gt;</p>
<p>| ${t.ichat_front_desc}</p>
<p>| _TECH: [React] [UI/UX]</p>
<p>| _CMD : <a href="https://github.com/ValeryJL/InsanusChat_Frontend" target="_blank" class="term-link">[EXECUTE: SRC_CODE]</a></p>
<p>+--------------------------------------------------+</p>
<br>
<p>+--------------------------------------------------+</p>
<p>| 0xFA5C &lt; InsanusNotes &gt;</p>
<p>| ${t.inotes_desc}</p>
<p>| _TECH: [TypeScript]</p>
<p>| _CMD : <a href="https://github.com/ValeryJL/InsanusNotes" target="_blank" class="term-link">[EXECUTE: SRC_CODE]</a></p>
<p>+--------------------------------------------------+</p>
`,
    contact: (t) => `
<p>${t.contact_init}</p>
<br>
<p>${t.contact_rcpt}</p>
<p>${t.contact_enc}</p>
<br>
<p>&gt; <a href="mailto:valejlorda@gmail.com" class="term-link">${t.contact_transmit}</a></p>
`
};

let currentLang = "en";
let currentScreenId = "home";

// Typewriter Globals
let typingTimeout;
let isTyping = false;
let currentFullHTML = "";
let currentTypeElement = null;

function typeHTML(htmlStr, element, speed = 5) {
    if (typingTimeout) clearTimeout(typingTimeout);
    element.innerHTML = "";
    isTyping = true;
    currentFullHTML = htmlStr;
    currentTypeElement = element;
    let i = 0;

    function typeNext() {
        if (!isTyping) return;

        if (i < htmlStr.length) {
            let char = htmlStr.charAt(i);
            // Skip over HTML tags to render them instantly
            if (char === '<') {
                let tagEnd = htmlStr.indexOf('>', i);
                i = tagEnd !== -1 ? tagEnd + 1 : i + 1;
                // Skip over HTML entities to render them instantly
            } else if (char === '&') {
                let entEnd = htmlStr.indexOf(';', i);
                i = entEnd !== -1 ? entEnd + 1 : i + 1;
            } else {
                i++;
            }
            element.innerHTML = htmlStr.substring(0, i) + '<span class="cursor">█</span>';

            // Auto-scroll to bottom of the terminal while typing
            const terminal = document.querySelector('.terminal');
            terminal.scrollTop = terminal.scrollHeight;

            typingTimeout = setTimeout(typeNext, speed);
        } else {
            isTyping = false;
            element.innerHTML = htmlStr + '<span class="cursor">█</span>';
        }
    }
    typeNext();
}

// Global click listener to skip typing animation
document.addEventListener('click', (e) => {
    // Ignore clicks if they originated from a button (since buttons start a new sequence)
    if (e.target.tagName.toLowerCase() === 'button' || e.target.closest('button')) {
        return;
    }
    // Ignore clicks on links to allow normal navigation
    if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) {
        return;
    }

    if (isTyping) {
        isTyping = false;
        if (currentTypeElement) {
            currentTypeElement.innerHTML = currentFullHTML + '<span class="cursor">█</span>';
            const terminal = document.querySelector('.terminal');
            terminal.scrollTop = terminal.scrollHeight;
        }
        if (typingTimeout) clearTimeout(typingTimeout);
    }
});

function drawHeader() {
    const t = translations[currentLang];
    document.querySelector('[data-i18n="header_title"]').innerHTML = t.header_title;
    document.querySelector('[data-i18n="header_prompt"]').innerHTML = t.header_prompt;
    document.querySelector('[data-i18n="nav_home"]').innerHTML = t.nav_home;
    document.querySelector('[data-i18n="nav_core"]').innerHTML = t.nav_core;
    document.querySelector('[data-i18n="nav_exp"]').innerHTML = t.nav_exp;
    document.querySelector('[data-i18n="nav_contact"]').innerHTML = t.nav_contact;
}

function renderScreen(screenId) {
    currentScreenId = screenId;
    const t = translations[currentLang];
    const htmlContent = pages[screenId](t);
    const container = document.getElementById('screen-container');

    // Type the new screen content linearly
    typeHTML(htmlContent, container, 5);
}

function switchScreen(screenId) {
    renderScreen(screenId);
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    drawHeader();
    // Re-render the current screen with the new language
    renderScreen(currentScreenId);
}

function toggleLanguage() {
    const newLang = currentLang === "en" ? "es" : "en";
    setLanguage(newLang);
}

function initLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith("es")) {
        setLanguage("es");
    } else {
        setLanguage("en");
    }
}

// Boot sequence
window.onload = () => {
    initLanguage();
};
