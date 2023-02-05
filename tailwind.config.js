/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [
      "Pages/**/*.{razor,html,cshtml,razor.cs}",
      "Shared/**/*.{razor,html,cshtml,razor.cs}",
      "wwwroot/**/*.{html}",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
