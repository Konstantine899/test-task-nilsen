import webpack from "webpack";
import { BuildOptions } from "../types/config";
import { buildBabelLoader } from "./buildBabelLoader";
import { buildCssLoader } from "./buildCssLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const tsBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });
  const cssLoader = buildCssLoader(options);

  return [tsBabelLoader, tsxBabelLoader, cssLoader];
}
