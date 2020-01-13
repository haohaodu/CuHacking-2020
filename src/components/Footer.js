import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){

    return(
        <footer className="mt-5">
            <Container fluid="{true}">
                <Row className="footer border-top justify-content-between p-4">
                    <Col className="p-0" md={3} sm={12}>
                        RBC Social Media
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        HaoHao, Hudson, Tony, James
                    </Col>
                </Row>

            </Container>
        </footer>
    );

}

export default Footer;