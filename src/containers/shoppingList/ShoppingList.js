import React, { Component, } from 'react';

import CustomCard from '../../components/dataDisplay/CustomCard';
import ItemsList from './ItemsList';
import AddItem from './AddItem';

class ShoppingList extends Component {
    state = {}

    render() {
        return (
            <CustomCard>
                <AddItem />                

                <ItemsList />
            </CustomCard>
        );
    }
}

export default ShoppingList;