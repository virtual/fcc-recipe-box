import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchquery: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      searchquery: event.target.value
    })
    this.props.getRecipes(event.target.value);
  }

  render() {
    return (
      <div className="searchbox">
        <form><label htmlFor="searchquery">Search</label><input placeholder="Recipe name" onChange={this.handleChange} id="searchquery" name="searchquery" type="text"/></form>
      </div>
    );
  }
}