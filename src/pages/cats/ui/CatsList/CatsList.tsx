import React from "react";
import {ICat} from "pages/cats/model/types/ICat";
import * as styles from "./CatsList.module.scss";
import {classNames} from "shared/lib/classNames";
import {Cat} from "entities/cat";
import {useSelector} from "react-redux";
import {getCatsError, getCatsLoading,} from "pages/cats/model/selectors/selectors";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

interface CatsListProps {
  cats: ICat[];
}

export const CatsList = (props: CatsListProps) => {
  const { cats } = props;
  const isLoading = useSelector(getCatsLoading);
  const error = useSelector(getCatsError);

  if (isLoading) {
    return (
      <div className={classNames(styles['cats-list'])}>
        {Array.from({ length: 10 }, (_, index) => (
          <Skeleton key={index} width={256} height={256} borderRadius={"5px"} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className={classNames(styles['cats-list'])}>error</div>;
  }

  return (
    <div className={classNames(styles['cats-list'])}>
      {cats.map((cat, index) => (
        <Cat key={index} cat={cat} />
      ))}
    </div>
  );
};

CatsList.displayName = "CatsList";
