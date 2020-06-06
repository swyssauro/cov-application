import React from 'react';
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
            <div>
                <h1>COVID19 - TODAS REGIÕES</h1>
                <ul className="container">
                    {this.state.paises.map((item, index) => (
                        <li className="wrapper" key={index}>
                            <h2>{item.country}</h2>
                            <p>Casos: {item.cases}</p>
                            <p>Casos hoje: {item.todayCases}</p>
                            <p>Mortes: {item.deaths}</p>
                            <p>Recuperados: {item.recovered}</p>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}
export default Modulo