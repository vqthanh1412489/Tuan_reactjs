import actionTypes from '../../store/ActionTypes';

const initialState = {
  isCollapsed: false
};

export default function collapseMenuSideBar(state = initialState, action){
  console.log(action)
  switch(action.type){
    case actionTypes.COLLAPES_MENU_SIDE_BAR:
      return {
        ...state,
        isCollapsed: action.isCollapsed
      }
    default: return state;
  }
}

