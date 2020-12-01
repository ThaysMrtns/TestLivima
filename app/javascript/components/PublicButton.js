import React from "react"
import PropTypes from "prop-types"
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

class PublicButton extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button type="primary">
          Criar time
        </Button>
      </React.Fragment>
    );
  }
}

export default PublicButton
