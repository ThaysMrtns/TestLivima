import PropTypes from "prop-types";
import React, { useState } from 'react';
import { Modal, Button, Form, Input} from 'antd';

export default function AddPersonTeamForm(){
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
  
  
  const onFinish = (values) => {
    
    //fazer uma requisição da resposta para o banco de dados
    $.ajax({
      url: "/funcionarios/",
      type: 'POST',
      data: JSON.stringify(values),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: (data) => {
        console.log(`Criado com sucesso! ${data}`);
        document.location.reload(true);
      }}).error((err) => {
        console.log(`falha ao salvar, ${err}`);
    });
    //saveData(response);
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
            footer={null}
            title="Adicionar pessoas"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={1000}
          >
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Nome"
                name="nome"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Cargo"
                name="cargo"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Salário"
                name="salario"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </>
      </React.Fragment>
    );
  
}
