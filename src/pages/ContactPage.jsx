import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Col from 'react-bootstrap/Col'

function ContactPage(props){
    return(
        // anything that goes between content tags is placed between props.children
        <div>
            <Hero title={props.title} />
            <div className='grid-container'>
                <div class="card">
                    <Col div class="card-body">
                        <h5 class="card-title">Hao Hao</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Carleton University</h6>

                    </Col>
                    <Col class="card-body">
                        <h5 class="card-title">Hudson</h5>
                        <h6 class="card-subtitle mb-2 text-muted">University of Toronto</h6>
                        
                    </Col>
                    <Col class="card-body">
                        <h5 class="card-title">Tony</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Carleton University</h6>

                    </Col>
                    <Col class="card-body">
                        <h5 class="card-title">James</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Carleton University</h6>

                    </Col>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;