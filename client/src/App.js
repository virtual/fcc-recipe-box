import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Homepage';
var axios = require('axios');

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipelist: null,
      modalClass: 'hide',
      message: ''
    }
    this.getRecipes = this.getRecipes.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  getRecipes(searchquery) {
    searchquery = searchquery || null;
    return new Promise((resolve, reject) => {
      axios.post('/recipes', { query: searchquery }).then((res) => {
        if (res !== undefined) {
          this.setState({
            recipelist: res.data
          });
          resolve(res.data);
        } else {
          reject("undefined");
        }
      }, function (err) {
        reject(err);
      });
    });
  };

  handleAddClick() {
    this.setState({
      modalClass: 'show'
    });
  }

  handleCloseClick() {
    this.setState({
      modalClass: 'hide'
    });
  }

  saveRecipe(varRecipe) {

    if (varRecipe.title && varRecipe.directions) {
      axios.post('/saveRecipe', varRecipe).then((newRecipe) => {
        if (newRecipe.status === 200) {
        } else {
          console.log('save unsuccessful');
        }
      });

      this.getRecipes();
      this.setState({
        modalClass: 'hide',
        message: ''
      });
      this.getRecipes();

    } else {
      this.setState({
        message: 'Title and directions are required'
      });
    }
  }
  updateRecipe(data, id) {
    axios.post('/updateRecipe/' + id, data).then((res) => {
      if (res.status === 200) {
        this.getRecipes();
      } else {
        console.log('save unsuccessful');
      }
    });
  }
  componentDidMount() {
    if (this.state.recipelist === null) {
      this.getRecipes();

    }
  }

  render() {


    if (this.state.recipelist) {
      return (
        <div>
          <Router>
            <div>
              <nav>
                <a href="https://github.com/virtual/fcc-recipe-box"><img className="forkimg" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" /></a>
                <Header />
              </nav>
              <Route exact path="/" render={() => <Homepage message={this.state.message} handleAddClick={this.handleAddClick} handleCloseClick={this.handleCloseClick} saveRecipe={this.saveRecipe} modalClass={this.state.modalClass} recipelist={this.state.recipelist} getRecipes={this.getRecipes} updateRecipe={this.updateRecipe} />} />


              <Footer />
            </div>
          </Router>
        </div>
      )
    } else {
      return (
        <div>Loading....</div>
      )
    }
  }
}