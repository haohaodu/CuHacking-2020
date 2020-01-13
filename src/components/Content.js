import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Content(props){
    return(
        <Container fluid={true}>
            <Row className="description justify-content-md-center py-5">
                <Col md={10}>
                    {props.children} 
                </Col>
            </Row>
        </Container>
    );
}

export default Content;