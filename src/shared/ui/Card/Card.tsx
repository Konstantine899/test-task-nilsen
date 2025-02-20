import React, { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "shared/lib/classNames";
import * as styles from "./Card.module.scss";

export enum CardTheme {
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
  const { children, theme, className, ...otherProps } = props;
  return (
    <div
      className={classNames(styles.Card, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});

Card.displayName = `Card`;
