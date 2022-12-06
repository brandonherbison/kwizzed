/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      ronBurgundy: "#8B2325",
      pinkBrain: "#FAF6F6",
      walterWhite: "#F5F5F5"
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
