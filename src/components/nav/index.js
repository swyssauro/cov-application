import React from 'react';

import './styles.css'
import '../styles/default.css'
import { FaGithub } from 'react-icons/fa';
import { FiKey } from 'react-icons/fi';


class Nav extends React.Component {

    render() {
        return (
            <>
                <div className="nav-main">
                    <a href="/"><h1 className="tittle-st"><FiKey /></h1></a>
                    <ul className="nav-wrapper warp2">
                        <li><a href="/">why cov_</a></li>
                        <li><a href="/">explore</a></li>
                    </ul>
                    <ul className="nav-wrapper">
                        <li><a href="https://github.com/swyssauro"><FaGithub size="25" /></a></li>
                    </ul>
                </div>
            </>
        )
    }
}
export default Nav