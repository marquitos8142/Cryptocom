/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroud': "C:\Users\n.beltran\Desktop\Pagina\Crypto_Django\cryptocom\src\assets\images\Background.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
