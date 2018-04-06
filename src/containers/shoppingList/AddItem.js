import React, { Component } from 'react';

import { InputGroup, InputGroupAddon, Button, Input, Row, Col, } from 'reactstrap';

import shoppingListContext from '../../components/contexts/shoppingListContext';

class AddItem extends Component {
    state = {
        inputValue: ''
    }

    addNewItem = () => {
        this.props.addItem({
            title: this.state.inputValue,
            checked: false,
        });

        this.resetField();
    }

    resetField() {
        this.setState({
            inputValue: ''
        });
    }

    render() {
        return (
            <Row>
                <Col lg="12">
                    <InputGroup>
                        <Input
                            value={this.state.inputValue}
                            onChange={e => this.setState({ inputValue: e.target.value })}
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


export default shoppingListContext(AddItem);