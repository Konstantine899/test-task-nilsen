/**
 * Декларация типов для SCSS-модулей.
 *
 * @module "*.scss"
 * @description
 * Определяет интерфейс IClassNames для работы с CSS Modules в TypeScript.
 * Каждый импортируемый SCSS-файл экспортируется как объект, содержащий классы.
 */

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string; // Ключи — названия классов, значения — строковые представления классов
  }
  /**
   * Экспорт объекта с классами CSS Modules.
   */
  const classNames: IClassNames;
  export = classNames;
}


/**
 * Декларация типов для SVG-иконок.
 *
 * @module "*.svg"
 * @description
 * Определяет тип для импорта SVG-файлов как React-компонентов.
 * Импортируемый SVG экспортируется как функциональный компонент React, принимающий пропсы типа React.SVGProps<SVGSVGElement>.
 */

declare module "*.svg" {
  import React from "react";
  /**
   * Тип для SVG-компонента.
   */
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  /**
   * Экспорт SVG-компонента по умолчанию.
   */
  export default SVG;
}

/**
 * Декларация типов для PNG-изображений.
 *
 * @module "*.png"
 * @description
 * Объявляет поддержку импорта PNG-файлов в TypeScript.
 * Файлы PNG могут использоваться как строки URL или в качестве статических ресурсов.
 */
declare module "*.png";

/**
 * Декларация типов для JPG-изображений.
 *
 * @module "*.jpg"
 * @description
 * Объявляет поддержку импорта JPG-файлов в TypeScript.
 * Файлы JPG могут использоваться как строки URL или в качестве статических ресурсов.
 */
declare module "*.jpg";

/**
 * Декларация типов для JPEG-изображений.
 *
 * @module "*.jpeg"
 * @description
 * Объявляет поддержку импорта JPEG-файлов в TypeScript.
 * Файлы JPEG могут использоваться как строки URL или в качестве статических ресурсов.
 */
declare module "*.jpeg";


/**
 * Переменная окружения __IS_DEV__ указывает на режим разработки.
 *
 * @constant {boolean} __IS_DEV__
 * @description
 * Используется для условного включения функциональности только в режиме разработки.
 * Например, можно использовать её для включения Redux DevTools или отладочной информации.
 */
declare const __IS_DEV__: boolean;

/**
 * Переменная окружения __API_KEY__ содержит API-ключ для внешних сервисов.
 *
 * @constant {string} __API_KEY__
 * @description
 * Используется для авторизации при запросах к API.
 * Значение должно быть определено в переменных окружения (.env файлах).
 */
declare const __API_KEY__: string;
