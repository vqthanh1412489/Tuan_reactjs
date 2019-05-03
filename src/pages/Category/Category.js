import React from 'react';
import { Tabs, Button, Icon, Table } from 'antd';
import _ from 'lodash';
import CategoryList from '../../components/Category/CategoryList';
import CategoryAdding from '../../components/Category/CategoryAdding';

const TabPane = Tabs.TabPane;
const columns = [
  {
    title: 'Id',
    dataIndex: 'Id',
    key: 'Id',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Actions',
    key: 'Actions',
    dataIndex: 'Actions',
    render: () => (
      <div className="actions-wrapper">
        <Button type="primary" ghost>
          <Icon type="edit" />
        </Button>
        <Button type="danger" ghost>
          <Icon type="delete" />
        </Button>
      </div>
    )
  }
]

class Category extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalAddingNewCateOpening: false
    }
    this.onHandleModalAddingNewOne = this.onHandleModalAddingNewOne.bind(this);
  }

  onHandleModalAddingNewOne(value){
    if(!_.isEqual(value, this.state.isModalAddingNewCateOpening) && _.isBoolean(value)){
      this.setState({
        isModalAddingNewCateOpening: value
      })
    }
  }

  render() {
    return (
      <div className="category-page">
        <Tabs defaultActiveKey="1">
          <TabPane tab="DANH SÁCH LOẠI SP" key="1">
            <CategoryList/>
          </TabPane>
          <TabPane tab="THÊM LOẠI SP" key="2">
            <CategoryAdding/>
          </TabPane>
        </Tabs>

        {/* <AddNewCategoryModal
          onHandle = {this.onHandleModalAddingNewOne}
          visible = {this.state.isModalAddingNewCateOpening}
        />
        <div className="table-operations">
          <Button type="primary" ghost = {true}
            onClick = {()=>{this.setState({isModalAddingNewCateOpening: !this.state.isModalAddingNewCateOpening})}}
          >
            <Icon type="plus" />
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        >

        </Table> */}
      </div>
    )
  }
}
export default Category;