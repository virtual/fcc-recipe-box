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
    if (window.confirm('Delete the recipe?' + this.state.id)) {
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
        
        return (
            <div className='card'>
                <button onClick={this.removeRecipe} value={this.props.id} type="button" className="close" aria-label="Delete">
                    <span aria-hidden="true">&times;</span>
                </button>

                <div className="recipe-form">
                    {photo.length > 0 &&
                        <img className='card-img-top img-fluid' src={this.props.picture} alt={this.props.title}/>
                    }
                    <div className="card-block">
                        <h2 className="card-title">{this.props.title}</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredients.map((content, index) => {
                        return <Ingredient key={index} name={content.name} amount={content.amount}/>;
                        })}
                    </ul>
                    <p className="card-text">{directions}</p>
                    </div>
                </div>
            </div>
        );

    }
}

export default DisplayRecipe;