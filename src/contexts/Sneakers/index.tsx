import { createContext, useReducer } from "react";
import { reducer, initialState, ContextType } from "./reducer";

export const SneakersContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

export const SneakersProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SneakersContext.Provider value={{ state, dispatch }}>
      {children}
    </SneakersContext.Provider>
  );
};
