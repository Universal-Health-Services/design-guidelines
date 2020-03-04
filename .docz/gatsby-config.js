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
    description: 'My awesome app using docz',
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
        root: '/Jobs/Code/uhs-design-guidelines/.docz',
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
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Jobs/Code/uhs-design-guidelines',
          templates:
            '/Jobs/Code/uhs-design-guidelines/node_modules/docz-core/dist/templates',
          docz: '/Jobs/Code/uhs-design-guidelines/.docz',
          cache: '/Jobs/Code/uhs-design-guidelines/.docz/.cache',
          app: '/Jobs/Code/uhs-design-guidelines/.docz/app',
          appPackageJson: '/Jobs/Code/uhs-design-guidelines/package.json',
          gatsbyConfig: '/Jobs/Code/uhs-design-guidelines/gatsby-config.js',
          gatsbyBrowser: '/Jobs/Code/uhs-design-guidelines/gatsby-browser.js',
          gatsbyNode: '/Jobs/Code/uhs-design-guidelines/gatsby-node.js',
          gatsbySSR: '/Jobs/Code/uhs-design-guidelines/gatsby-ssr.js',
          importsJs: '/Jobs/Code/uhs-design-guidelines/.docz/app/imports.js',
          rootJs: '/Jobs/Code/uhs-design-guidelines/.docz/app/root.jsx',
          indexJs: '/Jobs/Code/uhs-design-guidelines/.docz/app/index.jsx',
          indexHtml: '/Jobs/Code/uhs-design-guidelines/.docz/app/index.html',
          db: '/Jobs/Code/uhs-design-guidelines/.docz/app/db.json',
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
