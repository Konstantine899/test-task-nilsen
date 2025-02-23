
/**
 * Создает строку классов CSS на основе базового класса, модификаторов и дополнительных классов.
 *
 * @param cls - Базовый класс.
 * @param mods - Модификаторы классов (ключ — название класса, значение — условие активации).
 * @param additional - Дополнительные классы (массив строк).
 * @returns Строка с объединёнными классами.
 */

export type Mods = Record<string, boolean | string>;


export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  const modClasses: string[] = Object.entries(mods)
    .filter(([_, value]) => Boolean(value)) // Оставляем только активные модификаторы
    .map(([className]) => className); // Извлекаем их имена

  // Фильтруем дополнительные классы от undefined
  const Additional = additional.filter(Boolean);

  // Объединяем все классы в одну строку
  return [cls, ...modClasses, ...Additional].join(" ");
}
