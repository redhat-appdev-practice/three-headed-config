import React, { Component } from "react";
import { List, Container, Header, Button, Icon } from "semantic-ui-react";
import { getAlbums } from "../../../services/CatalogService";

class CatalogListing extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    getAlbums().then(albums => {
      this.setState({ albums: albums });
    });
  }

  handleEditAlbum(album) {
    const queryString = "?id=" + album.id;
    this.props.history.push({
      pathname: "/edit",
      search: queryString
    });
  }

  render() {
    const albumListing = this.state.albums.map((album, index) => (
      <List.Item key={album.id}>
        <List.Content>
          {this.props.editable && (
            <Button
              icon
              size="small"
              onClick={() => {
                this.handleEditAlbum(album);
              }}
            >
              <Icon name="edit"></Icon>
            </Button>
          )}
          <List.Header>{album.title}</List.Header>
          <List.Description>
            {album.year} - {album.label} rating: {album.rating}
          </List.Description>
        </List.Content>
      </List.Item>
    ));

    return (
      <Container>
        <Header size="medium" textAlign="center">
          Catalog View
        </Header>
        <List divided relaxed>
          {albumListing}
        </List>
      </Container>
    );
  }
}

export default CatalogListing;
