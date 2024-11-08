import { storageKey } from '../constants/config';

function getStorage() {
    return JSON.parse(localStorage.getItem(storageKey) || '{}');
}
function get(key: string) {
    const storageDatas = getStorage();
    if (!storageDatas || !storageDatas[key]) return null;

    return storageDatas[key];
}

function save(key: string, value: string | object | number | boolean | []) {
    const storageDatas = getStorage();
    storageDatas[key] = value;
    localStorage.setItem(storageKey, JSON.stringify(storageDatas));
}

export const storageService = {
    get,
    getStorage,
    save,
    clear: () => localStorage.removeItem(storageKey),
};
