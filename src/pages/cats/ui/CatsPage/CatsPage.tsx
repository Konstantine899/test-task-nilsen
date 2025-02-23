import React, {useEffect} from "react";
import * as styles from "./CatsPage.module.scss";
import {classNames} from "shared/lib/classNames";
import {useDispatch, useSelector} from "react-redux";
import {catsAction, fetchCats} from "pages/cats";
import {AppDispatch} from "app/providers/store-provider";
import {getCats, getCatsHasMore, getCatsLoading, getCatsPage} from "../../model/selectors/selectors";
import {CatsList} from "../CatsList/CatsList";
import {throttle} from 'shared/lib/throttle';

/**
 * Компонент CatsPage отображает список котиков с поддержкой бесконечной прокрутки.
 *
 * @remarks
 * Использует Redux для управления состоянием списка котиков, флагами загрузки и пагинацией.
 */

const CatsPage = () => {
  /**
   * Селекторы для получения состояния из Redux.
   */
  const dispatch = useDispatch<AppDispatch>();
  const cats = useSelector(getCats); // Массив котиков
  const hasMore = useSelector(getCatsHasMore); // Флаг наличия дополнительных данных
  const page = useSelector(getCatsPage); // Текущая страница пагинации
  const isLoading = useSelector(getCatsLoading); // Флаг загрузки

  /**
   * Эффект для первоначальной загрузки данных при монтировании компонента.
   */

  useEffect(() => {
    dispatch(fetchCats()); // Загружаем данные для текущей страницы
  }, [dispatch, page]);

  /**
   * Обработчик прокрутки страницы с использованием throttle.
   * Если пользователь прокрутил страницу до конца, вызывается действие setPage для загрузки следующей порции данных.
   */

  const handleScroll = throttle(() => {
    if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 1 && // Проверяем, что достигнут конец страницы
        hasMore && // Есть ли ещё данные для загрузки
        !isLoading // Не выполняется ли уже загрузка
    ) {
      dispatch(catsAction.setPage(page + 1)); // Увеличиваем номер страницы для загрузки следующей порции
    }
  }, 300); // Ограничение на 300 мс между вызовами обработчика


  /**
   * Эффект для добавления и удаления слушателя прокрутки.
   */

  useEffect(() => {
    // Добавляем слушатель прокрутки
    window.addEventListener("scroll", handleScroll);

    // Удаление слушателя при размонтировании компонента
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, hasMore, isLoading]);


  return (
    <div className={classNames(styles["cats-page"])}>
      <CatsList cats={cats} />
      <div className={classNames(styles["loading-cats-container"])}>
        {hasMore && <p>{isLoading && "...загружаем котиков..."}</p>}
      </div>
      {!hasMore && <p>Больше котиков нет.</p>}
      <div style={{ height: "256px" }} />
    </div>
  );
};

// Устанавливаем displayName для отладки
CatsPage.displayName = "CatsPage";

export default CatsPage;
