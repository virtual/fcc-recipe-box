import React, {Component} from 'react';
import './App.css';
import AddRecipe from './AddRecipe';
import DisplayRecipe from './DisplayRecipe';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Search from './Search';
// import {Route, Router, Link} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
var axios = require('axios');

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipelist: null,
      modalClass: 'hide'
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
    console.log('ya')
    this.setState ({
      modalClass: 'show'
    });
    console.log('up')
  }

  handleCloseClick() {
    this.setState ({
      modalClass: 'hide'
    });
  }

  saveRecipe(varRecipe) {
    if (varRecipe.title) {
      axios.post('/saveRecipe', varRecipe).then((newRecipe) => {  
        if (newRecipe.status === 200) {   
          console.log('gonna get recipes from addrecipe') 
        }  else {
          console.log('save unsuccessful');
        }
      }); 
      this.getRecipes();
      this.setState({
        modalClass: 'hide'
      });
    }
  }

  componentDidMount() {
    if (this.state.recipelist === null) {
      this.getRecipes();
      
    }
  }

  render() {
    //var recipelist = JSON.parse(localStorage.getItem('recipelist')) || [];
    var recipelist = this.state.recipelist;
 
    const background = 'https://satinflame.com/img/stock/stock003.jpg';
    if (recipelist) {
      return (
        <div>
          <Router>
            <div>
              <Header/>
              <Jumbotron handleAddClick={this.handleAddClick} background={background}/>
              <Search getRecipes={this.getRecipes}/>
              <main>
                <div className='container'>
                  <div className="row">
                    <div className="card-columns">
                      {recipelist.map((item, index) => { 
                        return <DisplayRecipe
                        getRecipes={this.getRecipes}
                          key={index} 
                          id={item._id}
                          elementNo={index}
                          title={item.title}
                          picture={item.picture}
                          directions={item.directions}
                          ingredients={item.ingredients}
                          modalClass={this.state.modalClass} />
                      })}

                      <AddRecipe handleCloseClick={this.handleCloseClick} saveRecipe={this.saveRecipe} modalClass={this.state.modalClass} recipelist={this.state.recipelist} getRecipes={this.getRecipes} />
                    </div>
                  </div>
                </div>
              </main>
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