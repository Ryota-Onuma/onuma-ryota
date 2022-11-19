module.exports = {
  "*.{js,jsx,ts,tsx,json,css}": ["prettier --write"],
  "**/*.ts?(x)": () => "npm run build-types",
  "./src/*": ["eslint --fix"],
};
