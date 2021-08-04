import { ADD_TODO, RESTRICTED_WORD_CLOSE_ALERT, RESTRICTED_WORD_OPEN_ALERT } from "../contants";
import { ITodo } from "../interfaces";
import { BaseAction } from "./BaseAction";

export interface IAddTodo extends BaseAction<ITodo> { }
export interface IRestrictedWord extends BaseAction<{}> { }


let todoId: number = 1;
export const addTodo: (text: string) => IAddTodo = (text) => ({
    type: ADD_TODO,
    payload: { id: todoId++, text, completed: false }
});

export const restrictedWordOpenAlert: () => IRestrictedWord = () => ({
  type: RESTRICTED_WORD_OPEN_ALERT,
  payload: {}
})

export const restrictedWordCloseAlert: () => IRestrictedWord = () => ({
  type: RESTRICTED_WORD_CLOSE_ALERT,
  payload: {}
})