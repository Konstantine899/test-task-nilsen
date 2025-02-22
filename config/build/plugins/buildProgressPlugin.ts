import webpack from "webpack";

export function buildProgressPlugin():webpack.ProgressPlugin {
  return new webpack.ProgressPlugin();
}
