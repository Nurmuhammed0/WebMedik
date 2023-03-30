import Carousel from 'react-bootstrap/Carousel';
import {Image} from 'react-bootstrap';
import Cards from './Cards';

function Carusel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image className="carusel1"
          src="https://img.freepik.com/free-photo/medical-stethoscope-with-paper-cut-family_23-2148488217.jpg?w=2000"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="carusel1"
          src="https://media-exp1.licdn.com/dms/image/C4E1BAQEFVUFW3vAWRw/company-background_10000/0/1552497459091?e=2147483647&v=beta&t=GNGdfMSSqIrRYJA7vDebUukn0EweFY4faTrVB0qFvxc"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="carusel1"
          src="https://imageio.forbes.com/specials-images/imageserve/5dbb4182d85e3000078fddae/0x0.jpg?format=jpg&width=1200"/>
      </Carousel.Item>;
      {/* <div className='carsdiv1'><Cards/></div> */}
    </Carousel>
   
  );
}

export default Carusel1;