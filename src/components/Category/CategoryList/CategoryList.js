import React from 'react';
import { Tree, Button } from "antd";
import './CategoryList.scss';
import _ from 'lodash';

const { TreeNode } = Tree;

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  checkHavingChildrent(id) {
    for(let i =0; i < data.length; i++){
      if(_.isEqual(data[i].Father, id)) return true;
    }
    return false;
  }
  renderChildrents(fatherId) {
    var arr = [];
    data.forEach((item)=>{
      if(_.isEqual(item.Father, fatherId)){
        if(this.checkHavingChildrent(item.Id)){
          arr.push (
            <TreeNode title = {item.Name} key= {item.Id}>
              {this.renderChildrents(item.Id)}
            </TreeNode>
          )
        }else{
          arr.push (
            <TreeNode title = {item.Name} key= {item.Id}/>
          )
        }
      }
    })
    return arr;
  }
  renderRootOfCategory(data) {
    var arr = [];
    data.forEach((item)=>{
      if(_.isEqual(item.Father, '') && this.checkHavingChildrent(item.Id)){
        arr.push(
          <TreeNode title = {item.Name} key= {item.Id}>
            {this.renderChildrents(...item.Id)}
          </TreeNode>
        )
      }else if(_.isEqual(item.Father, '')){
        arr.push(<TreeNode title = {item.Name} key = {item.Id} />);
      }
    })
    return arr;
  }

  render() {
    return (
      <div className="category-list">
        <div className="actions-wrapper">
          <Button className="remove-btn">Xóa</Button>
          <Button type="primary">Sửa</Button>
        </div>
        <div className="body-content">
          <Tree showLine>
            {this.renderRootOfCategory(data)}
          </Tree>
        </div>
      </div>
    )
  }
}
export default CategoryList;

const data = [
  {
    Id: '1',
    Name: 'category 1',
    Father: ''
  },
  {
    Id: '2',
    Name: 'category 2',
    Father: ''
  },
  {
    Id: '3',
    Name: 'category 3',
    Father: '1'
  },
  {
    Id: '4',
    Name: 'cateogry 4',
    Father: '3'
  },
  {
    Id: '5',
    Name: 'cateogry 5',
    Father: '1'
  },
  {
    Id: '6',
    Name: 'cateogry 6',
    Father: '1'
  },
  {
    Id: '7',
    Name: 'cateogry 7',
    Father: '2'
  },
  {
    Id: '8',
    Name: 'cateogry 8',
    Father: '7'
  },
  {
    Id: '9',
    Name: 'cateogry 9',
    Father: '7'
  },
  {
    Id: '10',
    Name: 'cateogry 10',
    Father: ''
  }

]