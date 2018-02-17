import React, {Component} from 'react';

class Ingredient extends Component {
  render() {
    let li = (this.props.edit) ? <input id={this.props.id} onChange={this.props.handleIngInputChange} value={this.props.name} /> : this.props.name;
        return (
            <li className='ingredient'>
                {li}
            </li>
        );
    }
}

export default Ingredient;