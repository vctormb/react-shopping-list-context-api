import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, } from 'reactstrap';

import shoppingListContext from '../../components/contexts/shoppingListContext';

class ItemsList extends Component {
    state = {}

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    renderItems() {
        console.log(this.props.shoppingList.items)

        return this.props.shoppingList.items.map((val, index) => (
            <ListGroupItem tag="button" action>{val.title}</ListGroupItem>
        ));
    }

    render() {
        return (
            <Row>
                <Col>
                    <ListGroup>
                        {this.renderItems()}
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

export default shoppingListContext(ItemsList);