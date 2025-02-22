import webpack, {Configuration as WebpackConfiguration} from "webpack";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPath} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv):WebpackConfiguration => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode: BuildMode = env.mode || "development";
  const isDev:boolean = mode === "development";
  const api_key: string = "live_OIalWbPJ3RyJ5KCeUz3SfrgvPuJPz3CTxFWELO6hZtl7NJxPYOn8bI2IQ7JuZulM";
  const PORT: number = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode: "development",
    paths,
    isDev,
    port: PORT,
    api_key
  });

  return config;
};
