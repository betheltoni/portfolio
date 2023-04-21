/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                nusery: "#0B0C10",
                primary: "#1F2833",
                secondary: "#C5C6C7",
                tertiary: "#66FCF1",
                final: "#45A29E"

            },
            fontFamily: {
                sofia: ["Sofia", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
                mono: ["Syne Mono", "monospace"],
            },
        },
    },
    plugins: [],
}
