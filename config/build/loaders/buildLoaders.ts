import webpack from "webpack";
import { BuildOptions } from "../types/config";
import { buildBabelLoader } from "./buildBabelLoader";
import { buildTypeScriptLoader } from "./buildTypeScriptLoader";
import { buildCssLoader } from "./buildCssLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = buildBabelLoader();
  const typescriptLoader = buildTypeScriptLoader();
  const cssLoader = buildCssLoader(options);

  return [babelLoader, typescriptLoader, cssLoader];
}
