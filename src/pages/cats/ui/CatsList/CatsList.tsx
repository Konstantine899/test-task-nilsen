import React from "react";
import { ICat } from "pages/cats/model/types/ICat";
import * as styles from "./CatsList.module.scss";
import { classNames } from "shared/lib/classNames";
import Cat from "entities/cat/Cat";

interface CatsListProps {
  cats: ICat[];
}

export const CatsList = (props: CatsListProps) => {
  const { cats } = props;
  return (
    <div className={classNames(styles.catsList)}>
      {cats.map((cat) => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </div>
  );
};
