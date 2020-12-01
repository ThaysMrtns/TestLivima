import React from "react"
import PropTypes from "prop-types"
import {PageHeader, Button, Descriptions} from 'antd';
import 'antd/dist/antd.css';

class Header extends React.Component {
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
              //<Button href="" formMethod="delete">Sair</Button>
            ]}
          >
          </PageHeader>
      </React.Fragment>
    );
  }
}
export default Header
