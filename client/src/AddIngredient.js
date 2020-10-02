import React, { Component } from 'react';

export default class AddIngredient extends Component {
  constructor() {
    super();
    this.addInput = this.addInput.bind(this);

    this.ingredientIterator = 1;
    this.state = {
      ingredientInput: [] //html
    }
    this.tempArr = [];
  }

  componentDidMount() {
    if (this.state.ingredientInput.length === 0) {
      this.addInput();
    }
  }

  addInput() {
    this.tempArr.push(<input
      key={"recipeing" + this.ingredientIterator}
      onChange={this.props.getIngredient}
      name="ingListItem[]"
      type="text"
      value={this.props.inputIngredients[this.ingredientIterator - 1]}
      className="ingListItem form-control"
      id={"recipeing" + this.ingredientIterator}
      placeholder={"Ingredient #" + this.ingredientIterator}
      aria-label={"Ingredient #" + this.ingredientIterator} />);

    this.setState({
      ingredientInput: this.tempArr
    })

    this.ingredientIterator = this.ingredientIterator + 1;
  }
  render() {
    return (
      <div>
        {this.state.ingredientInput}
        <button title="Add ingredient" className="btn btn-success" onClick={this.addInput}>+</button>
      </div>
    );
  }
}