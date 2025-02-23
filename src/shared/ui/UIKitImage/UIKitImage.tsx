import React, {ImgHTMLAttributes, JSX, memo, useLayoutEffect, useState,} from "react";
import {classNames, Mods} from "shared/lib/classNames";
import * as styles from './UIKitImage.module.scss'

/**
 * Компонент UiKitImage используется для отображения изображений с поддержкой заглушек и изображений по умолчанию.
 *
 * @param src - URL изображения.
 * @param alt - Альтернативный текст для изображения.
 * @param mainImage - Заглушка для отображения во время загрузки.
 * @param spareImage - Изображение по умолчанию при ошибке загрузки.
 * @param className - Дополнительный класс для стилизации.
 * @returns JSX-элемент UiKitImage.
 */

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string; // URL изображения
    alt?: string; // Альтернативный текст
    mainImage?: JSX.Element; // Заглушка для загрузки
    spareImage?: JSX.Element; // Изображение по умолчанию
    className?: string; // Дополнительный класс
}

export const UiKitImage: React.FC<ImageProps> = memo((props: ImageProps) => {
    const {
        src,
        alt = "img",
        mainImage,
        spareImage,
        className,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true); // Флаг загрузки
    const [hasError, setHasError] = useState(false); // Флаг ошибки

    useLayoutEffect(() => {
        if (!src) {
            console.warn("Аттрибут src пуст");
            setIsLoading(false);
            setHasError(true);
            return;
        }

        const image = new Image();
        image.src = src ?? "";


        // Обработка успешной загрузки
        image.onload = () => {
            setIsLoading(false); // Загрузка завершена
            setHasError(false); // Ошибка отсутствует
        };
        // Обработка ошибки загрузки
        image.onerror = () => {
            setIsLoading(false); // Загрузка завершена
            setHasError(true); // Установить флаг ошибки
        };
    }, [src]);

    // Если загружается и есть mainImage, показываем её
    if (isLoading && mainImage) {
        return mainImage; // Отображается skeleton
    }

    // Если произошла ошибка и есть spareImage, показываем её
    if (hasError && spareImage) {
        return spareImage; // Отображается картинка по умолчанию
    }

    const mods: Mods = {
        [styles.hide]: isLoading
    }

    // Если всё хорошо, показываем img
    return <img className={classNames('', mods, [className])} src={src} alt={alt} {...otherProps} />;
});

// Устанавливаем displayName для отладки
UiKitImage.displayName = `UiKitImage`;
