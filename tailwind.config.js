/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // legacy tokens (kept so old classes don't break)
        cream: {
          50:  "#FBF7EF",
          100: "#F4EDDF",
          200: "#EFE7D5",
          300: "#E6DDC8",
          400: "#e1c9a9"
        },
        ink: {
          900: "#0E2240",
          700: "#1B3358",
          500: "#5C6B82"
        },
        accent: {
          500: "#C9A33B"
        },
        // premium brand palette
        vb: {
          ivory:  "#FBF7EF",
          ivory2: "#F4EDDF",
          cream:  "#FDFBF6",
          line:   "#E6DDC8",
          ink:    "#0E2240",
          ink2:   "#1B3358",
          muted:  "#5C6B82",
          gold:   "#B7892D",
          gold2:  "#C9A33B",
          maroon: "#8B2A3F",
          green:  "#1E6B52"
        }
      },
      fontFamily: {
        head:  ["'Playfair Display'", "Georgia", "serif"],
        body:  ["'Inter'", "system-ui", "sans-serif"],
        serif: ["'Cormorant Garamond'", "Georgia", "serif"]
      },
      boxShadow: {
        glass:  "0 18px 40px -22px rgba(14,34,64,0.28)",
        "vb-lg": "0 30px 70px -30px rgba(14,34,64,0.35)"
      },
      maxWidth: {
        "8xl": "88rem"
      }
    }
  },
  plugins: []
};
