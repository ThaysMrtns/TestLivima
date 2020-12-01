import React from "react"
import PropTypes from "prop-types"
import { Table, Tag, Space } from 'antd';
class TableFuncionarios extends React.Component {
  
  render () {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = this.props.name.map((number) => <li>{number}</li>);
   
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: nomeF => <a>{
          this.props.name[0]}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];
    
    const data = [
      {
        key: '',
        name: '',
        age: '',
        address: '',
        tags: ['nice', 'developer'],
      },
    ];
    return (
      <React.Fragment>
       <Table columns={columns} dataSource={data} />
        <ul>{doubled}</ul>
      </React.Fragment>
    );
  }
}

TableFuncionarios.propTypes = {
  name: PropTypes.string,
  cargo: PropTypes.string
};
export default TableFuncionarios
