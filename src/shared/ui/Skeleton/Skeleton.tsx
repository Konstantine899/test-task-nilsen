import React, {CSSProperties, memo} from "react";
import {classNames} from "shared/lib/classNames";
import * as cls from "./Skeleton.module.scss";

/**
 * Компонент Skeleton используется для отображения заглушки во время загрузки данных.
 *
 * @param className - Дополнительный класс для стилизации.
 * @param height - Высота компонента (строка или число).
 * @param width - Ширина компонента (строка или число).
 * @param borderRadius - Радиус скругления (строка или число).
 * @returns JSX-элемент Skeleton.
 */

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = memo(
  (props: SkeletonProps) => {
    const { borderRadius, width, height, className, ...otherProps } = props;

      // Преобразуем числовые значения в строки
    const styles: CSSProperties = {
        width: typeof  width === 'number' ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        borderRadius: typeof borderRadius === "number" ? `${borderRadius}px`: borderRadius
    }

    return (
      <div
        className={classNames(cls.skeleton, {}, [className])} // Модификаторы не используются
        style={styles}
        {...otherProps}
      />
    );
  }
);

// displayName для отладки
Skeleton.displayName = `Skeleton`;
