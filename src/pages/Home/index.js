import React, { Component } from 'react';
import './styles.css';
import api from '../../components/api';
import Navbar from '../../components/nav';

import imgs from '../../components/styles/image 2.png';

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
          <h1 className="tiitle-ops">Opensource</h1>
          <p className="descrip-ops">Opensource Frontend for new covid19 and backend axios.</p>
          <img className="imgs-l" src={imgs} alt="alts" />
        </div>

        <h1 className="title">{covid.country}</h1>
        <p className="descrip-ops">dados no mundo sobre o novo virus</p>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="painel-nds">
                <h1 className="tils-elemt">Recoved</h1>
                <h1 className="descri-elemt"> {covid.recovered}</h1>
              </div>
            </div>
            <div className="col">
              <div className="painel-deaf">
                 <h1 className="tils-elemt">Deaths</h1>
                <h1 className="descri-elemt"> {covid.recovered}</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;