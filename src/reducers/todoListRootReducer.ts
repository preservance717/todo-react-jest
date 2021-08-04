import { Reducer } from "redux";
import { BaseAction } from "../actions";
import { ADD_TODO } from "../contants";
import { ITodoListState } from "../interfaces";

import { addTodoReducer } from "./addTodoReducer";

export const todoListRootReducer: Reducer<ITodoListState, BaseAction<any>> = (
  state: ITodoListState = {} as ITodoListState,
  action: BaseAction<any>
): ITodoListState => {
  switch (action.type) {
      case ADD_TODO: {
          return addTodoReducer(state, action);
      }

      default:
          return state;
  };
};