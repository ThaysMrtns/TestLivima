import React from "react"
import PropTypes from "prop-types"
import {PageHeader, Button, Descriptions} from 'antd';
import 'antd/dist/antd.css';

class HelloWorld extends React.Component {
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
              <Button key="1" type="primary">
                Entrar
              </Button>,
            ]}
          >
          </PageHeader>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
