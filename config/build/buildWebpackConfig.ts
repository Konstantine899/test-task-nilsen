import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./plugins/buildPlugins";
import {buildLoaders} from "./loaders/buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev, outputFilename } = options;
  return {
    mode, // Режим работы (development/production)
    entry: paths.entry, // Точка входа приложения
    output: {
      filename: outputFilename, // Формат выходных файлов
      path: paths.build, // Директория для выходных файлов
      clean: true, // Очистка директории перед сборкой
    },
    plugins: buildPlugins(options), // Конфигурация плагинов
    module: {
      rules: buildLoaders(options), // Конфигурация лоадеров
    },
    resolve: buildResolvers(options), // Конфигурация резолверов
    devtool: isDev ? "inline-source-map" : undefined, // Source maps для разработки
    devServer: isDev ? buildDevServer(options) : undefined, // Настройки dev-server
  };
}
