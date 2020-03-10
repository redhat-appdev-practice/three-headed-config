import React from "react";
import { Button, Modal } from "semantic-ui-react";

const ConfirmModal = props => {
  let show = props.show;
  return (
    <Modal open={show} closeOnEscape={false}>
      <Modal.Header>Delete Item</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete {props.item}?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={props.cancel}>Cancel</Button>
        <Button
          onClick={() => {
            props.confirm(props.id);
          }}
          negative
          icon="checkmark"
          labelPosition="right"
          content="Confirm"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmModal;
