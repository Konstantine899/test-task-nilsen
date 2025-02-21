import React, { CSSProperties, memo } from "react";
import { classNames } from "shared/lib/classNames";
import * as cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = memo(
  (props: SkeletonProps) => {
    const { borderRadius, width, height, className, ...otherProps } = props;
    const styles: CSSProperties = { width, height, borderRadius };

    return (
      <div
        className={classNames(cls.skeleton, {}, [className])}
        style={styles}
        {...otherProps}
      />
    );
  }
);

Skeleton.displayName = `Skeleton`;
