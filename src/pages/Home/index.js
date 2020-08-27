import React, { Component } from 'react';
import './styles.css';
import api from '../../components/api';
import Navbar from '../../components/nav';
import Footer from '../../components/Footer';

import { Container, Row, Col } from 'react-bootstrap';
import imgs from '../../components/styles/image 1.svg';

class Home extends Component {

  state = {
    covid: [],
  }

  async componentDidMount() {
    const response = await api.get('/countries/World');
    this.setState({ covid: response.data })
  }

  render() {
    const { covid } = this.state;
    return (
      <>
        <Navbar />
        <Container className="mg-b">
          <h1 className="tiitle-ops">why cov_</h1>
          <p className="descrip-ops">projeto open source para informações sobre o coronavirus</p>
          <br/>
          <Row>
            <Col>
            <div className="box-1">
              <div className="explores">explore</div>
            </div>
            </Col>
          </Row>
        </Container>
        <img className="imgs-l" src={imgs} alt="alts" />
        <Footer/>
      </>
    );
  }
}

export default Home;