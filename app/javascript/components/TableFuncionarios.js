import React from "react"
import PropTypes from "prop-types"
import { Table, Tag, Space } from 'antd';

const columns = [
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
];

class TableFuncionarios extends React.Component {
  constructor(props) {
    super(props);
    this.addDatas = this.addDatas.bind(this);
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
        <Table columns={columns} dataSource={this.addDatas()}/>
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
