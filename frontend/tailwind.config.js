/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};