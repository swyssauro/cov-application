import React, { Component } from 'react';
import './styles.css';
import api from '../../components/api';
import Navbar from '../../components/nav';

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
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="painel-r">
                <h1>{covid.cases}</h1>
              </div>
            </div>
            <div className="col">
              <div className="painel-a">
                <h1>{covid.cases}</h1>
              </div>
            </div>
            <div className="col">
              <div className="painel-c">
                <h1>{covid.cases}</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;