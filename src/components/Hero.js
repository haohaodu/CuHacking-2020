import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Hero(props){
    return(
        <Jumbotron className="bg-primary jumbotron p-0">
            <Container fluid={true}>
                <Row className="justify-content-md-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4">{props.subTitle}</h3> }
                    </Col>
                </Row>
            </Container>   
        </Jumbotron>
    );
}

export default Hero;