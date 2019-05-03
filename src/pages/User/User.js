import React from 'react';
import { Tabs, Button, Icon, Table } from 'antd';
import './User.scss';



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
    title: 'PhoneNumber',
    dataIndex: 'PhoneNumber',
    key: 'PhoneNumber'
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email'
  },
  {
    title: 'Birthday',
    dataIndex: 'Birthday',
    key: 'Birthday'
  },
  {
    title: 'Gender',
    dataIndex: 'Gender',
    key: 'Gender'
  },
  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'Address'
  },
  {
    title: 'Actions',
    key: 'Actions',
    dataIndex: 'Actions',
    render: () => (
      <div className="actions-wrapper">
        <Button type = "primary" ghost>
          <Icon type="edit" />
        </Button>
        <Button type="danger" ghost>
          <Icon type="delete" />
        </Button>
      </div>
    )
  }
]
class User extends React.Component {
  render() {
    return (
      <div className="user-page">
        <div className="table-operations">
          <Button type="primary" ghost>
            <Icon type="plus" />
          </Button>
        </div>
        <Table
          columns = {columns}
          dataSource = {data}
          pagination = {false}
        >

        </Table>
      </div>
    )
  }
}

export default User;

const data = [
  {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  },
  {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  },
  {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  },
  {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  },
  {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  },
  {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  },
  {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  }, {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  },
  {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  },
  {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  },
  {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  },
  {
    Id: '1',
    Name: 'John Brown',
    Birthday: 1995,
    Address: 'hcm',
    Gender: 'male',
    PhoneNumber: '0123985423',
    Email: 'vqtuan@gmail.com'
  }

]