import React, {Component} from 'react';

class Recipe extends Component {
    render() {
        return (
            <li className='ingredient'>
                {this.props.name}, {this.props.amount}
            </li>
        );
    }
}

export default Recipe;