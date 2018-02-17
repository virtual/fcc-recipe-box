import React, {Component} from 'react';
import Ingredient from './Ingredient';
import IoTrash from 'react-icons/lib/io/trash-a';
import IoEdit from 'react-icons/lib/io/edit';
var axios = require('axios');

class DisplayRecipe extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      edit: false
    }
    this.removeRecipe = this.removeRecipe.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  removeRecipe(event) {
    if (window.confirm('Delete the recipe?')) {
      axios.post('/deleteRecipe', {id: this.state.id}).then((res) => {
        if (res.status === 200) {   
          this.props.getRecipes();
        }  else {
          console.log('delete unsuccessful');
        }
      }); 
    }
  }

  handleSaveClick() {
    // I think make methods in parent, call down as props and update on save
    this.setState({
      edit: false
    })
  }
  handleCancelClick() {
    this.setState({
      edit: false
    })
  }

  handleEditClick() {
    this.setState({
      edit: true
    })
  }

  componentDidMount() {
    if (this.state.id === null) { 
    this.setState({
      id: this.props.id 
    })
  }
  }
    render() {
        var ingredients = this.props.ingredients;

        let photo = this.props.picture;
        let directions = this.props.directions;
        let ignoreIds = 'a065a04cd4f815dca0f22476d225a051f9bd06c4302fe4019c25a062649475ca61ad5fb1d075a05081ed06c4302fe4019ad5a051ccbd06c4302fe4019bf';
        let deleteButton = '';
        if (ignoreIds.indexOf(this.props.id) === -1 ) {
          deleteButton =   <div className="buttonOptions">
            <button title="Delete recipe" onClick={this.removeRecipe} value={this.props.id} type="button" className="close" aria-label="Delete">
              <span aria-hidden="true"><IoTrash /></span>
            </button>
            <button title="Edit recipe" onClick={this.handleEditClick} value={this.props.id} type="button" className="close" aria-label="Edit">
              <span aria-hidden="true"><IoEdit /></span>
            </button> 
            
          </div>;
        }

        let ingredientHTML = '', ingredientHeader = '', ingredientsUL = '';
        ingredientsUL= <ul>
        {ingredients.map((content, index) => {
        return <Ingredient edit={this.state.edit} key={index} name={content.name} />;
        })} </ul>;

        if (ingredients.length > 0) {
          ingredientHeader =  <h3>Ingredients</h3>;
          ingredientHTML = ingredientsUL;
        }

        if (this.state.edit) {
          return (
            <div className='card'>
              <div className="recipe-form">
                <div className="card-block">
                  <div className="card-content">
                    {ingredientHeader}
                    {ingredientHTML}
                    <h3>Directions</h3>
                    <textarea>{directions}</textarea><br/>
                    <label for="imgtitle">Title: </label><input id="title" value={this.props.title} /><br/>
                    <label for="imgsrc">Source: </label><input id="imgsrc" value={this.props.picture} /><br/>
                    <button className="btn btn-success" onClick={this.handleSaveClick} >Save changes</button>
                    <button className="btn btn- btn-danger " onClick={this.handleCancelClick}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          )
        } else { 
        return (
            <div className='card'>
                
              {deleteButton}
                <div className="recipe-form">
                    {photo.length > 0 &&
                        <img className='card-img-top img-fluid' src={this.props.picture} alt={this.props.title}/>
                    }
                    <div className="card-block">
                        <h2 className="card-title">{this.props.title}</h2>
                        <div className="card-content">
                          {ingredientHeader}
                          {ingredientHTML}
                          <h3>Directions</h3>
                          <p className="card-text">{directions}</p>
                          </div>
                    </div>
                </div>
            </div>
        );
      }

    }
}

export default DisplayRecipe;