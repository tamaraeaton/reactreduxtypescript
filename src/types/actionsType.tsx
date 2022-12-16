export interface markCompleteAction {
  type: "MARK_COMPLETE";
  todo: string;
}

export interface markIncompleteAction {
  type: "MARK-INCOMPLETE";
  todo: string;
}

export interface deleteTodoAction {
  type: "DELETE_TODO";
  todo: string;
}
