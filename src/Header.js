import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className='container'>
                        <ul className='nav'>
                            <li>
                                <a href='#'>Add Recipe</a>
                            </li>
                            <li>
                                <a href='#'>Search Recipes</a>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}