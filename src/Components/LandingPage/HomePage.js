import React, { useState } from "react";
import {
  Col,
  Row,
  Navbar,
  Container,
  Nav,
  Modal,
  Button,
  Card,
} from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  FaTwitter,
  FaDiscord,
  FaPlay,
  FaMusic,
  FaInstagram,
  FaSun,
} from "react-icons/fa";
import "../../App.css";

function HomePage() {
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    alert("Email sent Successfully");
  };

  const scrollToTop = () => {
    setShowData(true);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    setShowData(false);
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container fluid>
      <Row className="">
        {showData ? (
          <Col>
            <div class="innermedia__content">
              <div class="innermedia__image inner-image-1"></div>
            </div>
          </Col>
        ) : (
          <Col className="h-full bg-black">
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
                    <Nav.Link href="" className="circle" onClick={scrollToTop}>
                      About G-FI
                    </Nav.Link>
                    <Nav.Link href="" className="circle" onClick={scrollToTop}>
                      The Team
                    </Nav.Link>
                    <Nav.Link href="" className="circle" onClick={scrollToTop}>
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
                  <div className="d-flex align-items-center data2">
                    <div>
                      <h1 className="data1">
                        JOIN US IN <span>DISCORD</span>{" "}
                      </h1>
                    </div>

                    <div className="marginto">
                      <span className="icon">
                        <FaPlay />
                      </span>
                      <span className="icon1">
                        <FaTwitter />
                      </span>
                      <span className="icon1">
                        <FaDiscord />
                      </span>
                      <span className="icon1">
                        <FaMusic />
                      </span>
                      <span className="icon1">
                        <FaInstagram />
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="fixedData"
                    alt=""
                    src="https://gorillasfi.com/img/posin%20gfi2s.png"
                  />
                </div>
              </div>
            </Container>

            {/*------- logo Section -------*/}
          </Col>
        )}

        {showData ? (
          <Col className="bg-blacks example">
            <button className="modalData1" onClick={scrollToBottom}>
              &#8592; &nbsp;Go Back
            </button>
            <button onClick={handleShow} className="modalData">
              Notify Me
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
                  <Button className="buttonDatas" onclick={handleClick}>
                    Submit
                  </Button>
                </form>
              </Modal.Body>
            </Modal>

            <div className="marginTop">
              <div className="paddings">
                <img
                  className="imgData"
                  alt=""
                  src="https://gorillasfi.com/img/logo5.png"
                />
              </div>

              <h3>
                GORILLASFI IS A <span>UNIQUE PFP ABOVE ALL</span> WITH AWESOME
                SUPRISES.{" "}
              </h3>
              <p className="pr">
                But it's not only a PFP, it's a fun place to earn rewards and
                trade for cool stuff.
                <br />
                But if I'm not the same, the next question is 'Who in the world
                am I?' Ah, that's the great puzzle!
              </p>

              <div className="datap">
                <h3 className="mt-0">
                  THE <span>COLLECTION</span>{" "}
                </h3>
                <p className="para pr">
                  The Path starts with a 10k collection of fun and amazing good
                  looking GorrilasFI stylish as Fk PFP, your digital collectible
                  PFP can be used to access the platform, collect rewards and
                  interact with some of the features.
                </p>
              </div>
              <div>
                <div className="cardData">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        10K PFP NFT <br /> COLLECTION
                      </Card.Title>
                      <Card.Text>
                        Cool and fun random traits for everyone, some special 1
                        of 1's, find the one that fits your personality, and its
                        the key to unlock rewards.
                      </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src="1.jpg" />
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        10K PFP NFT <br /> COLLECTION
                      </Card.Title>
                      <Card.Text>
                        Cool and fun random traits for everyone, some special 1
                        of 1's, find the one that fits your personality, and its
                        the key to unlock rewards.
                      </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src="2.jpg" />
                  </Card>
                </div>
                <div className="cardData">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        10K PFP NFT <br /> COLLECTION
                      </Card.Title>
                      <Card.Text>
                        Cool and fun random traits for everyone, some special 1
                        of 1's, find the one that fits your personality, and its
                        the key to unlock rewards.
                      </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src="3.jpg" />
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        10K PFP NFT <br /> COLLECTION
                      </Card.Title>
                      <Card.Text>
                        Cool and fun random traits for everyone, some special 1
                        of 1's, find the one that fits your personality, and its
                        the key to unlock rewards.
                      </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src="4.jpg" />
                  </Card>
                </div>
              </div>
              <div className="datap">
                <h3 className="mt-5">
                  GORILLASFI <span>REWARDS</span> AND UTILITY{" "}
                </h3>
                <p className="para pr">
                  Unlock the potential of your Gorilla PFP NFT with a suite of
                  engaging utilities and rewards. Experience the joy of a
                  dynamic, blockchain-powered collectible, where fun, community,
                  and potential rewards come together.
                </p>
              </div>
            </div>
          </Col>
        ) : (
          <Col className="h-full">
            <Carousel interval={3000} autoPlay>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image3.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image1.jpg" />
              </div>
              <div>
                <img className="image" alt="" src="/image2.jpg" />
              </div>
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
                Notify Me
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
                    <Button className="buttonDatas" onclick={handleClick}>
                      Submit
                    </Button>
                  </form>
                </Modal.Body>
              </Modal>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default HomePage;
