import React from 'react';
import { Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Products from './Products'

const card1 = Products.cards1

export default function Cards() {
  return (
    <div className='cardiv1'>
      {card1 && card1.map((a)=>{
        return (
            <Card className='divcard1'>
              <Card.Img variant="top" className='img' src={a.img1} />
              <Card.Body>
                <Card.Title>{a.title1}</Card.Title>
                <Card.Text>{a.text1}</Card.Text>
                <Button as={Link} to={`/ab/${a.id}`} variant="primary">{a.button1}</Button>
              </Card.Body>
            </Card>
        );
      })}
    </div>
  )
}
