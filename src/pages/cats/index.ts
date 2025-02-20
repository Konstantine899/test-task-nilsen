export type { ICatsSchema } from "./model/types/ICatsSchema";
export { catsReducer, catsAction } from "./model/slice/catsSlice";
export { fetchCats } from "./model/api/fetchCats";
export { CatsPageAsync as CatsPage } from "./ui/CatsPage/CatsPage.lazy";
