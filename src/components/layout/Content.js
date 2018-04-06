import React, { Component, Fragment, } from 'react';
import Navbar from './Navbar';

export default class Content extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <Navbar />
            
                {this.props.children}
            </Fragment>
        );
    }
}