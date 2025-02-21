import React from "react";
import { ICat } from "pages/cats/model/types/ICat";
import * as styles from "./CatsList.module.scss";
import { classNames } from "shared/lib/classNames";
import { Cat } from "entities/cat";
import { useSelector } from "react-redux";
import {
  getCatsError,
  getCatsLoading,
} from "pages/cats/model/selectors/selectors";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface CatsListProps {
  cats: ICat[];
}

export const CatsList = (props: CatsListProps) => {
  const { cats } = props;
  const isLoading = useSelector(getCatsLoading);
  const error = useSelector(getCatsError);

  if (isLoading) {
    const array = Array(10).fill(0);
    return (
      <div className={classNames(styles.catsList)}>
        {array.map((item) => (
          <Skeleton
            key={item.id}
            width={256}
            height={256}
            borderRadius={"5px"}
          />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className={classNames(styles.catsList)}>error</div>;
  }

  return (
    <div className={classNames(styles.catsList)}>
      {cats.map((cat) => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

CatsList.displayName = "CatsList";
