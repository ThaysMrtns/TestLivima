import React from "react"
import PropTypes from "prop-types"
import { Table, Tag, Space, Button } from 'antd';

class TableFuncionarios extends React.Component {
  constructor(props) {
    super(props);
    this.addDatas = this.addDatas.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.columns = this.columns.bind(this);
  }

  columns() {
    let cols =
    [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Cargo',
        dataIndex: 'cargo',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Salario',
        dataIndex: 'salario',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          
            <Space size="middle">   
              <Button onClick={console.log("funfou 2!")}>Deleta</Button>
            </Space>
        ),
      }
    ];
    return cols;
  } 


  handleClick() {
    console.log("oi?!");
  }

  addDatas(){
    const listNames = this.props.name; //Minha lista
    const listCargos = this.props.cargo; 
    const listSalarios = this.props.salario; 
    const listEmails = this.props.email; 

    const test = Object.keys(listNames); //Contador do meu for
    const data = [];
    for (let i = 0; i < test.length; i++) {
      data.push({
        key: i,
        name: `${listNames[i]}`,
        cargo: `${listCargos[i]}`,
        email: `${listEmails[i]}`,
        salario: `${listSalarios[i]}`,
      });
    }
    return data;
  }

  render () {   
   return (
      <React.Fragment> 
        <Table columns={this.columns()} dataSource={this.addDatas()}/>
        <Button onClick={() => {console.log("funfou")}}>click</Button>
      </React.Fragment>
    );
  }
}

TableFuncionarios.propTypes = {
  name: PropTypes.array,
  cargo: PropTypes.array,
  salario: PropTypes.array,
  email: PropTypes.array
};
export default TableFuncionarios
