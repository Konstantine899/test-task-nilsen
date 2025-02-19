import { CounterSchema } from "entities/counter";
import { CatsSchema } from "pages/cats";

export interface StateSchema {
  counter: CounterSchema;
  cats: CatsSchema;
}
