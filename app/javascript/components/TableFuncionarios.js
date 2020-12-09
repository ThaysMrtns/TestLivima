import React from "react"
import PropTypes from "prop-types"
import { Table, Tag, Space, Button } from 'antd';
const { Column, ColumnGroup } = Table;

class TableFuncionarios extends React.Component {
  constructor(props) {
    super(props);
    this.addDatas = this.addDatas.bind(this);
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
        render (record) {
            return(
              <Space size="middle">   
                <Button onClick={console.log("clickado")}>Deleta {record.key}</Button>
              </Space>
              
            );
        },
      }
    ];
    return cols;
  } 

  addDatas(){
    const listNames = this.props.name; //Minha lista
    const listCargos = this.props.cargo; 
    const listSalarios = this.props.salario; 
    const listEmails = this.props.email; 
    const listIds = this.props.id;

    const test = Object.keys(listNames); //Contador do meu for
    const data = [];
    for (let i = 0; i < test.length; i++) {
      data.push({
        key: `${listIds[i]}`,
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

      </React.Fragment>
    );
  }
}

TableFuncionarios.propTypes = {
  name: PropTypes.array,
  cargo: PropTypes.array,
  salario: PropTypes.array,
  email: PropTypes.array,
  id: PropTypes.array,
};
export default TableFuncionarios
