import Login from './Login';
import reducer from './reducer';
import { register } from "../../store/asyncReducers";
register("loginReducer", reducer);

export default Login;