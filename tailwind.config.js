/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        SubtleHoverLight: '#f3f4f6',
        SubtleHoverDark: '#1f2937',
        TextHoverLight: '#4b5563',
        TextHoverDark: '#9ca3af',
        CardHoverLight: '#e5e7eb',
        CardHoverDark: '#334155',
        DarkThemeBackground: '#0f172a',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        ovo: ['var(--font-ovo)', 'serif'],
      },
      boxShadow :{
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      }
    },
  },
  plugins: [],
}