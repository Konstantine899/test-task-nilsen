/**
 * Описывает вес котика в разных системах измерения.
 *
 * @interface IWeight
 * @property {string} imperial - Вес в имперской системе (фунты).
 * @property {string} metric - Вес в метрической системе (килограммы).
 */

interface IWeight {
  imperial: string; // Вес в фунтах
  metric: string; // Вес в килограммах
}


/**
 * Описывает информацию о породе котика.
 *
 * @interface IBreed
 * @property {number} adaptability - Адаптивность к окружающей среде.
 * @property {number} affection_level - Уровень привязанности к владельцу.
 * @property {number} bidability - Уровень послушания.
 * @property {number} cat_friendly - Дружелюбие к другим кошкам.
 * @property {string} cfa_url - URL страницы породы на сайте CFA.
 * @property {number} child_friendly - Дружелюбие к детям.
 * @property {string} country_code - Код страны происхождения.
 * @property {string} country_codes - Страна происхождения (может содержать несколько кодов).
 * @property {string} description - Описание породы.
 * @property {number} dog_friendly - Дружелюбие к собакам.
 * @property {number} energy_level - Уровень энергии.
 * @property {number} experimental - Является ли порода экспериментальной.
 * @property {number} grooming - Требования к уходу.
 * @property {number} hairless - Является ли порода бесшёрстной.
 * @property {number} health_issues - Уровень риска проблем со здоровьем.
 * @property {number} hypoallergenic - Гипоаллергенность породы.
 * @property {string} id - Уникальный идентификатор породы.
 * @property {number} indoor - Предпочтительность жизни в помещении.
 * @property {number} intelligence - Интеллект породы.
 * @property {number} lap - Ласковость.
 * @property {string | ILifeSpan} life_span - Продолжительность жизни (число или диапазон).
 * @property {string} name - Название породы.
 * @property {number} natural - Является ли порода естественной.
 * @property {string} origin - Страна происхождения.
 * @property {number} rare - Редкость породы.
 * @property {string} reference_image_id - ID ссылки на изображение породы.
 * @property {number} rex - Является ли порода рексированной.
 * @property {number} shedding_level - Уровень линьки.
 * @property {number} short_legs - Короткие лапы.
 * @property {number} social_needs - Социальные потребности.
 * @property {number} stranger_friendly - Дружелюбие к незнакомцам.
 * @property {number} suppressed_tail - Укороченный хвост.
 * @property {string} temperament - Темперамент породы.
 * @property {string} vcahospitals_url - URL страницы породы на сайте VCA Hospitals.
 * @property {string} vetstreet_url - URL страницы породы на сайте VetStreet.
 * @property {number} vocalisation - Уровень вокализации.
 * @property {IWeight} weight - Вес породы.
 * @property {string} wikipedia_url - URL страницы породы на Wikipedia.
 */

interface IBreed {
  adaptability: number; // Адаптивность к окружающей среде
  affection_level: number; // Уровень привязанности к владельцу
  bidability: number; // Уровень послушания (опциональное поле)
  cat_friendly: number; // Дружелюбие к другим кошкам
  cfa_url: string; // URL страницы породы на сайте CFA (опциональное поле)
  child_friendly: number; // Дружелюбие к детям
  country_code: string; // Код страны происхождения
  country_codes: string; // Страна происхождения (может содержать несколько кодов)
  description: string; // Описание породы
  dog_friendly: number; // Дружелюбие к собакам
  energy_level: number; // Уровень энергии
  experimental: number; // Является ли порода экспериментальной
  grooming: number; // Требования к уходу
  hairless: number; // Является ли порода бесшёрстной
  health_issues: number; // Уровень риска проблем со здоровьем
  hypoallergenic: number; // Гипоаллергенность породы
  id: string; // Уникальный идентификатор породы
  indoor: number; // Предпочтительность жизни в помещении
  intelligence: number; // Интеллект породы
  lap: number; // Ласковость
  life_span: string; // Продолжительность жизни (число или диапазон)
  name: string; // Название породы
  natural: number; // Является ли порода естественной
  origin: string; // Страна происхождения
  rare: number; // Редкость породы
  reference_image_id: string; // ID ссылки на изображение породы (опциональное поле)
  rex: number; // Является ли порода рексированной
  shedding_level: number; // Уровень линьки
  short_legs: number; // Короткие лапы
  social_needs: number; // Социальные потребности
  stranger_friendly: number; // Дружелюбие к незнакомцам
  suppressed_tail: number; // Укороченный хвост
  temperament: string; // Темперамент породы
  vcahospitals_url?: string; // URL страницы породы на сайте VCA Hospitals (опциональное поле)
  vetstreet_url?: string;  // URL страницы породы на сайте VetStreet (опциональное поле)
  vocalisation: number; // Уровень вокализации
  weight: IWeight; // Вес породы
  wikipedia_url?: string; // URL страницы породы на Wikipedia (опциональное поле)
}

/**
 * Описывает продолжительность жизни котика.
 *
 * @interface ILifeSpan
 * @property {number} min - Минимальная продолжительность жизни.
 * @property {number} max - Максимальная продолжительность жизни.
 */
export interface ILifeSpan {
  min: number; // Минимальная продолжительность жизни
  max: number; // Максимальная продолжительность жизни
}

/**
 * Описывает объект котика.
 *
 * @interface ICat
 * @property {string} id - Уникальный идентификатор котика.
 * @property {string} url - URL изображения котика.
 * @property {number} width - Ширина изображения.
 * @property {number} height - Высота изображения.
 * @property {IBreed[]} breeds - Массив пород котика.
 */
export interface ICat {
  id: string; // Уникальный идентификатор котика
  url: string; // URL изображения
  width: number; // Ширина изображения
  height: number; // Высота изображения
  breeds: IBreed[]; // Массив пород
}