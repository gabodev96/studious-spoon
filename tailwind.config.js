/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      height: {
        128: "38rrrrem",
        129: "55rem",
        131: "40rem",
        130: "57rem",
        126: "27.5rem",
        33: "8.5rem",
      },
      fontFamily: {
        baloo: ['"Baloo Tammudu 2"'],
      },
      spacing: {
        25: "6.25rem",
      },
    },
  },
  plugins: [],
};
