import { storageKey } from './../constants/config';

export class NavigationCache {
    private static getCache() {
        return JSON.parse(sessionStorage.getItem(storageKey) || "{}");
    }

    public static get(key: string) {
        const cachedDatas = this.getCache();
        if (!cachedDatas || !cachedDatas[key]) return null;

        return cachedDatas[key];
    }

    public static has(key: string) {
        const cachedDatas = this.getCache();
        return Boolean(cachedDatas[key])
    }

    public static save(key: string, value: string | object | number | boolean | []) {
        const cachedDatas = this.getCache();
        cachedDatas[key] = value;
        sessionStorage.setItem(storageKey, JSON.stringify(cachedDatas));
    }
}