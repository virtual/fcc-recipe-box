import React, {Component} from 'react';

class Ingredient extends Component {
  render() {
    let li = (this.props.edit) ? <input value={this.props.name} /> : this.props.name;
        return (
            <li className='ingredient'>
                {li}
            </li>
        );
    }
}

export default Ingredient;