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
      title: null,
      picture: null,
      directions: null,
      ingredients: null,
      edit: false
    }
    this.removeRecipe = this.removeRecipe.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
    this.handlePictureInputChange = this.handlePictureInputChange.bind(this);
    this.handleDirectionsInputChange = this.handleDirectionsInputChange.bind(this);
    this.handleIngInputChange = this.handleIngInputChange.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updatePicture = this.updatePicture.bind(this);
    this.updateDirections = this.updateDirections.bind(this);
    this.updateIng = this.updateIng.bind(this);
  }

  handleTitleInputChange(e) {
    if (e.target.value !== this.state.title) { this.updateTitle(e); }
  }  
  handlePictureInputChange(e) {
    if (e.target.value !== this.state.picture) { this.updatePicture(e); }
  }
  handleDirectionsInputChange(e) {
    if (e.target.value !== this.state.directions) { this.updateDirections(e); }
  }
  handleIngInputChange(e) {
    console.log(e.target.id)
    this.updateIng(e, e.target.id)
  }
  updateTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  updatePicture(e) {
    this.setState({
      picture: e.target.value
    })
  }
  updateDirections(e) {
    this.setState({
      directions: e.target.value
    })
  }
  updateIng(e, id) {
    let ingredients = this.state.ingredients;
    ingredients[id] = {name: e.target.value, _id: ingredients[id]._id }; // update changed ing
    this.setState({
      ingredients: ingredients
    })
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
    let data = {
      id: this.state.id,
      title: this.state.title,
      picture: this.state.picture,
      directions: this.state.directions,
      ingredients: this.state.ingredients
    }
    this.props.updateRecipe(data, data.id);
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
      id: this.props.id,
      title: this.props.title,
      picture: this.props.picture,
      directions: this.props.directions,
      ingredients: this.props.ingredients

    })
  }
  }
    render() {
      if (this.state.id) {
        var ingredients = this.state.ingredients;

        let photo = this.state.picture;
        let directions = this.state.directions;
        let ignoreIds = 'a065a04cd4f815dca0f22476d225a051f9bd06c4302fe4019c25a062649475ca61ad5fb1d075a05081ed06c4302fe4019ad5a051ccbd06c4302fe4019bf';
        let deleteButton = '';
        if (ignoreIds.indexOf(this.state.id) === -1 ) {
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
        return <Ingredient id={index} handleIngInputChange={this.handleIngInputChange} edit={this.state.edit} key={index} name={content.name} />;
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
                    <textarea onChange={this.handleDirectionsInputChange}  value={directions}/><br/>
                    <label htmlFor="imgtitle">Title: </label><input onChange={this.handleTitleInputChange} id="title" value={this.state.title} /><br/>
                    <label htmlFor="imgsrc">Source: </label><input onChange={this.handlePictureInputChange}  id="imgsrc" value={this.state.picture} /><br/>
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
                        <img className='card-img-top img-fluid' src={this.state.picture} alt={this.state.title}/>
                    }
                    <div className="card-block">
                        <h2 className="card-title">{this.state.title}</h2>
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
   else {
      return ( <p>Loading... </p>)
    }
  }
}

export default DisplayRecipe;