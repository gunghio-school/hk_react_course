import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";


const CommentForm = (props) => {
  const [modal, setModal] = useState(false);
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !(val) || (val.length <= len);
  const minLength = (len) => (val) => val && (val.length >= len);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button onClick={toggle} outline variant="outline-primary">
        <span className="fa fa-pencil fa-lg"></span> Submit Comment
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Submit comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <Label htmlForm="rating">Rating</Label>

            <Control.select
              model=".rating"
              name="rating"
              className="form-control"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Control.select>
            <Label htmlForm="author">Your Name</Label>
            <Control.text
              model=".author"
              name="author"
              className="form-control"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15),
              }}
            ></Control.text>
            <Errors
              className="text-danger"
              model=".author"
              show="touched"
              messages={{
                required: "Required",
                minLength: "Must be > 3 characters",
                maxLength: "Must be < 15 characters",
              }}
            />
            <Label htmlForm="rating">Comment</Label>
            <Control.textarea
              rows="6"
              model=".comment"
              name="comment"
              className="form-control"
            ></Control.textarea>
          </LocalForm>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Submit comment</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CommentForm;
