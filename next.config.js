
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',

})
module.exports = withNextra({
    footerText: `FEDS201 ${new Date().getFullYear()} © FEDS201.`
    }
)



// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })