import PropTypes from "prop-types";
import React, { useState } from 'react';
import { Modal, Button, Form, Input, Checkbox} from 'antd';

function AddPersonTeamForm(){
  //Modal
  const [visible, setVisible] = useState(false);

  //Form
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  
  const Demo = () => {
    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <React.Fragment>
        <>
        <Button type="primary" onClick={() => setVisible(true)}>
          Adicionar pessoas ao time
        </Button>
        <Modal
          title="Adicionar pessoas"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1000}
        >
          <Form>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          </Form>
        </Modal>
      </>
      </React.Fragment>
    );
  
}

export default AddPersonTeamForm
