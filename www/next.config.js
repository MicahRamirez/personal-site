// next.config.js
const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');
module.exports = withFonts(withSass(withCSS(withTypescript({
    target: 'serverless',
}))));