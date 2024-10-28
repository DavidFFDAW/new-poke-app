import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@config/*": path.resolve(__dirname, "./src/config/*"),
            "@utils/*": path.resolve(__dirname, "./src/utils/*"),
            "@components/*": path.resolve(__dirname, "./src/components/*"),
            "@services/*": path.resolve(__dirname, "./src/services/*"),
            "@pages/*": path.resolve(__dirname, "./src/pages/*"),
            "@assets/*": path.resolve(__dirname, "./src/assets/*"),
            "@types/*": path.resolve(__dirname, "./src/@types/*"),
        },
    },
    plugins: [react()],
});
