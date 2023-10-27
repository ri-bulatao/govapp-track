/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './resources/**/*.blade.php',
        './app/Filament/**/*.php',
        './app/Http/Livewire/**/*.php',
        './vendor/filament/**/*.blade.php',
        './node_modules/flowbite/**/*.js'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                danger: colors.rose,
                primary: {
                    '50': '#d7cdba',
                    '100': '#cec1a9',
                    '200': '#c4b699',
                    '300': '#cec1aa',
                    '400': '#c5b599',
                    '500': '#bbaa89',
                    '600': '#b29e79',
                    '700': '#a99269',
                    '800': '#9d865b',
                    '900': '#8d7851'
                },
                info: colors.blue,
                success: colors.green,
                warning: colors.yellow,
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('flowbite/plugin')
    ],
}
