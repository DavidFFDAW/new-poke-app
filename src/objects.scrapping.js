let objects = {};
const button = document.getElementById('btn-copy-json');

const removeWeirdChars = (str) => {
    return str.trim().replace(/[\s\n]/g, '-').replace(/:/g, '').replace(/'/g, '').replace(/[^a-zA-Z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '').replace(/-$/, '').replace(/^-/, '').replace(/\B(?=(\d{3})+(?!\d))/g, "-").toLowerCase();
};

function getNames(names) {
    const [name, english] = names.innerText.split('\n').map(name => name.trim());
    return { es: name, en: removeWeirdChars(english) };
}

function getGen(generation) {
    const gen = generation.children[0].getAttribute('title');
    return gen.toLowerCase().replace('generación', '').replace(/\./g, '').trim();
}

function copyToClipboard(content) {
    if (!navigator.clipboard) {
        console.error('Clipboard API not available');
        return false;
    }

    return navigator.clipboard.writeText(content).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Error copying content to clipboard', err);
    });
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    copyToClipboard(JSON.stringify(objects, null, 4));
});

document.addEventListener('DOMContentLoaded', () => {
    const rows = [...document.querySelectorAll('table tbody tr')];

    for (const row of rows) {
        const [_, imageTd, names, generation, effect] = row.children;
        const imageComponent = imageTd.querySelector('img');
        const image = imageComponent ? imageComponent.getAttribute('src') : '';
        const { en, es } = getNames(names);

        objects[en] = {
            es,
            generation: getGen(generation),
            effect: effect.innerText,
            image
        };
    }

    button.removeAttribute('disabled');
    console.log('Objects:', objects);

});