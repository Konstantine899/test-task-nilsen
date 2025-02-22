import webpack from "webpack";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPath} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const api_key = "live_OIalWbPJ3RyJ5KCeUz3SfrgvPuJPz3CTxFWELO6hZtl7NJxPYOn8bI2IQ7JuZulM";
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode: "development",
    paths,
    isDev,
    port: PORT,
    api_key
  });

  return config;
};
