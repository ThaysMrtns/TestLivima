import React from "react"
import PropTypes from "prop-types"
import {Alert, Table, Space, Button } from 'antd';
const { Column, ColumnGroup } = Table;

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

  deletar(id){
    $.ajax({
      url: `/funcionarios/${id}`,
      type: 'DELETE',
      dataType: "text",
      contentType: "application/json; charset=utf-8",
      success: (data) => {
        console.log(`Deletado com sucesso! ${data}`);
        document.location.reload(true);
        //Exibir um alert de sucesso
      }}).error((err) => {
        console.log(`falha ao deletar, ${err}`);
        //Exibir um alert de erro
    });
    // Recarregar página

  }

  render () {   
   return (
      <React.Fragment> 
        <Alert action={console.log("estou vivo")}
          message="Sucesso ao deletar!"
          type="success"
          showIcon
        />
        <Table dataSource={this.addDatas()}>
          <ColumnGroup>
            <Column title="Nome" dataIndex="name"/>
            <Column title="Cargo" dataIndex="cargo"/>
            <Column title="Email" dataIndex="email"/>
            <Column title="Salario" dataIndex="salario"/>
            <Column 
              title="Action" 
              dataIndex="action"
              render={(text, record) => (
                <Space size="middle">
                  <a onClick={()=>{
                    const email = record.email;
                    console.log(email);
                  }}>Contato</a>
                  <a onClick={()=>{
                    const key = record.key;
                    this.deletar(key);
                  }}>Deletar</a>
                </Space>
              )}
            />
          </ColumnGroup>
        </Table>
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
