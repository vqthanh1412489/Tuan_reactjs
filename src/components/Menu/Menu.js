import React, { Component } from "react";
import { Menu, Layout, Icon } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as Constants from './../../constants/constants';
import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const {Sider} = Layout;


class MenuSide extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false
    }
    this.toNavigate = this.toNavigate.bind(this);
  }
  toNavigate(pathname){
    this.props.history.push(pathname)
  }
  render(){
    return(
      <Sider
        trigger={null}
        collapsible
        collapsed={!this.props.isMenuSideExpanded}
        >
          <div className="logo">
            <Icon type="tool" />
          </div>
          <Menu 
            theme="dark"
            mode="inline" 
            defaultSelectedKeys={[window.location.pathname]}
            >
            <Menu.Item
              key = {Constants.USERS_PATH}
              onClick = {()=>this.toNavigate(Constants.USERS_PATH)}
            >
              <Icon type="user" />
              <span className="menu-name">Users</span>
            </Menu.Item>
            <Menu.Item
              key = {Constants.CATEGORIES_PATH}
              onClick = {()=>this.toNavigate(Constants.CATEGORIES_PATH)}
            >
              <Icon type="snippets" />
              <span className="menu-name">Categories</span>
            </Menu.Item>
            <Menu.Item
              key = {Constants.PRODUCTS_PATH}
              onClick = {()=>this.toNavigate(Constants.PRODUCTS_PATH)}
            >
              <Icon type="diff" />
              <span className="menu-name">Products</span>
            </Menu.Item>
          </Menu>
        </Sider>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isMenuSideExpanded: state.CollapseMenuSideBarReducer.isCollapsed
  }
}
export default withRouter(connect(mapStateToProps)(MenuSide));