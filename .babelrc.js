module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'prismjs',
      {
        languages: [
          'javascript',
          'css',
          'markup',
          'bash',
          'diff',
          'docker',
          'go',
          'graphql',
          'ignore',
          'json',
          'markdown',
          'nginx',
          'php',
          'python',
          'jsx',
          'tsx',
          'regex',
          'ruby',
          'sql',
          'swift',
          'typescript',
          'vim',
          'yaml',
          'hcl',
          'scss',
          'csv',
          'git'
        ],
        plugins: ['show-language', 'copy-to-clipboard', 'toolbar'],
        // theme: "prism-laserwave",
        css: true
      }
    ]
  ]
}
