import { Cat } from "pages/cats/model/types/cat";

export interface CatsSchema {
  cats: Cat[];
  isLoading: boolean;
  error: string | null;
}
