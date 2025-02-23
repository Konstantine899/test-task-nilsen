/**
 * Интерфейс IStateSchema описывает структуру глобального состояния Redux store.
 *
 * @interface IStateSchema
 * @description
 * Представляет полную схему состояния приложения, включая модули "котики" и "избранное".
 */
import {ICatsSchema} from "pages/cats";
import {IFavoriteSchema} from "features/favorite";

export interface IStateSchema {
  /**
   * Состояние модуля "котики".
   * @type {ICatsSchema}
   * @description
   * Содержит информацию о списках котиков, состоянии загрузки, ошибках, пагинации и наличии дополнительных данных.
   */
  cats: ICatsSchema;

  /**
   * Состояние модуля "избранное".
   * @type {IFavoriteSchema}
   * @description
   * Содержит список избранных котиков и связанные с ними данные.
   */
  favorite: IFavoriteSchema;
}
