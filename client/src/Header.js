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
                                <a id='add-recipe' href='#' data-toggle="modal" data-target="#exampleModal">Add Recipe</a>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}