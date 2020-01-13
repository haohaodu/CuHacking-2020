import React from 'react';

import Card from '../components/Card';

import twitter from '../assets/images/twitter.png';
import google from '../assets/images/google.png';
import react from '../assets/images/react.png';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Tweepy',
                    subTitle: 'Python library for accessing the Twitter API.',
                    imgSrc: twitter,
                    link: 'https://www.tweepy.org/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Google Cloud Platform',
                    subTitle: 'Natural Language API.',
                    imgSrc: google,
                    link: 'https://cloud.google.com/natural-language/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'React',
                    subTitle: 'JavaScript library for building user interfaces.',
                    imgSrc: react,
                    link: 'https://reactjs.org/',
                    selected: false
                }

            ]
        }
    }

    handleCardClick = (id, card) => {
        let items= [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        // go to item with same id as clicked card, toggle selected property
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return(
            <Container>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;