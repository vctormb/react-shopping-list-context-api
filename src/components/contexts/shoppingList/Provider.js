import React, { Component } from 'react';

import { ShoppingListContext } from './ShoppingListContext';

class Provider extends Component {
    state = {
        items: []
    }

    addItem = (description) => {
        this.setState({
            items: this.state.items.concat({
                id: this.state.items.length + 1,
                description,
                checked: false,
            })
        });
    }

    checkItem = (itemId) => {
        this.setState({
            items: this.state.items.map(val => {
                if (val.id === itemId) {
                    return {
                        ...val,
                        checked: !val.checked,
                    }
                }

                return val;
            }),
        });
    }

    removeItem = (itemId) => {
        this.setState({
            items: this.state.items.filter(x => x.id !== itemId)
        });
    }

    render() {
        return (
            <ShoppingListContext.Provider value={{
                state: { ...this.state, },
                actions: {
                    addItem: this.addItem,
                    checkItem: this.checkItem,
                    removeItem: this.removeItem,
                },
            }}>
                {this.props.children}
            </ShoppingListContext.Provider>
        );
    }
}

export default Provider;