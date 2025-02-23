import {BuildOptions} from "../types/config";
import webpack from "webpack";

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

/**
 * Создает конфигурацию лоадера Babel для транспиляции TypeScript/JavaScript.
 *
 * @param options - Опции сборки.
 * @param options.isTsx - Флаг для обработки TSX-файлов (React).
 * @returns Конфигурация лоадера Babel.
 */

export function buildBabelLoader(options: BuildBabelLoaderProps): webpack.RuleSetRule {
  const { isTsx } = options;
  return {
    test: isTsx
        ? /\.(jsx|tsx)$/ // Поддержка .jsx, .tsx
        : /\.(js|ts)$/, // Поддержка .js, .ts
    exclude: /node_modules/, // Исключить node_modules
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"], // Базовые пресет
        plugins: [
          ["@babel/plugin-transform-typescript", { isTsx }],
          ["@babel/plugin-transform-runtime", {}],
        ],
      },
    },
  };
}
