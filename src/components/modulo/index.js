import React from 'react';
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
                   <div className="container">
                        {this.state.paises.map((item, index) => (
                            <div className="p-nov" key={index}>
                                    <h2 className="tittle-h1">{item.country}</h2>
                                    <p>{item.cases}</p>
                                    <p>{item.todayCases}</p>
                                    <p>{item.deaths}</p>
                                    <p>{item.recovered}</p>
                            </div>
                        ))}
                   </div>
                   
            </>
        );
    }
}
export default Modulo