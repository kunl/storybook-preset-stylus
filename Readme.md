# Stylus preset for Storybook

One-line Stylus configuration for storybook.

## Basic usage

```
yarn add -D storybook-preset-stylus css-loader stylus stylus-loader style-loader
```

Then add the following to `.storybook/main.js`:

```js
module.exports = {
  addons: ['storybook-preset-stylus'],
};
```

## Advanced usage

You can pass configurations by using Object addon declaration for `storybook-preset-stylus` and adding the configurations under the `options` key. You can pass configurations into the preset's webpack loaders using `styleLoaderOptions`, `cssLoaderOptions`, and `stylusLoaderOptions` keys. See documentation for each respective loader to learn about valid options. You can register other addons through the string declaration as normal.

```
module.exports = {
  addons: [
    {
      name: 'storybook-preset-stylus',
      options: {
        cssLoaderOptions: {
           modules: true,
           localIdentName: '[name]__[local]--[hash:base64:5]',
        }
      }
    },
    // You can add other presets/addons by using the string declaration
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
  ]
}
```
