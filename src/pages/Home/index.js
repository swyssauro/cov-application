import React from 'react';
import { FiArrowDownCircle } from 'react-icons/fi'
import './styles.css';

export default function Home() {
  return (
    <>
      <div className="container-home">
        <a href="#container-hoy"><FiArrowDownCircle color="#ffd670" className="arrown-icon" size="30" /></a>
      </div>
      <div id="container-hoy" className="container-hoy">
        <h3 className="title">
          <b>Coronaviruses</b> are a large group of viruses that are common among animals. In rare cases, they are what scientists call zoonotic, meaning they can be transmitted from animals to humans, according to the US Centers for Disease Control and Prevention.
        </h3>
      </div>
    </>
  );
}