import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import reactJsx from "vite-react-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    root: "./",
    plugins: [reactRefresh(), reactJsx(), VitePWA()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: "/src",
            },
        ],
    },
});
