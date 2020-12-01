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
              <Button key="2">Cadastrar</Button>,
              <Button href="/" key="1" type="primary">
                Entrar
              </Button>,
            ]}
          >
          </PageHeader>
      </React.Fragment>
    );
  }
}
export default Header
