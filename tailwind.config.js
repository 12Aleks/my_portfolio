/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {inter: 'var(--font-inter)'},
            colors: {
                background: 'rgb(var(--background))',
                foreground: 'rgb(var(--foreground))',
                muted: 'rgb(var(--muted))',
                accent: 'rgb(var(--accent))',
            },
            keyframes: {
                'spin-reverse': {
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(-360deg)'},
                },
                'petals': {
                    '0%': { top: '-10%', opacity: '0' },
                    '20%': { opacity: '0.5' },
                    '100%': { top: '110%', opacity: '0.8' },
                },
                'sway': {
                    '0%': { transform: 'rotate(45deg) translateX(0)' },
                    '50%': { transform: 'rotate(45deg) translateX(50px)' },
                    '100%': { transform: 'rotate(45deg) translateX(0)' }
                }
            },
            animation: {
                'spin-slow': 'spin 300s infinite linear',
                'rotate-icons': 'spin-reverse 300s infinite linear',
                'petals': 'petals linear infinite, sway ease-in-out infinite',
            }
        },

    },
    plugins: [],
};
