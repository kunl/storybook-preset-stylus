import { Configuration, RuleSetCondition } from 'webpack';

interface Options {
  styleLoaderOptions?: object | false;
  cssLoaderOptions?: object | false;
  stylusLoaderOptions?: object | false;
  rule?: RuleSetCondition;
}

declare interface PresetScss {
  webpack: (config?: Configuration, options?: Options) => Configuration;
}

export = PresetStylus;