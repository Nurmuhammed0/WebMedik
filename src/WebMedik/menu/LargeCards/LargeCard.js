import React from 'react'
import { Card, Col,Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import products from '../../Products'
import Clinic from './Clinic'

export default function LargeCard() {
  let {id} = useParams()

  let car = Object.keys(products)
  car = car.map(g => products[g])
  car = car.reduce((p, c) => [...p, ...c], [])
  car = car.find(g => g.id === +id)
  return (
    <div align="center">
      <Row>
      <Col>
            <Card className='largecard'>
              <div className='largdiv'>
              <Card.Img style={{width:'45%',height:'400px',borderRadius:'20px',margin:'5px' }} src={car.img2}/>
                <Card.Body>
                  <Card.Title className='title2'>{car.title2}</Card.Title>
                  <Card.Text className='text2'>{car.text2}</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col> 
      </Row>
      <Clinic/>
    </div>
  )
}
