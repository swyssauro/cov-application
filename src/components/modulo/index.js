import React from 'react';
import './styles.css';
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
                <br />
                <div className="container-primary">
                    <div className="container container-grid">
                        {this.state.paises.map((item, index) => (
                            <div className="p-nov" key={index}>
                                <h2 className="tittle-h1">{item.country}</h2>
                                <p>cases <b>{item.cases}</b>  todayCases <b>{item.todayCases}</b></p>
                                <p>deaths <b>{item.deaths}</b> recovered <b>{item.recovered}</b></p>
                            </div>
                        ))}
                    </div>
                </div>

            </>
        );
    }
}
export default Modulo