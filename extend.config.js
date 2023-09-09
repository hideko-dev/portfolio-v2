export const extendConfig = () => ({
    render: "rollup",
    frameworks: {
        frontend: "svelte",
    },
    build: {
        type: "vite",
        output: {
            nameFlash: true,
            loadXML: false,
        }
    }
});
