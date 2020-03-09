import React, {Component} from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import CatalogListing from './CatalogListing/CatalogListing';

class CatalogBuilder extends Component {

    addNewHandler = () => {
        this.props.history.push('/add');
    }

    render() {
        return (
            <Container>
                <Header size="large" textAlign="center">
                    Catalog Administration
                </Header>
                <Button icon color='blue' onClick={this.addNewHandler}><Icon name='plus'/> Add new</Button>
                <CatalogListing />
            </Container>
        )
    }
}

export default CatalogBuilder;