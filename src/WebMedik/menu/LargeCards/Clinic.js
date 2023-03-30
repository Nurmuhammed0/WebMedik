import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Stars1 from './Stars1';
import products from '../../Products';

// let stars1 = <stars1 />

function Clinic() {
  return (
    <div className="clinic-div">
      <Row>
      {products.cards3.map((c)=>(
        <Col lg={3} md={4} sm={6} xl={2} key={c.id}> 
            <Card className='clinic-card'>
              {/* <div className='clinic-div2'> */}
                <Card.Img className='clinic-img' src={c.img3} />
              {/* </div> */}
              <Card.Body>
                <Card.Text>{<Stars1 />}</Card.Text>
                <Card.Title>{c.title3}</Card.Title>
              </Card.Body>
            </Card>
        </Col>
        ))}
      </Row>
    </div>
  );
}

export default Clinic;