import {BuildOptions} from "./types/config";
import {Configuration} from "webpack-dev-server";
import path from "path";

export function buildDevServer(options: BuildOptions): Configuration {
  return {
    port: options.port, // Порт для запуска сервера
    open: true, // Автоматическое открытие браузера
    hot: true, // Включение горячей замены модулей (HMR)
    historyApiFallback: true, // Поддержка SPA (Single Page Application)
    static: {
      directory: path.resolve(__dirname, "public"), // Директория с статическими файлами
    },
    devMiddleware: {
      writeToDisk: false, // Не записывать файлы на диск
    },
    client: {
      logging: options.isDev ? "info" : "none", // Уровень логирования
      overlay: options.isDev, // Включать overlay только для разработки
      progress: options.isDev, // Показывать прогресс сборки
      reconnect: 10, // Попытка переподключения каждые 10 секунд
    },
  };
}
