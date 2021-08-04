import { ITodoListGlobalState } from "../interfaces";
import { restrictedWordOpenAlert } from "../actions";

export const restrictMultipleEntries = (store: any) => (next: any) => (action: any) => {
  const state: ITodoListGlobalState = store.getState();

  if (state.domain.todoList.find(todo => todo.text === action.payload.text)) {
      next(restrictedWordOpenAlert());
  }
  else {
      return next(action);
  }
}