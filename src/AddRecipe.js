import React, { Component } from 'react';

export default class AddRecipe extends Component {
  render() {
    return (
      <div className="recipe-form recipe-add">
        <form className="form-horizontal" role="form">
          <fieldset>
            <legend>Add Recipe</legend>
         
             <div className="form-group row">
      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Name</label>
      <div className="col-sm-9">
        <input type="text" className="form-control" id="inputEmail3" placeholder="Recipe Title"/>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Ingredient</label>
      <div className="col-sm-9">
        <input type="text" className="form-control" id="inputPassword3" placeholder="Ingredient #1"/>
      </div>
    </div>
     <div className="form-group row">
      <label className="col-sm-3">Checkbox</label>
      <div className="col-sm-9">
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Check me out
          </label>
        </div>
      </div>
    </div> 
            
           <button type="submit" className="btn btn-primary">Add</button>
          </fieldset>
        </form>
      </div>
    );
  }

}
