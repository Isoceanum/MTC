document.querySelector('video').playbackRate = 0.8;

function updateContent(lang, langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    });

    var languageIcon = document.getElementById('languageIcon');
    if (lang === 'en') {
        languageIcon.src = 'assets/images/uk-icon.png';
        languageIcon.alt = 'UK Flag';
    } else if (lang === 'fr') {
        languageIcon.src = 'assets/images/france-icon.png';
        languageIcon.alt = 'France Flag';
    }

    if (langData.typed_texts) {
        startTyped(langData.typed_texts);
    }
}

function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
}

async function fetchLanguageData(lang) {
    const response = await fetch(`assets/language/${lang}.json`);
    return response.json();
}

// Function to change language
async function changeLanguage(lang) {
    setLanguagePreference(lang);
    const langData = await fetchLanguageData(lang);
    updateContent(lang, langData);

}

window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(userPreferredLanguage, langData);
});


var typed;

function startTyped(strings) {
    if (typed) {
        typed.destroy(); // Destroy the previous instance before starting a new one
    }

    typed = new Typed("#multiple-text", {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}