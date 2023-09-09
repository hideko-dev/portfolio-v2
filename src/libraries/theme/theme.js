import { writable } from "svelte/store";

const savedThemeStatus = localStorage.getItem("client-theme");

const saveThemeStatus = (status) => {
    localStorage.setItem("client-theme", status);
};

export const themeStatus = writable(savedThemeStatus || "dark");

themeStatus.subscribe((value) => {
    saveThemeStatus(value);
});

export function toggleTheme() {
    themeStatus.update((currentStatus) => {
        if (currentStatus === "dark") {
            const newTheme = "light";
            fireThemeChangeEvent(newTheme); // テーマを切り替える際にカスタムイベントを発火
            return newTheme;
        } else if (currentStatus === "light") {
            const newTheme = "dark";
            fireThemeChangeEvent(newTheme); // テーマを切り替える際にカスタムイベントを発火
            return newTheme;
        }
    });
}

// カスタムイベントの発火
function fireThemeChangeEvent(newTheme) {
    const event = new CustomEvent("themeChanged", {
        detail: { theme: newTheme },
    });
    document.dispatchEvent(event);
}

// カスタムイベントのリッスン
export function onChangeTheme(callback) {
    document.addEventListener("themeChanged", (event) => {
        callback(event.detail.theme);
    });
}
