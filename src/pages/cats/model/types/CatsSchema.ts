import { ICat } from "pages/cats/model/types/ICat";

export interface CatsSchema {
  cats: ICat[];
  isLoading: boolean;
  error: string | null;
}
