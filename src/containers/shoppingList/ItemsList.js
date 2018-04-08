import React, { Component } from 'react';
import {
    Row,
    Col,
    ListGroup,
} from 'reactstrap';

import withShoppingList from '../../components/contexts/shoppingList/withShoppingList';
import Item from './Item';

class ItemsList extends Component {
    state = {}

    renderUncheckedItems() {
        const props = this.props;

        return props.shoppingList.state.items
            .filter(x => x.checked === false)
            .map((val, index) => (
                <Item
                    key={index}
                    id={val.id}
                    description={val.description}
                    checked={val.checked}
                />
            ));
    }

    renderCheckedItems() {
        const props = this.props;

        return props.shoppingList.state.items
            .filter(x => x.checked === true)
            .map((val, index) => (
                <Item
                    key={index}
                    id={val.id}
                    description={val.description}
                    checked={val.checked}
                />
            ));
    }

    render() {
        return (
            <Row>
                <Col>
                    <ListGroup>
                        {this.renderUncheckedItems()}
                        {this.renderCheckedItems()}
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

export default withShoppingList(ItemsList);