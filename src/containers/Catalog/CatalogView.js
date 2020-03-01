import React, { Component } from 'react';
import { List, Container, Header } from 'semantic-ui-react';
import { getAlbums } from '../../services/CatalogService';

class CatalogView extends Component {
  // catalog = [
  //   {
  //     id: 0,
  //     title: 'The Velvet Underground & Nico',
  //     year: 1967,
  //     label: 'Polydor',
  //     rating: 5.0
  //   },
  //   {
  //     id: 1,
  //     title: 'White Light/White Heat',
  //     year: 1968,
  //     label: 'Polydor/Verve',
  //     rating: 5.0
  //   },
  //   {
  //     id: 2,
  //     title: 'The Velvet Underground',
  //     year: 1969,
  //     label: 'Polydor',
  //     rating: 5.0
  //   },
  //   {
  //     id: 3,
  //     title: 'Loaded',
  //     year: 1970,
  //     label: 'Warner Bros.',
  //     rating: 5.0
  //   },
  //   {
  //     id: 4,
  //     title: 'Squeeze',
  //     year: 1973,
  //     label: 'Kismet Records',
  //     rating: 1.5
  //   },
  //   {
  //     id: 5,
  //     title: 'Live MCMXCIII',
  //     year: 1993,
  //     label: 'Warner Bros.',
  //     rating: 2.0
  //   }
  // ];

  state = {
    albums: []
  }

  componentDidMount() {
    getAlbums().then(albums => {
      this.setState({albums: albums});
    })
  }

  render() {
    const albumListing = this.state.albums.map((album, index) => (
      <List.Item key={album.id}>
        <List.Content>
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

export default CatalogView;
