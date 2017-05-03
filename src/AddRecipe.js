import React, {Component} from 'react';

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.ClickRecipeAdd = this.ClickRecipeAdd.bind(this);
     this.state = ({
      inputTitle: '',
      inputIngredients: [],
      inputPicture: '',
      inputDirections: ''
    });
  }
  render() {
    return (
      <div>

        <div
          className={"modal fade " + this.props.modalClass}
          id="add-recipe-modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add new recipe</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                <div className="form-group row">
                  <label htmlFor="recipename" className="col-sm-3 col-form-label">Name</label>
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
                    <input
                     onChange={this.getIngredient.bind(this)}
                      type="text"
                      className="form-control"
                      id="recipeing01"
                      placeholder="Ingredient #1"/>
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
              <div className="modal-footer">
                <button type="submit" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" id="addRecipe" className="btn btn-primary" onClick={this.ClickRecipeAdd}>Add recipe</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
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
   var obj = { "name": e.target.value, "amount": "1"};
    
   ing.push(obj);
      this.setState({
        inputIngredients: ing
      });
    }


  ClickRecipeAdd (event) {
    event.preventDefault();
   //  var input = React.findDOMNode(this.refs.inputPassword3)
   // ice cream pic: http://i.imgur.com/gpILgEY.jpg
   let recipelist = this.props.recipelist;
  // console.log(this.state.ingredients);
  // picture, directions
    let varRecipe = {
      picture:  this.state.inputPicture, title: this.state.inputTitle, ingredients: this.state.inputIngredients, directions:  this.state.inputDirections
    };
 //   console.log(recipelist);
  //  console.log(varRecipe);
    (recipelist).push(varRecipe);
    
    //this.props.onUpdate(recipelistUpdated)
     

    //console.log(recipelist);
    localStorage.setItem("_recipeslist01", JSON.stringify(recipelist));

    //jQuery('#add-recipe-modal').modal('hide');

    //localStorage.removeItem("_recipeslist01");
  }

  
}
