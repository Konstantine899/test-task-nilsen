import webpack from "webpack";

export function buildHotModuleReplacementPlugin():webpack.HotModuleReplacementPlugin {
  return new webpack.HotModuleReplacementPlugin();
}
