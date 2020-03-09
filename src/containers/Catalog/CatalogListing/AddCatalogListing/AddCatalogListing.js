import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Form,
  Rating,
  Message
} from "semantic-ui-react";
import { addAlbum } from "../../../../services/CatalogService";

class AddCatalogListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      label: "",
      rating: 1
    };
    this.message = null;
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeYear = e => {
    this.setState({ year: +e.target.value });
  };

  handleRate = (e, { rating, maxRating }) => {
    this.setState({ rating: rating });
  };

  handleSubmit = () => {
    console.log(this.state);
    addAlbum(this.state)
      .then(response => {
        this.message = null;
        this.props.history.push("/");
      })
      .catch(err => {
        this.message = (
          <Message negative>
            <Message.Header>Submission Failed</Message.Header>
            <p>{err.message}</p>
          </Message>
        );
      });
  };

  render() {
    return (
      <Container>
        <Header size="large" textAlign="center">
          Add Catalog Item
        </Header>
        {this.message}
        <Form onSubmit={this.handleSubmit}>
          <Form.Field required>
            <label>Album Title</label>
            <input
              placeholder="Album Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Year</label>
            <input
              placeholder="1970"
              name="year"
              type="number"
              value={this.state.year}
              onChange={this.handleChangeYear}
            />
          </Form.Field>
          <Form.Field required>
            <label>Label</label>
            <input
              placeholder="Verve"
              name="label"
              value={this.state.label}
              onChange={this.handleChange}
            />
            />
          </Form.Field>
          <Form.Field>
            <label>Rating</label>
            <Rating
              icon="star"
              defaultRating={1}
              maxRating={5}
              name="rating"
              value={this.state.rating}
              onRate={this.handleRate}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default AddCatalogListing;
