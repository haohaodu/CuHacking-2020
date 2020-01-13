import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Carousel from '../components/Carousel';

function AboutPage(props){
    return(
        // anything that goes between content tags is placed between props.children
        <div>
            <Hero title={props.title} />
            <Content>
                We primarily used the following technologies to analyse sentiments from Tweets involving RBC.  
            </Content>
            <Carousel />
        </div>
    );
}

export default AboutPage;