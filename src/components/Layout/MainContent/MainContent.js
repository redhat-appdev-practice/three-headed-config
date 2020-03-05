import React from 'react';
import CatalogListing from '../../../containers/Catalog/CatalogListing/CatalogListing';
import CatalogBuilder from '../../../containers/Catalog/CatalogBuilder';

const mainContent = (props) => {
    let content;
    if (props.user && props.user.role === 'admin') {
        content = <CatalogBuilder/>
    } else {
        content = <CatalogListing/>
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default mainContent;
