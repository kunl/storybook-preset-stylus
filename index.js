const path = require('path')
const debug = require('debug')('storybook-preset-stylus')

function wrapLoader(loader, options) {
    if(options === false) {
        return []
    }
    return [{loader, options}]
}
function webpack(webpackConfig = {}, options = {} ) {
   
    const { module = {} } = webpackConfig
    const {
        styleLoaderOptions,
        cssLoaderOptions,
        stylusLoaderOptions,
        rule = {}
    } = options

    debug('options presetName is: ', options.presetName)

    return {
        ...webpackConfig,
        module :{
            ...module,
            rules: [
                ...(module.rules || []),
                {
                    test: /\.styl$/,
                    ...rule,
                    use: [
                        ...wrapLoader(require.resolve('style-loader', styleLoaderOptions)),
                        ...wrapLoader(require.resolve('css-loader', styleLoaderOptions)),
                        ...wrapLoader(require.resolve('stylus-loader', styleLoaderOptions)),
                    ],              
                }
            ]
        }
    }
}

module.exports = {
    webpack
}