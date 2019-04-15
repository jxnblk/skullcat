module.exports = {
  plugins: [
    'gatsby-mdx',
    'gatsby-plugin-emotion',
    // 'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: [
          'use-beats',
        ]
      }
    }
  ]
}
