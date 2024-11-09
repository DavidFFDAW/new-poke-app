import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
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
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: [
                "favicon.svg",
                "robots.txt",
                "apple-touch-icon.png",
            ],
            manifest: {
                name: "Tu Aplicación",
                short_name: "Aplicación",
                description: "Descripción de tu aplicación",
                theme_color: "#ffffff",
                background_color: "#ffffff",
                display: "standalone",
                start_url: "/",
                scope: "/",
                lang: "es",
                orientation: "portrait",
                categories: ["pokemon", "entertainment"],
                id: "com.pokemon.davidfernandez",
                dir: "ltr",

                icons: [
                    {
                        src: "/images/android/android-launchericon-512-512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "/images/android/android-launchericon-192-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/images/android/android-launchericon-144-144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "/images/android/android-launchericon-96-96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "/images/android/android-launchericon-72-72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "/images/android/android-launchericon-48-48.png",
                        sizes: "48x48",
                        type: "image/png",
                    },
                ],
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: ({ request }: any) =>
                            request.destination === "document",
                        handler: "NetworkFirst",
                        options: {
                            cacheName: "html-cache",
                        },
                    },
                    {
                        urlPattern: ({ request }: any) =>
                            ["style", "script", "worker"].includes(
                                request.destination
                            ),
                        handler: "StaleWhileRevalidate",
                        options: {
                            cacheName: "assets-cache",
                        },
                    },
                    {
                        urlPattern: ({ request }: any) =>
                            request.destination === "image",
                        handler: "CacheFirst",
                        options: {
                            cacheName: "image-cache",
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
                            },
                        },
                    },
                ],
            },
        }),
    ],
});
