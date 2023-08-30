import React from "react";

import { SneakersType } from "../../services/crudcrud";

type StateType = {
  data: SneakersType[];
  loading: boolean;
};

type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "finished":
      return {
        data: action.payload,
        loading: false,
      };
    case "delete":
      return {
        ...state,
        data: state.data.filter(
          (item: SneakersType) => item._id !== action.payload,
        ),
      };
    case "add":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "update":
      return {
        ...state,
        data: state.data.map((item: SneakersType) => {
          if (item._id === action.payload._id) return action.payload;
          return item;
        }),
      };
    default:
      return state;
  }
};

export const initialState = {
  data: [],
  loading: true,
};
