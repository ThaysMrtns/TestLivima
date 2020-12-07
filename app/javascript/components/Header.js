import React from "react"
import PropTypes from "prop-types"
import {PageHeader, Button, Descriptions} from 'antd';
import 'antd/dist/antd.css';

class Header extends React.Component {
  sair = ()=> {
    console.log("sair");
    $.ajax({
        url: '/users/sign_out',
        type: 'DELETE',
        success: function(result) {
          console.log("Deslogado com sucesso!");
    }})
  }

  render () {
    return (
      <React.Fragment>
          <PageHeader
            ghost={false}
            title="My Team"
            subTitle="Gerencie seu time"
            extra={[
              <Button key="3">Sobre</Button>,
              <Button href="/users/sign_up" key="2">Cadastrar</Button>,
              <Button href="/users/sign_in" key="1" type="primary">
                Entrar
              </Button>,
              <Button onClick={this.sair}>Sair</Button>
            ]}
          >
          </PageHeader>
      </React.Fragment>
    );
  }
}
export default Header
