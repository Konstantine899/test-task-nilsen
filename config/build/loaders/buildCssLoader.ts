import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "../types/config";
import webpack from "webpack";

/**
 * Создает конфигурацию лоадеров для обработки CSS/SCSS-файлов.
 *
 * @param options - Опции сборки.
 * @returns Конфигурация лоадера для CSS/SCSS.
 */

export function buildCssLoader(options: BuildOptions): webpack.RuleSetRule {
  const { isDev } = options;
  return {
    test: /\.s[ac]ss$/i, // Обработка SCSS/CSS-файлов
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Применение стилей в development или extraction в production
      {
        loader: "css-loader", // Обработка CSS
        options: {
          modules: {
            auto: (resourcePath: string) =>
                /\.(module)\.(s[ac]ss)$/.test(resourcePath), // Включать CSS Modules только для файлов .module.scss
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]" // Для разработки
              : "[hash:base64:8]", // Для production
          },
          esModule: true, // Использовать ES Module экпорт (по умолчанию true)
          sourceMap: isDev, // Включить source maps только для разработки
        },
      },
      "sass-loader", // Компиляция SCSS в CSS
    ],
  };
}
