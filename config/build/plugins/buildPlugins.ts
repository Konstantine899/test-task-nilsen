import webpack from "webpack";
import {BuildOptions} from "../types/config";
import {buildHtmlWebpackPlugin} from "./buildHtmlWebpackPlugin";
import {buildProgressPlugin} from "./buildProgressPlugin";
import {buildMiniCssExtractPlugin} from "./buildMiniCssExtractPlugin";
import {buildHotModuleReplacementPlugin} from "./buildHotModuleReplacementPlugin";
import {buildForkTsCheckerWebpackPlugin} from "./buildForkTsCheckerWebpackPlugin";

export function buildPlugins(options: BuildOptions): webpack.ProgressPlugin[] {
  return [
    buildProgressPlugin(),
    buildHtmlWebpackPlugin(options),
    buildMiniCssExtractPlugin(),
    buildHotModuleReplacementPlugin(),
    buildForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
      __API_KEY__: JSON.stringify(options.api_key),
      __PUBLIC_PATH__: JSON.stringify(options.publicPath)
    }),
  ];
}
