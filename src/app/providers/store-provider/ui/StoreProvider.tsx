import React, {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {IStateSchema} from "../config/IStateSchema";

/**
 * Интерфейс пропсов для компонента StoreProvider.
 */
interface StoreProviderProps {
  children?: ReactNode; // Дочерние элементы (компоненты приложения)
  initialState?: IStateSchema; // Необязательное начальное состояние Redux store
}

/**
 * Компонент StoreProvider оборачивает приложение в Redux-провайдер и создаёт store с заданным начальным состоянием.
 *
 * @param props.children - Дочерние элементы, которые будут иметь доступ к Redux store.
 * @param props.initialState - Необязательное начальное состояние Redux store.
 * @returns JSX-элемент, содержащий провайдер Redux с созданным store.
 *
 * @remarks
 * Этот компонент используется для инициализации Redux store и предоставления доступа к нему всем дочерним компонентам.
 * Если initialState не указан, будет использовано пустое состояние по умолчанию.
 */
export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;


  /**
   * Создаём Redux store с помощью функции createReduxStore.
   * Если initialState передан, он используется для инициализации store.
   */
  const store = createReduxStore(initialState!);

  return <Provider store={store}>{children}</Provider>;

};

// Устанавливаем displayName для отладки
StoreProvider.displayName = "StoreProvider";
