const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Uhs Design Guidelines',
    description:
      'Visual design guidlines, standards and component documentation | UHS Digital Team',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/nugzali/Code/design-guidelines/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Uhs Design Guidelines',
        description:
          'Visual design guidlines, standards and component documentation | UHS Digital Team',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/nugzali/Code/design-guidelines',
          templates:
            '/Users/nugzali/Code/design-guidelines/node_modules/docz-core/dist/templates',
          docz: '/Users/nugzali/Code/design-guidelines/.docz',
          cache: '/Users/nugzali/Code/design-guidelines/.docz/.cache',
          app: '/Users/nugzali/Code/design-guidelines/.docz/app',
          appPackageJson: '/Users/nugzali/Code/design-guidelines/package.json',
          gatsbyConfig:
            '/Users/nugzali/Code/design-guidelines/gatsby-config.js',
          gatsbyBrowser:
            '/Users/nugzali/Code/design-guidelines/gatsby-browser.js',
          gatsbyNode: '/Users/nugzali/Code/design-guidelines/gatsby-node.js',
          gatsbySSR: '/Users/nugzali/Code/design-guidelines/gatsby-ssr.js',
          importsJs:
            '/Users/nugzali/Code/design-guidelines/.docz/app/imports.js',
          rootJs: '/Users/nugzali/Code/design-guidelines/.docz/app/root.jsx',
          indexJs: '/Users/nugzali/Code/design-guidelines/.docz/app/index.jsx',
          indexHtml:
            '/Users/nugzali/Code/design-guidelines/.docz/app/index.html',
          db: '/Users/nugzali/Code/design-guidelines/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
