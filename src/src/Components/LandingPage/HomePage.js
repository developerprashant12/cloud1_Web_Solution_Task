import React,{useState} from "react";
import {
  Col,
  Row,
  Navbar,
  Container,
  Nav,
  Modal,
  Button,
} from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../App.css";

function HomePage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () =>{
      alert("Email sent Successfully")
  }

  return (
    <>
      <Row className="col-md-12">
        <Col md={6} className="h-full bg-black">
          {/*------- logo Section -------*/}
          <Navbar bg="transparent mt">
            <Container className="p-5">
              <Navbar.Brand href="#home">
                <img
                  src="/logo1.png"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <Nav>
                  <Nav.Link href="#home" className="circle">
                    About G-FI
                  </Nav.Link>
                  <Nav.Link href="#features" className="circle">
                    The Team
                  </Nav.Link>
                  <Nav.Link href="#pricing" className="circle">
                    The Path
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container className="p-5">
            <div className="">
              <div className="mt">
                <p className="dataglow">The GorillasFi are here</p>
                <h1 className="data">
                  G-FI <span>ARRIVING</span> IN Q2 2024
                </h1>
              </div>
              <div></div>
            </div>
          </Container>

          {/*------- logo Section -------*/}
        </Col>
        <Col md={6} className="h-full">
          <Carousel interval={2000} autoPlay>
            <div>
              <img className="image" alt="" src="/image3.jpg" />
            </div>
            <div>
              <img className="image" alt="" src="/image1.jpg" />
            </div>
            <div>
              <img className="image" alt="" src="/image2.jpg" />
            </div>
          </Carousel>
          <div className="text-right mt-2">
            <button onClick={handleShow} className="modalData">
              Click Me
            </button>

            <Modal
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={show}
              onHide={handleClose}
              animation={false}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body className="padding">
                <h1 className="datcolor">
                  GET TO KNOW ABOUT <span>OUR LAUNCH</span>
                </h1>
                <h3 className="h3"></h3>
                <span className="datcolor">
                  {" "}
                  Subscribe to our newsletter and we will send you a
                  notification about the launch of our project
                </span>

                <h3 className="h3"></h3>
                <form>
                  <input type="email" placeholder="Your Email" required />
                  <Button className="buttonDatas" onclick={handleClick}>Submit</Button>
                </form>
              </Modal.Body>
            </Modal>
          </div>
        </Col>
      </Row>
    </>
  );
}



export default HomePage;
