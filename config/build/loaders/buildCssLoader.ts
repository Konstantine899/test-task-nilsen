import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "../types/config";
import webpack from "webpack";

export function buildCssLoader(options: BuildOptions): webpack.RuleSetRule {
  const { isDev } = options;
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes(".module."),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
          sourceMap: true,
        },
      },
      "sass-loader",
    ],
  };
}
