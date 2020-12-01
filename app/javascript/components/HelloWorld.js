import React from "react"
import PropTypes from "prop-types"
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Texto: {this.props.greeting}
        <Button type="primary">PRESS ME</Button>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
