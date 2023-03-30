import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {TbMessages} from 'react-icons/tb'
import {IoIosContact} from "react-icons/io"
import {BiGitBranch} from 'react-icons/bi'
import products from './Products';

const a = products.cards1

export default function Futter() {
  return (
    <div>
      <div className='futter1'>
        <h2>Schedule your appointment online</h2>
        <button>Book an Appointment</button>
      </div>
      <div className='futter2'>
      
      
              <Card className='futter-div'>
              <Card.Img/><div className='futter-icon'><TbMessages/></div>
              <Card.Body>
                <Card.Title>Health Plans <br/> We Accept</Card.Title>
                <Card.Text>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you</Card.Text>
                <Button as={Link} to={`/ab/${a.id}`} variant="primary">Read More</Button>
              </Card.Body>
            </Card>
            <Card className='futter-div'>
            <Card.Img/><div className='futter-icon'><IoIosContact/></div>
            <Card.Body>
              <Card.Title>Number 1 Medical <br/> Clinic in the Area</Card.Title>
              <Card.Text>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you</Card.Text>
              <Button as={Link} to={`/ab/${a.id}`} variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card className='futter-div'>
            <Card.Img/><div className='futter-icon'><BiGitBranch/></div>
            <Card.Body>
              <Card.Title>Specialist <br/> Doctors </Card.Title>
              <Card.Text>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you</Card.Text>
              <Button as={Link} to={`/ab/${a.id}`} variant="primary">Read More</Button>
            </Card.Body>
          </Card>
      </div>
    </div>
  )
}
