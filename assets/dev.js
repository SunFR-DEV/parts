const htmls = {
    'victoria': {
        elems: [
            {
                type: 'h1',
                content: 'Site en cours de développement',
                class: 'title'
            },
            {
                type: 'p',
                content: 'Le site de Victoria est en cours de développement, il sera bientôt disponible.',
                class: 'description'
            },
            {
                type: 'p',
                content: 'Merci d\'être venu! Tenez vous au courant pour les mises à jour.',
                class: 'description'
            },
            {
                type: 'a',
                content: 'Sundev',
                href: 'https://sundev.studio',
                class: 'btn btn-sundev'
            }
        ],
        colors: {
            'primary-color': 'oklch(0.596 0.085 18.93)',
            'secondary-color': 'oklch(0.638 0.012 63.27)',
            'background-color': 'oklch(0.249 0.005 67.61)',
            'text-color': 'oklch(0.957 0.007 5.92)'
        },
        logo: 'https://sundev.studio/projects/victoria.png'
    },
    'ecto': {
        elems: [
            {
                type: 'h1',
                content: 'Site en cours de développement',
                class: 'title'
            },
            {
                type: 'p',
                content: 'Le site de votre bot de modération favori est en cours de développement, il sera bientôt disponible.',
                class: 'description'
            },
            {
                type: 'p',
                content: 'Merci d\'être venu! Tenez vous au courant pour les mises à jour.',
                class: 'description'
            },
            {
                type: 'a',
                content: 'Sundev',
                href: 'https://sundev.studio',
                class: 'btn btn-sundev'
            }
        ],
        colors:
            {
                'primary-color': 'oklch(0.586 0.106 308.492)',
                'secondary-color': 'oklch(0.638 0.012 308.492)',
                'background-color': 'oklch(0.249 0.005 308.492)',
                'text-color': 'oklch(0.949 0.023 310.706)'
            }
        ,
        logo: 'https://sundev.studio/projects/ecto.png'
    },
    default: {
        elems: [
            {
                type: 'h1',
                content: 'Site en cours de développement',
                class: 'title'
            },
            {
                type: 'p',
                content: 'Le site est en cours de développement, il sera bientôt disponible.',
                class: 'description'
            },
            {
                type: 'p',
                content: 'Merci d\'être venu! Tenez vous au courant pour les mises à jour.',
                class: 'description'
            },
            {
                type: 'a',
                content: 'Sundev',
                href: 'https://sundev.studio',
                class: 'btn btn-sundev'
            }
        ]
    }
}

function applyDOM(main, content) {
    if (content.logo) {
        const logo = document.createElement('img');
        logo.src = content.logo;
        logo.alt = 'Logo';
        logo.className = 'logo';
        main.appendChild(logo);
    }

    content.elems.forEach(elem => {
        const el = document.createElement(elem.type);
        el.textContent = elem.content;
        if (elem.class) el.className = elem.class;
        if (elem.href) el.href = elem.href;
        main.appendChild(el);
    });

    if (content.colors) {
        for (const [key, value] of Object.entries(content.colors)) {
            document.documentElement.style.setProperty(`--${key}`, value);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');

    const domain = window.location.hostname;
    const subdomain = domain.split('.')[0];

    const subs = ['victoria', 'ecto'];
    if (!subs.includes(subdomain) || !htmls[subdomain]) {
        applyDOM(main, htmls.default);
    }

    applyDOM(main, htmls[subdomain]);
});