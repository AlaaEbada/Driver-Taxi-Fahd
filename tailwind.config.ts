import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    // Theme configuration is now handled in src/app/globals.css via @theme directive
    theme: {
        extend: {},
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
