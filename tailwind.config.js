/** @type {import('tailwindcss').Config} */
module.exports = {
    jit: true,
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            transitionDelay: {
                0: '0ms',
            }
        },
    },
    variants: {
        extends: {},
        display: ['responsive', 'group-hover', 'group-focus']
    },
    plugins: [],
}
