import React, {Component} from 'react';
import Recipe from './Recipe';

class DisplayRecipe extends Component {
    render() {
        var ingredients = this.props.ingredients;

        let photo = this.props.picture;
        let directions = this.props.directions;

        return (
            <div className='col-sm-4 col-xs-6'>
                <div className="recipe-form">
                    <h2>{this.props.title}</h2>
                    {photo.length > 0 &&
                        <img className='thumbnail' src={this.props.picture} alt={this.props.title}/>
                        }
                        <h3>Ingredients:</h3>
                            <ul>
                    {ingredients.map((content, index) => {
                        return <Recipe key={index} name={content.name} amount={content.amount}/>;
                    })}
                    </ul>
                    <p>{directions}</p>
                </div>
            </div>
        );

    }
}

export default DisplayRecipe;