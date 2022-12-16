import {
  markCompleteAction,
  markIncompleteAction,
  deleteTodoAction,
} from "./actionsType";

export type markCompleteActionCreator = (todo: string) => markCompleteAction;

export type markIncompleteActionCreator = (
  todo: string
) => markIncompleteAction;

export type deleteTodoActionCreator = (todo: string) => deleteTodoAction;
