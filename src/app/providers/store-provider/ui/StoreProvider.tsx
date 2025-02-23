import React, {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/store-provider/config/store";
import {IStateSchema} from "app/providers/store-provider/config/IStateSchema";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: IStateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState!);

  return <Provider store={store}>{children}</Provider>;
};
