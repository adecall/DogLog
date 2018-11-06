import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./About.css";
class About extends Component {
  render() {
    return (
      <div className="about">
        <Grid>
          <Row>
            <Col xs={6} sm={3} md={3} lg={3}>
              <Image
                src="https://image.flaticon.com/icons/svg/265/265671.svg"
                rounded
                responsive
              />
              <br />
              <p2>david macfadyen</p2>
              <p2> President of Product </p2>
            </Col>
            <Col xs={6} sm={3} md={3} lg={3}>
              <Image
                src="https://image.flaticon.com/icons/svg/265/265664.svg"
                rounded
                responsive
              />
              <br />
              <p2>albert decall</p2>
              <br />
              <p3> Project Manager </p3>
            </Col>
            <Col xs={6} sm={3} md={3} lg={3}>
              <Image
                src="https://image.flaticon.com/icons/svg/265/265674.svg"
                rounded
                responsive
              />
              <br />
              <p3> alex sohn</p3>
              <br />
              <p3> IT architect </p3>
            </Col>
            <Col xs={6} sm={3} md={3} lg={3}>
              <Image
                src="https://image.flaticon.com/icons/svg/265/265667.svg"
                rounded
                responsive
              />
              <br />
              <p1>ayna getanhe</p1>
              <br />
              <p1> President of Engineering </p1>
            </Col>
          </Row>
        </Grid>
        <br />
        <br />
      </div>
    );
  }
}

export default About;
