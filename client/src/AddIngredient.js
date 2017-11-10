import React, { Component } from 'react';

export default class AddIngredient extends Component {
  constructor() {
    super();
    this.addInput = this.addInput.bind(this);
      
      this.ingredientIterator= 1;
      this.state = {
        ingredientInput: []
      }
      
  }

  componentDidMount() {
    if (this.state.ingredientInput.length === 0) {
      let tempArr = [];
     this.addInput();
    }
  }
 
  addInput() {
    let tempArr = [];
    if (this.state.ingredientInput !== null) {
      tempArr.push(this.state.ingredientInput);
    }
    tempArr.push(<input
      key={"recipeing" + this.ingredientIterator}
      onChange={this.props.getIngredient}
      name="ingListItem[]"
      type="text"
      value={this.props.ingKeeper[this.ingredientIterator - 1]}
      className="ingListItem form-control"
      id={"recipeing" + this.ingredientIterator}
      placeholder={"Ingredient #" + this.ingredientIterator}/>);
    
    this.setState({
      ingredientInput: tempArr
    })

    this.ingredientIterator = this.ingredientIterator + 1;
    
  }
  render() {
    return (
      <div>
        {this.state.ingredientInput}
        <button onClick={this.addInput}>+</button>
       </div>
    );
  }
}