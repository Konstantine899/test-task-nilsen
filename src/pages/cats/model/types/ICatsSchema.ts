import { ICat } from "pages/cats/model/types/ICat";

export interface ICatsSchema {
  cats: ICat[];
  isLoading: boolean;
  error: string | null;
}
