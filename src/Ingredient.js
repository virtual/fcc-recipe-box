import React, {Component} from 'react';

class Ingredient extends Component {
    render() {
        return (
            <li className='ingredient'>
                {this.props.name}, {this.props.amount}
            </li>
        );
    }
}

export default Ingredient;