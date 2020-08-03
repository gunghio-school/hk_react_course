import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

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
function RenderComments({ comments }) {
  if (comments) {
    const comms = comments.map((comment) => {
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
        {comms}
      </div>
    );
  }
  return <div></div>;
}
const Dishdetail = ({ dish, comments }) => {
  console.log(dish, comments)
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish selectedDish={dish}></RenderDish>
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={comments}></RenderComments>
        </div>
      </div>
    </div>
  );
};

export default Dishdetail;
