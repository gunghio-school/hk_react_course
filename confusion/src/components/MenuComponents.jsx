import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle
} from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { LoadingComponent } from "./LoadingComponent";

function RenderMenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />{" "}
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  console.log(props);
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <LoadingComponent />
        </div>
      </div>
    );
  } else if (props.errorMessage) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errorMessage}</h4>
        </div>
      </div>
    );
  } else {
    const menu = props.dishes.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish}></RenderMenuItem>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
  }
};

export default Menu;
