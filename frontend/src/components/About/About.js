import React, {Component} from "react";
import {Grid, Row , Col, Image} from "react-bootstrap";
import "./About.css";
class About extends Component{
    render(){
        return(
            <div className="about">
                <Grid>
                    <Row>
                        
                        <Col xs={12} md={3} lg={3}>
                        <Image src="https://placehold.it/150x80?text=IMAGE" rounded responsive/>
                        <p>Devid MacFadyen</p>
                        </Col>
                        <Col xs={12} md={3} lg={3}>      
                        <Image src="https://placehold.it/150x80?text=IMAGE" rounded responsive />
                        <p>Albert Decall</p>
                        </Col>
                        <Col xs={12} md={3} lg={3}>      
                        <Image src="https://placehold.it/150x80?text=IMAGE" rounded responsive />
                        <p>Alex</p>
                        </Col>
                        <Col xs={12} md={3} lg={3}>      
                        <Image src="https://placehold.it/150x80?text=IMAGE" rounded responsive />
                        <p>Aynalem</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}

export default About;