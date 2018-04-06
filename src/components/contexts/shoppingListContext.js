import React, { Component } from 'react';

const ShoppingListContext = React.createContext({});

export default function shoppingList(Component) {
    return class extends Component {
        // AJUSTAR! COMPONENTES FILHOS NÃO DÁ RE-RENDER
        
        state = {
            items: []
        }
        
        addItem = (value) => {
            this.setState({
                items: this.state.items.concat(value)
            });
        }

        render() {
            return (
                <ShoppingListContext.Consumer>
                    {theme => <Component
                        {...this.props}
                        shoppingList={this.state}
                        addItem={this.addItem}
                    />}
                </ShoppingListContext.Consumer>
            )
        }
    }
}