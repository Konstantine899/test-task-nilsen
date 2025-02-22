import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";


export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], // Поддерживаемые расширения файлов
    preferAbsolute: true, // Предпочтение абсолютных путей при разрешении модулей
    modules: [options.paths.src, "node_modules"], // Порядок поиска модулей
  };
}
