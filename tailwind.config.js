const { transform } = require("typescript");

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
			colors: {
				primary: "#007dfc",
			},
			keyframes: {
				slidein: {
					from: {
						opacity: "0",
						transform: "translateY(-14px)",
					},
					to: {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				slidein300: "slidein 1s ease 300ms forwards",
				slidein500: "slidein 1s ease 500ms forwards",
				slidein700: "slidein 1s ease 700ms forwards",
			},
		},
	},
	plugins: [],
};
