// https://www.pokexperto.net/index2.php?seccion=nds/movimientos_pokemon
const nowraps = Array.from(document.querySelectorAll('td[nowrap]'));
const innerTranslates = nowraps.map(nowrap => Array.from(nowrap.querySelectorAll('a.nav6c')).map(td => td.innerText));

const removeWeirdChars = (str) => {
    return str.trim().replace(/[\s\n]/g, '-').replace(/:/g, '').replace(/'/g, '').replace(/[^a-zA-Z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '').replace(/-$/, '').replace(/^-/, '').replace(/\B(?=(\d{3})+(?!\d))/g, "-").toLowerCase();
};

const parsed = innerTranslates.reduce((acc, [value, key]) => {
    if (!key || !value) return acc;
    const innerKey = removeWeirdChars(key);
    acc[innerKey] = value;
    return acc;
}, {});

const copyText = document.createElement('textarea');
copyText.value = JSON.stringify(parsed, null, 2);
document.body.appendChild(copyText);
copyText.select();
document.execCommand('copy');

// downloadjson
// const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(parsed, null, 2));
// const downloadAnchorNode = document.createElement('a');
// downloadAnchorNode.setAttribute("href", dataStr);
// downloadAnchorNode.setAttribute("download", "pokemon.json");
// document.body.appendChild(downloadAnchorNode); // required for firefox
// downloadAnchorNode.click();
// downloadAnchorNode.remove();