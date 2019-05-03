import actionTypes from '../../store/ActionTypes';


export const collapseMenuSideBar = (isCollapsed)=>(dispatch)=>{
  dispatch(
    {
      type: actionTypes.COLLAPES_MENU_SIDE_BAR,
      isCollapsed
  })
}