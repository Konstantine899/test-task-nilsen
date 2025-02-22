import {BuildOptions} from "../types/config";
import webpack from "webpack";

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

export function buildBabelLoader(options: BuildBabelLoaderProps): webpack.RuleSetRule {
  const { isTsx } = options;
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          ["@babel/plugin-transform-typescript", { isTsx }],
          ["@babel/plugin-transform-runtime", {}],
        ],
      },
    },
  };
}
