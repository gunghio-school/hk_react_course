import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ selectedDish }) {
  if (selectedDish) {
    return (
      <Card>
        <CardImg
          width="100%"
          src={selectedDish.image}
          alt={selectedDish.name}
        />
        <CardBody>
          <CardTitle>{selectedDish.name}</CardTitle>
          <CardText>{selectedDish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}
function RenderComments({ selectedDish }) {
  if (selectedDish) {
    const comments = selectedDish.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </p>
        </div>
      );
    });
    return (
      <div>
        <h2>Comments</h2>
        {comments}
      </div>
    );
  }
  return <div></div>;
}
const Dishdetail = ({ selectedDish }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish selectedDish={selectedDish}></RenderDish>
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments selectedDish={selectedDish}></RenderComments>
        </div>
      </div>
    </div>
  );
};

export default Dishdetail;
