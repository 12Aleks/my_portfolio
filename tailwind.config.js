/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)'],
                marker: ['var(--font-permanent-marker)'],
            },
            screens: {
                'xxs': {min: '414px', max: '479.98px'},
                'xs': {min: '480px', max: '639.98px'},
                '1xl': {min: '64rem', max: '80rem'},
                '2xl-only': {min: '1280px', max: '1699.98px'},
                '3xl': {min: '1700px'},
                '3xl-only': {min: '1700px', max: '1919.98px'},
                '4xl': {min: '1920px'},
                'landscape': {'raw': '(orientation: landscape)'},
                'portrait': {'raw': '(orientation: portrait)'},
            },
            colors: {
                background: 'rgb(var(--background))',
                foreground: 'rgb(var(--foreground))',
                muted: 'rgb(var(--muted))',
                accent: 'rgb(var(--accent))',
            },
            backgroundImage: {
                'firefly-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, .6) 0%, rgba(217, 217, 217, 0) 100%)',
                'fire-gradient': 'radial-gradient(circle, rgba(255,165,0,0.8) 20%, rgba(255,0,0,0.2) 60%, transparent 70%)',
            },
            opacity: {
                '6': '0.06',
                '7': '0.07',
                '8': '0.08',
                '9': '0.09',
            },
            keyframes: {
                'spin-reverse': {
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(-360deg)'}
                },
                'blur': {
                    '0%': {filter: 'blur(1.5px)'},
                    '50%': {filter: 'blur(2.5px)'},
                    '100%': {filter: 'blur(1.5px)'},
                },
                'petals': {
                    '0%': {top: '-10%', opacity: '0'},
                    '20%': {opacity: '0.5'},
                    '100%': {top: '110%', opacity: '0.8'},
                },
                'sway': {
                    '0%': {transform: 'rotate(45deg) translateX(0)'},
                    '50%': {transform: 'rotate(45deg) translateX(50px)'},
                    '100%': {transform: 'rotate(45deg) translateX(0)'}
                },
                'flicker': {
                    '0%': {transform: 'scale(1) translateY(0); opacity: 0.9'},
                    '100%': {transform: 'scale(1.1) translateY(-5px); opacity: 1 '}
                },
                'fadeIn': {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'},
                },
            },
            animation: {
                'spin-slow': 'spin 300s infinite linear',
                'rotate-icons': 'spin-reverse 300s infinite linear',
                'fadeIn': 'fadeIn 1s ease-out forwards',
                'petals': 'petals linear infinite, sway ease-in-out infinite',
                'fire': ' flicker 0.1s infinite alternate',
                'blur-pulsation': 'blur 3s ease-out infinite',
            }
        },

    },
    plugins: [],
};
