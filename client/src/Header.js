import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className='container'>
                        <ul className='nav'>
                            <li className="title">
                                <Link to="/">Recipe Collector</Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}