import React from 'react';
import Header from '../../components/nav'
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import '../styles/styles.css'
import '../styles/default.css'

class Modulo extends React.Component {
    state = {
        paises: []
    };

    componentDidMount() {
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    paises: res
                });
            });
    }
    render() {
        return (
            <>
                <Header />
                   <div className="container">
                   <ul>
                        {this.state.paises.map((item, index) => (
                            <div className="p-nov">
                                <li className="wrapper painel_cov" key={index}>
                                    <h2 className="tittle-h1">{item.country}</h2>
                                    <p><FaChevronDown/> {item.cases}</p>
                                    <p><FaChevronUp/> {item.todayCases}</p>
                                    <p><FiTrendingDown/> {item.deaths}</p>
                                    <p><FiTrendingUp/> {item.recovered}</p>
                                </li>
                            </div>
                        ))}
                    </ul>
                   </div>
            </>
        );
    }
}
export default Modulo