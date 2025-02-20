import React, { useEffect } from "react";
import * as styles from "./CatsPage.module.scss";
import { classNames } from "shared/lib/classNames";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "pages/cats";
import { AppDispatch } from "app/providers/store-provider/config/store";
import {
  getCats,
  getCatsError,
  getCatsLoading,
} from "pages/cats/model/selectors/selectors";
import { CatsList } from "pages/cats/ui/CatsList/CatsList";

const CatsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cats = useSelector(getCats);
  const isLoading = useSelector(getCatsLoading);
  const error = useSelector(getCatsError);

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!isLoading) {
    return (
      <div className={classNames(styles["cats-page"])}>
        {cats.map((cat) => (
          <CatsList key={cat.id} cat={cat} />
        ))}
      </div>
    );
  }
};

export default CatsPage;
