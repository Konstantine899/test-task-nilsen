import React, {
  ImgHTMLAttributes,
  JSX,
  memo,
  useLayoutEffect,
  useState,
} from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  mainImage?: JSX.Element;
  spareImage?: JSX.Element;
  className?: string;
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

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const image = new Image();
    image.src = src ?? "";
    image.onload = () => {
      setIsLoading(true);
    };
    image.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && mainImage) {
    return mainImage; // Отображается skeleton
  }

  if (hasError && spareImage) {
    return spareImage; // Отображается картинка по умолчанию
  }
  return <img className={className} src={src} alt={alt} {...otherProps} />;
});

UiKitImage.displayName = `UiKitImage`;
