import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import AddIngredient from './AddIngredient';
var axios = require("axios");

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.clickRecipeAdd = this.clickRecipeAdd.bind(this);
    this.getIngredient = this.getIngredient.bind(this);
     this.state = ({
      inputTitle: '',
      inputIngredients: [],
      inputPicture: '',
      inputDirections: ''
    });

    this.ingKeeper=[] 
  }

  getTitle(e) {
    this.setState({
      inputTitle: e.target.value
    });
  }
  getPicture(e) {
    this.setState({
      inputPicture: e.target.value
    });
  }
  getDirections(e) {
    this.setState({
      inputDirections: e.target.value
    });
  }
getIngredient(e) {
  var ing = [];
  var obj = { "name": e.target.value};
  var inputs = document.getElementsByClassName( 'ingListItem' ),
    names  = [].map.call(inputs, function( input, i ) {
      ing.push(input.value);
        return input.value;
    });
  
  this.ingKeeper = ing; 
    this.setState({
      inputIngredients: this.ingKeeper
    });
    return this.ingKeeper
  }


clickRecipeAdd () {
// picture, directions
  let ingArr = this.state.inputIngredients;
  let ingInput = [];
  ingInput = ingArr.map((e, i) => {
    return {name: e};
  });
  let varRecipe = {
    picture:  this.state.inputPicture, 
    title: this.state.inputTitle, 
    ingredients: ingInput, 
    directions:  this.state.inputDirections
  };
 
  this.props.saveRecipe(varRecipe); 
}
 
  render() { 
    let messageHtml = '';
    if (this.props.message !== '') {
      messageHtml = <div className="warning-message">{this.props.message}</div>
    }
    return (
      <div>

        <div
          className={this.props.modalClass}
          id="add-recipe-modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="box-dialog" role="document">
            <div className="box-content">
              <div className="box-header">
                <h5 className="box-title" id="exampleModalLabel">Add new recipe</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="box-body">

                <div className="form-group row">
                  <label htmlFor="recipename" className="col-sm-3 col-form-label">Title</label>
                  <div className="col-sm-9">
                    <input
                      onChange={this.getTitle.bind(this)}
                      type="text"
                      className="form-control"
                      id="recipename"
                      placeholder="Recipe Title"/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="recipeing01" className="col-sm-3 col-form-label">Ingredient</label>
                  <div className="col-sm-9">
                  <AddIngredient inputIngredients={this.state.inputIngredients} getIngredient={this.getIngredient}/>
                  </div>
                </div>
                 
                 
                <div className="form-group row">
                  <label htmlFor="picture" className="col-sm-3 col-form-label">Picture URL</label>
                  <div className="col-sm-9">
                    <input
                     onChange={this.getPicture.bind(this)}
                      type="text"
                      className="form-control"
                      id="picture"
                      placeholder=".jpg, .png"/>
                  </div>
                </div>

                
                <div className="form-group row">
                  <label htmlFor="directions" className="col-sm-3 col-form-label">Directions</label>
                  <div className="col-sm-9">
                    <input
                     onChange={this.getDirections.bind(this)}
                      type="text"
                      className="form-control"
                      id="directions"
                      placeholder="How do you make it?"/>
                  </div>
                </div>
                 
                 

              </div>
              <div className="box-footer">
                {messageHtml}
                <button type="submit" onClick={this.props.handleCloseClick} className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" id="addRecipe" className="btn btn-primary" onClick={this.clickRecipeAdd}>Add recipe</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
 
}
export default withRouter(AddRecipe);