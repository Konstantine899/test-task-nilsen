import webpack, {Configuration as WebpackConfiguration} from "webpack";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPath} from "./config/build/types/config";
import path from "path";

const DEVELOPMENT_MODE = "development";

export default (env: BuildEnv):WebpackConfiguration => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode: BuildMode = env.mode || DEVELOPMENT_MODE;
  const isDev:boolean = mode === DEVELOPMENT_MODE;
  const api_key: string = "live_OIalWbPJ3RyJ5KCeUz3SfrgvPuJPz3CTxFWELO6hZtl7NJxPYOn8bI2IQ7JuZulM";
  const PORT: number = env.port || 3000;
  const outputFilename: string = "[name].[contenthash].js"

  const config: webpack.Configuration = buildWebpackConfig({
    mode: DEVELOPMENT_MODE,
    paths,
    isDev,
    port: PORT,
    api_key,
    outputFilename
  });

  return config;
};
