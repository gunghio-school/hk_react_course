import React from "react";
import {
  Card,

  CardBody, CardImg,


  CardSubtitle,
  CardText, CardTitle
} from "reactstrap";
import { LoadingComponent } from "./LoadingComponent";

const RenderCard = ({ item, isLoading, errorMessage }) => {
  if (isLoading) {
    return <LoadingComponent />;
  } else if (errorMessage) {
    return <h4>errorMessage</h4>;
  } else {
    return (
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
};

const Home = (props) => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errorMessage={props.dishesErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
};

export default Home;
