import React, { Component } from 'react';
import AddRecipe from './AddRecipe';
import DisplayRecipe from './DisplayRecipe';
import Jumbotron from './Jumbotron';
//import Search from './Search';
export default class Homepage extends Component {
  constructor() {
    super(); 
    this.updateRecipe = this.updateRecipe.bind(this);
  }
  updateRecipe(data, id) {
    this.props.updateRecipe(data, id)
  } 
  render() {
    const background = 'https://satinflame.com/img/stock/stock003.jpg';
    return (
      <div>
          <Jumbotron handleAddClick={this.props.handleAddClick} background={background}/>
            <main>
              <div className='container'>
                <div className="row">
                  <div className="card-columns">
                    {this.props.recipelist.map((item, index) => { 
                      return <DisplayRecipe
                      getRecipes={this.props.getRecipes}
                        key={index} 
                        id={item._id}
                        elementNo={index}
                        title={item.title}
                        picture={item.picture}
                        directions={item.directions}
                        ingredients={item.ingredients}
                        modalClass={this.modalClass}
                        updateRecipe={this.updateRecipe} />
                    })}

                    <AddRecipe message={this.props.message} handleCloseClick={this.props.handleCloseClick} saveRecipe={this.props.saveRecipe} modalClass={this.props.modalClass} recipelist={this.props.recipelist} getRecipes={this.props.getRecipes} />
                  </div>
                </div>
              </div>
            </main>
      </div>
    );
  }
}