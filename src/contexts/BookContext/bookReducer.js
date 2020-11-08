import { v4 as uuidv4 } from "uuid";
import * as actionTypes from "./constants";

const initialState = [];

export default (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [
        ...state,
        {
          title: action.book.title,
          auther: action.book.auther,
          id: uuidv4(),
        },
      ];
    case actionTypes.REMOVE_BOOK:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
