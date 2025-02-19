import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "entities/counter";
import { StateSchema } from "app/providers/store-provider/config/StateSchema";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: StateSchema) => state.counter.value);
  const increment = () => {
    dispatch(counterAction.increment());
  };

  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;
