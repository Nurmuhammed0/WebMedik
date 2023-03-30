import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
// import {useParams} from 'react-router-dom'
import Slider from './Slider'

export default function All(props) {
  const[add]=useState([])
  // let{id}=useParams()
  // useEffect(()=>{

  // })
  return (
    <div>
      <Row>
        <Col>
          <Slider name={add}/>
        </Col>
      </Row>

    </div>
  )
}
