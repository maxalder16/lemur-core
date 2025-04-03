/** @type {import("prettier").Config} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
    tailwindStylesheet: "./src/style.css",
	semi: true,
	singleQuote: true,
	trailingComma: 'es5',
	quoteProps: 'consistent',
	arrowParens: 'avoid',
	vueIndentScriptAndStyle: true,
};
 
export default config;
