import {Container,Nav,Navbar} from 'react-bootstrap';
import {Image} from 'react-bootstrap'
import products from './Products';

let logo = products.logo1
    
function BasicExample() {
  return (
    <div className='fixed-top navdiv'>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand>
          {logo && logo.map((b)=>{
              return<Image className='icon1' src={b.img}/>
            })}  
          </Navbar.Brand>
          <Navbar.Brand  href="#home" className='navtext brand'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text1">
              <Nav.Link href="#home" className='navtext'>Stom</Nav.Link>
              <Nav.Link href="#link" className='navtext'>hirurck</Nav.Link>
              <Nav.Link href="#home" className='navtext'>Stom</Nav.Link>
              <Nav.Link href="#link" className='navtext'>hirurck</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
    );
}

export default BasicExample;