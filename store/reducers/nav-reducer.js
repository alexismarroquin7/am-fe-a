import { NavAction } from "..";

const initialState = {
  menu: {
    open: false
  }
}

export const navReducer = (state = initialState, action) => {
  switch(action.type){
    case NavAction.MENU.OPEN:
      return {
        ...state,
        menu: {
          ...state.menu,
          open: true
        }
      }
    case NavAction.MENU.CLOSE:
      return {
        ...state,
        menu: {
          ...state.menu,
          open: false
        }
      }
    default:
      return state;
  }
}