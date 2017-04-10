import React, {Component} from 'react';
import Recipe from './Recipe';

class DisplayRecipe extends Component {
    render() {
        var ingredients = this.props.ingredients;

        let photo = this.props.picture;
        let directions = this.props.directions;
        
        return (
            <div className='card'>
                <button type="button" className="close" aria-label="Close">
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
                        return <Recipe key={index} name={content.name} amount={content.amount}/>;
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