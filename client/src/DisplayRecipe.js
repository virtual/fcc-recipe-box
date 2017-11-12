import React, {Component} from 'react';
import Ingredient from './Ingredient';
var axios = require('axios');

class DisplayRecipe extends Component {
  constructor() {
    super();
    this.state = {
      id: null
    }
    this.removeRecipe = this.removeRecipe.bind(this);
  }

  removeRecipe(event) {
    if (window.confirm('Delete the recipe?')) {
      axios.post('/deleteRecipe', {id: this.state.id}).then((res) => {
        if (res.status === 200) {   
          console.log("successfully deleted!")
          this.props.getRecipes();
        }  else {
          console.log('delete unsuccessful');
        }
      }); 
    }
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
          deleteButton = <button title="Delete recipe" onClick={this.removeRecipe} value={this.props.id} type="button" className="close" aria-label="Delete">
            <span aria-hidden="true">&times;</span>
        </button>;
        }

        let ingredientHTML = '', ingredientHeader = '', ingredientsUL = '';
        ingredientsUL= <ul>
        {ingredients.map((content, index) => {
        return <Ingredient key={index} name={content.name} />;
        })} </ul>;

        if (ingredients.length > 0) {
          ingredientHeader =  <h3>Ingredients</h3>;
          ingredientHTML = ingredientsUL;
        }

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

export default DisplayRecipe;