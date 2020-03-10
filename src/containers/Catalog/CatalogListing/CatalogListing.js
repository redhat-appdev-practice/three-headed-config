import React, { Component } from "react";
import { List, Container, Header, Button, Icon } from "semantic-ui-react";
import { getAlbums, deleteAlbum } from "../../../services/CatalogService";
import ConfirmModal from "../../../components/Layout/Modal/ConfirmModal";

class CatalogListing extends Component {
  state = {
    albums: [],
    showModal: false,
    deleteId: null,
    deleteItem: null
  };

  componentDidMount() {
    this.reloadData();
  }

  reloadData = () => {
    getAlbums().then(albums => {
      this.setState({ albums: albums });
    });
  };

  handleEditAlbum(album) {
    const queryString = "?id=" + album.id;
    this.props.history.push({
      pathname: "/edit",
      search: queryString
    });
  }

  handleDelete(album) {
    this.setState({
      showModal: true,
      deleteId: album.id,
      deleteItem: album.title
    });
  }

  handleCancel = () => {
    this.setState({ showModal: false, deleteId: null, deleteItem: null });
  };

  handleConfirm = id => {
    deleteAlbum(id)
      .then(data => {
        this.setState({ showModal: false, deleteId: null, deleteItem: null });
        this.reloadData();
      })
      .catch(err => {
        console.error(err.message);
        this.setState({ showModal: false, deleteId: null, deleteItem: null });
        this.reloadData();
      });
  };

  render() {
    const modal = (
      <ConfirmModal
        show={this.state.showModal}
        id={this.state.deleteId}
        cancel={this.handleCancel}
        confirm={this.handleConfirm}
        item={this.state.deleteItem}
      />
    );
    const albumListing = this.state.albums.map((album, index) => (
      <List.Item key={album.id}>
        <List.Content>
          {this.props.editable && (
            <div>
              <Button
                icon
                size="small"
                floated="left"
                onClick={() => {
                  this.handleEditAlbum(album);
                }}
              >
                <Icon name="edit"></Icon>
              </Button>
              <Button
                icon
                size="small"
                floated="right"
                negative
                onClick={() => this.handleDelete(album)}
              >
                <Icon name="trash" />
              </Button>
            </div>
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
        {modal}
        <List divided relaxed>
          {albumListing}
        </List>
      </Container>
    );
  }
}

export default CatalogListing;
