module.exports = {
  '*.{js,jsx,ts,tsx,json,css}': ['npm run format'],
  '**/*.ts?(x)': () => 'npm run build-types',
};
