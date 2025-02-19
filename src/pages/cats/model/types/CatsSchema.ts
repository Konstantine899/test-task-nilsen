import { Cat } from "pages/cats/model/api/fetchCats";

export interface CatsSchema {
  cats: Cat[];
  isLoading: boolean;
  error: string | null;
}
