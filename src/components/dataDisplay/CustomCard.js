import React, { Component } from 'react';


import { Card, CardTitle, CardBody, Container, } from 'reactstrap';

class CustomCard extends Component {
    state = {}

    render() {
        const props = this.props;

        return (
            <Container>
                <Card>
                    {
                        props.title && <CardBody>
                            <CardTitle>{props.title}</CardTitle>
                        </CardBody>
                    }

                    <CardBody>
                        {props.children}
                    </CardBody>
                </Card>
            </Container>

        );
    }
}

export default CustomCard;