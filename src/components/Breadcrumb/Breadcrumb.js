import React from 'react';
import { Breadcrumb, Icon } from "antd";
import * as Constants from '../../constants/constants';

class AdminBreadcrumb extends React.Component {
  render(){
    return (
      <Breadcrumb style={{ margin: '16px 0', fontSize: 18}}>
        <Breadcrumb.Item>
          <Icon type="home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {window.location.pathname.replace('/', '')}
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default AdminBreadcrumb;