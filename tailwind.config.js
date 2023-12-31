/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './docs/.vitepress/**/*.{js,ts,vue}',
		'./docs/**/*.md',
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: ["0 0px 20px rgba(100,100, 255, 0.5)", "0 0px 65px rgba(100, 100,255, 0.4)"],
        wglow: ["0 0px 20px rgba(255,255, 255, 0.35)", "0 0px 65px rgba(255, 255,255, 0.2)"],
      },
      fontFamily: {
      }
    },
  },
  plugins: [],
}

