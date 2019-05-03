import React from 'react';
import './Login.scss';
import {
  Form, Icon, Input, Button, Spin, message
} from 'antd';
import { connect } from "react-redux";
import * as loginAction from './action';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isSubmited: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const {isSubmited} = state;
    const { loginPending, loginSuccess, loginError } = props;
   if(loginPending && !isSubmited){
     return {
      isSubmited: true
     }
   }
   if(loginSuccess && isSubmited){
    message.success("login successful", 0.5)
    return {
      isSubmited: false
     }
   }
   if(loginError !== '' && isSubmited){
     message.error(loginError, 0.5);
     return {
      isSubmited: false
     }
   }
   
  }


  handleLogin() {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { onLogin } = this.props;
        onLogin({ username: values.userName, password: values.password });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { loginPending } = this.props;
    return (
      <div className="login-page">
        <div className="login-from">
          <div className="logo-wrapper">
            <Icon type="user" />
          </div>
          <Spin spinning={loginPending}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <div className="input-wrapper">
                  <Input placeholder="USERNAME"
                  />
                </div>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(
                <div className="input-wrapper">
                  <Input placeholder="PASSWORD" type="password"
                  />
                </div>
              )}
            </Form.Item>
            <div className="btn-submit-wrapper">
              <Button type="primary" ghost
                onClick={() => this.handleLogin()}
              >
                Login
            </Button>
            </div>
          </Spin>
        </div>

      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    loginPending: state.loginReducer.loginPending,
    loginSuccess: state.loginReducer.loginSuccess,
    loginError: state.loginReducer.loginError,
    currentUser: state.loginReducer.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  onLogin: data => {
    dispatch(loginAction.login(data));
  }
});

const WrappedNormalLoginForm = Form.create()(Login);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);