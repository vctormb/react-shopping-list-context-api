import React, { Component } from 'react';
import {
    ListGroupItem,
    Input,
    Label,
    Button,
} from 'reactstrap';

import withShoppingList from '../../components/contexts/shoppingList/withShoppingList';

class Item extends Component {
    render() {
        const props = this.props;

        return (
            <ListGroupItem
                tag="a"
                active={props.checked}
                action
            >
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <Label check>
                            <Input
                                type="checkbox"
                                checked={props.checked}
                                onChange={() => props.shoppingList.actions.checkItem(props.id)}
                            />
                        </Label>
                        <span>{props.description}</span>
                    </div>
                    <Button size="sm" color="danger" onClick={() => props.shoppingList.actions.removeItem(props.id)}>X</Button>
                </div>
            </ListGroupItem>
        )
    }

}

export default withShoppingList(Item);