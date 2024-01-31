/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        gothic: ["var(--font-trade-gothic)"],
        sofia: ["var(--font-sofia)"],
        roboto_slab: ["var(--font-roboto-slab)"],
        kontrapunkt: ["kontrapunkt"],
      },
      screens: {
        xxs: "340px",
        // => @media (min-width: 320px) { ... }
        
        xs: "500px",
        // => @media (min-width: 500px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        
        "3xl": "1800px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },

  plugins: [
    
  
  ],
 
};
