import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import Card from '../components/Card';

import pizzasutra from '../assets/images/para1.jpeg';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          items: [
            {
              id: 0,
              title: "Pizza Sutra",
              subTitle: "Youtuber's Pizza Sutra of Milwaulkee Wisconsin",
              imgSrc: pizzasutra,
              link: "https://pizzasutra.com",
              selected: false
            },
            {
              id: 1,
              title: "Pizza Sutra2",
              subTitle: "Youtuber's Pizza Sutra of Milwaulkee Wisconsin",
              imgSrc: pizzasutra,
              link: "https://pizzasutra.com",
              selected: false
            },
            {
              id: 2,
              title: "Pizza Sutra3",
              subTitle: "Youtuber's Pizza Sutra of Milwaulkee Wisconsin",
              imgSrc: pizzasutra,
              link: "https://pizzasutra.com",
              selected: false
            }
          ]
        };
    }

    handleCardClick = (id, card) => {
        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
 
    render(){
        return (
          <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
          </Container>
        );
    }
}

export default Carousel;