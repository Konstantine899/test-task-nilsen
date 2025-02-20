export type { CatsSchema } from "./model/types/CatsSchema";
export { catsReducer, catsAction } from "./model/slice/catsSlice";
export { fetchCats } from "./model/api/fetchCats";
export { CatsPageAsync as CatsPage } from "./ui/CatsPage/CatsPage.lazy";
