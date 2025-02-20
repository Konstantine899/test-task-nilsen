import React from "react";
import { Cat } from "pages/cats/model/types/cat";

interface CatsListProps {
  cat: Cat;
}

export const CatsList = (props: CatsListProps) => {
  const { cat } = props;
  console.log(cat.url);
  return <div>{`Кот: ${cat.id}`}</div>;
};
