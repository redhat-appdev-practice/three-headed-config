import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Form,
  Rating,
  Message
} from "semantic-ui-react";
import {
  addAlbum,
  editAlbum,
  getAlbum
} from "../../../../services/CatalogService";

class UpdateCatalogListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      year: "",
      label: "",
      rating: 1
    };
    this.message = null;
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let albumId = null;
    for (let param of query.entries()) {
      if (param[0] === "id") {
        albumId = +param[1];
      }
    }
    if (albumId !== null) {
      getAlbum(albumId).then(album => {
        this.setState(album);
      });
    }
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
    const funcCall = this.state.id !== null ? editAlbum : addAlbum;
    funcCall(this.state)
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
    const title =
      this.state.id !== null ? "Edit Catalog Item" : "Add Catalog Item";
    return (
      <Container>
        <Header size="large" textAlign="center">
          {title}
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
          </Form.Field>
          <Form.Field>
            <label>Rating</label>
            <Rating
              icon="star"
              rating={this.state.rating}
              maxRating={5}
              name="rating"
              onRate={this.handleRate}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default UpdateCatalogListing;
