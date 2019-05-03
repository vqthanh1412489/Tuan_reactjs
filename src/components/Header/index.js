import Header from './Header';
import reducer from './reducer';
import {register} from '../../store/asyncReducers';
register('CollapseMenuSideBarReducer', reducer);
export default Header;