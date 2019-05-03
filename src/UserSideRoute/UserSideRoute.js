import React from 'react';

import Home from "../pages/Home";
import Category from '../pages/Category';
import User from '../pages/User';
import NotFound from '../pages/NotFound';
import MenuSide from './../components/Menu';
import AdminHeader from '../components/Header';
import Breadcrumb from "../components/Breadcrumb";
import Product from '../pages/Product';
import { Switch, Route } from "react-router-dom";
import * as Constants from '../constants/constants';
import { Layout } from 'antd';

const { Header, Content } = Layout;

class UserSideRoute extends React.Component {
  
  render() {
    return (
      <Layout 
        style = {{height: '100vh'}}
      >
        <MenuSide/>
        <Layout>
          <AdminHeader/>
          <Content style={{ margin: '0 15px' }}
          >
            <Breadcrumb/>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route exact path={Constants.HOME_PATH} component={Home} />
                <Route path={Constants.CATEGORIES_PATH} component={Category} />
                <Route path={Constants.USERS_PATH} component={User} />
                <Route path={Constants.PRODUCTS_PATH} component={Product} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>

    )
  }
}

export default UserSideRoute;