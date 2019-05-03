import React from 'react';
import { connect } from "react-redux";
import { Layout, Icon } from "antd";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import './Header.scss';
import * as CollapseMenuSideActions from './action';
const {Header} = Layout;

class AdminHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCollaped: false
    }
  }
  static getDerivedStateFromProps(props, state){
    const {isMenuSideExpanded} = props;
    if(isMenuSideExpanded !== state.isCollaped){
      return {
        isCollaped: isMenuSideExpanded
      }
    }else{
      return null;
    }
  }
  render() {
    return (
      <Header 
        style={{ background: '#fff', padding: '0 15px', display: 'flex' }}
      >
        {/* <Icon
          className="trigger"
          type={this.state.isCollaped ? 'menu-unfold' : 'menu-fold'}
          onClick={() =>this.props.onCollapse(!this.state.isCollaped)}
        /> */}
        <div className="expanded-logo">
          <FontAwesomeIcon icon="bars"
            onClick={() =>this.props.onCollapseMenuSideBar(!this.state.isCollaped)}
          />
        </div>
      </Header>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isMenuSideExpanded: state.CollapseMenuSideBarReducer.isCollapsed 
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onCollapseMenuSideBar: (isCollaped)=>{
      dispatch(CollapseMenuSideActions.collapseMenuSideBar(isCollaped))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);