import { MSG_LIST_SUCCESS } from "../types/home";

const initialState = {
  messages: [],
};

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case MSG_LIST_SUCCESS: {
      const data = action.body;
      return { messages: data };
    }
    default:
      return state;
  }
}
