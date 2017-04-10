const recipelist = [
    {
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_5708-1024x683.jpg',
        title: 'Fancy Cake',
        ingredients: [
          {
            name: 'sugar',
            amount: '2 oz.'
          },
          {
            name: 'flour',
            amount: '1 cup'
          }
        ],
        directions: 'mix and bake'
    },
    {
        picture: '',
        title: 'Banana Pudding',
        ingredients: [
          {
            name: 'bananas',
            amount: '2'
          },
          {
            name: 'vanilla wafers',
            amount: '1/2 cup'
          },
          {
            name: 'banana pudding',
            amount: '1 package'
          }
        ],
        directions: 'Cook banana pudding. Mix in vanilla wafers and sliced bananas. Simmer for 20 minutes.'
    },
    {
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_5708-1024x683.jpg',
        title: 'Fancy Cake',
        ingredients: [
          {
            name: 'sugar',
            amount: '2 oz.'
          },
          {
            name: 'flour',
            amount: '1 cup'
          }
        ],
        directions: 'mix and bake'
    },
    {
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_5708-1024x683.jpg',
        title: 'Fancy Cake',
        ingredients: [
          {
            name: 'sugar',
            amount: '2 oz.'
          },
          {
            name: 'flour',
            amount: '1 cup'
          }
        ],
        directions: 'mix and bake'
    } 
];

import React, {Component} from 'react';
import './App.css';
import AddRecipe from './AddRecipe';
import Header from './Header';
import DisplayRecipe from './DisplayRecipe';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>

        <main>
          <div class='container'>
            <div className="row">
              { recipelist.map((item, index) => {
                    return <DisplayRecipe 
                    key={index}
                    title={item.title}
                    picture={item.picture}                        
                    directions={item.directions}
                    ingredients={item.ingredients}
                    />
                })}

              <AddRecipe/>
              
            </div>
          </div>
        </main>

      </div>
    );
  }
}