import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";


class Dishdetail extends Component {

  renderDish() {
    const selectedDish = this.props.selectedDish;
    if (selectedDish) {
      return (
        <Card>
          <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
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

  renderComments() {
    const selectedDish = this.props.selectedDish;
    if (selectedDish) {
      const comments = selectedDish.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
              .format(new Date(comment.date))}</p>
          </div>
        )
      });
      return (
        <div>
          <h2>Comments</h2>
          {comments}
        </div>

      );
    }
    return <div></div>
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className='col-12 col-md-5 m-1'>
            {this.renderDish()}
          </div>
          <div className='col-12 col-md-5 m-1'>
            {this.renderComments()}
          </div>
        </div>
      </div>
    )
  }
}

export default Dishdetail;