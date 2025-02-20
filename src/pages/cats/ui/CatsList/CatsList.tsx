import React from "react";
import { Cat } from "pages/cats/model/types/cat";
import { Card, CardTheme } from "shared/ui/Card/Card";

interface CatsListProps {
  cat: Cat;
}

export const CatsList = (props: CatsListProps) => {
  const { cat } = props;
  console.log(cat.url);
  return <Card theme={CardTheme.OUTLINED}>{`Кот: ${cat.id}`}</Card>;
};
