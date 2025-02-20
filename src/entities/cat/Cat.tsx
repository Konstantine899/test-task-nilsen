import React from "react";
import { ICat } from "pages/cats/model/types/ICat";
import { Card, CardTheme } from "shared/ui/Card/Card";

interface CatProps {
  cat: ICat;
}

export const Cat = (props: CatProps) => {
  const { cat } = props;
  return <Card theme={CardTheme.OUTLINED}>{cat.id}</Card>;
};

Cat.displayName = "Cat";
