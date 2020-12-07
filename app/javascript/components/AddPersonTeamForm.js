import PropTypes from "prop-types";
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

function AddPersonTeamForm(){
  const [visible, setVisible] = useState(false);
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
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </>
      </React.Fragment>
    );
  
}

export default AddPersonTeamForm
