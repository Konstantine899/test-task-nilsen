import { ICatsSchema } from "pages/cats";
import { IFavoriteSchema } from "features/favorite";

export interface IStateSchema {
  cats: ICatsSchema;
  favorite: IFavoriteSchema;
}
