import React, {Component} from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer'
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  getRecipes(searchquery){
    searchquery = searchquery || null;
    return new Promise((resolve, reject)=> {
      axios.post('/recipes', {query: searchquery}).then((res)=> {
        if (res !== undefined) { 
          this.setState({ 
            recipelist: res.data
          });
          resolve(res.data);
        }  else {
          reject("undefined");
        }
      }, function(err){
        reject(err);
      });
    });
  };

  handleAddClick() {
    this.setState ({
      modalClass: 'show'
    });
  }

  handleCloseClick() {
    this.setState ({
      modalClass: 'hide'
    });
  }

  saveRecipe(varRecipe, optionalId) {
    if (optionalId > 0) { 
      axios.post('/updateRecipe/'+optionalId, varRecipe).then((res) => {  
        if (res.status === 200) {   
        }  else {
          console.log('save unsuccessful');
        }
      }); 
    } 
      else {   
    if (varRecipe.title && varRecipe.directions) {
      axios.post('/saveRecipe', varRecipe).then((newRecipe) => {  
        if (newRecipe.status === 200) {   
        }  else {
          console.log('save unsuccessful');
        }
      }); 
    
      this.getRecipes();
      this.setState({
        modalClass: 'hide',
        message : ''
      });
    
    } else {
      this.setState({
        message: 'Title and directions are required'
      });
    }
  }
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
              <Header/>
              <Route exact path="/" render={()=> <Homepage message={this.state.message} handleAddClick={this.handleAddClick} handleCloseClick={this.handleCloseClick} saveRecipe={this.saveRecipe} modalClass={this.state.modalClass} recipelist={this.state.recipelist} getRecipes={this.getRecipes}  /> }/>
     
            
              <Footer/>
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