import React from "react";

import { useForm } from "react-hook-form";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import PropTypes from "prop-types";

function PublicationCreateModal({ show, onClose, onCreate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    onCreate(data);
    reset();
  }

  const onClickClose = () => {
    onClose();
    reset();
  }

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="publication-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="title"
              {...register("title", { required: true })}
            />
            <small className="text-danger" style={{
              visibility: errors.title ? 'visible' : 'hidden'
            }}>Field required</small>
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="message"
              {...register("message", { required: true })}
            />
            <small className="text-danger" style={{
              visibility: errors.message ? 'visible' : 'hidden'
            }}>Field required</small>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          form="publication-form"
          type="submit"
        >
          Create
        </Button>
        <Button onClick={onClickClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

PublicationCreateModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default PublicationCreateModal;
