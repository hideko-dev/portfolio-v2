import { writable } from "svelte/store";

export const navList = writable([
    {name: "About", to: "about"},
    {name: "Projects", to: "projects"},
    {name: "Contact", to: "contact"},
]);