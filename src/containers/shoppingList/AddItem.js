import React, { Component } from 'react';

import { InputGroup, InputGroupAddon, Button, Input, Row, Col, } from 'reactstrap';

import withShoppingList from '../../components/contexts/shoppingList/withShoppingList';

class AddItem extends Component {
    state = {
        inputValue: ''
    }

    addNewItem = () => {
        if (!this.state.inputValue) return;

        this.props.shoppingList.actions.addItem(this.state.inputValue);

        this.resetField();
    }

    resetField() {
        this.setState({
            inputValue: ''
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.addNewItem();
        }
    }

    render() {
        return (
            <Row>
                <Col lg="12">
                    <InputGroup>
                        <Input
                            value={this.state.inputValue}
                            onChange={e => this.setState({ inputValue: e.target.value })}
                            placeholder="What are you going to buy?"
                            onKeyPress={this.handleKeyPress}
                        />
                        <InputGroupAddon addonType="append">
                            <Button color="secondary" onClick={this.addNewItem}>Add</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
        );
    }
}

export default withShoppingList(AddItem);