let recipelist = [
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
        directions: 'Lorem ipsum dolor sit amet, ut nec quando legendos accusata, modus sensibus usu ea, ad ipsum velit qualisque nec. Pertinax persecuti ut mei. Vis ei eius veri verterem, eu illum commodo copiosae mei. Et eum tollit quodsi, pro aperiri contentiones ex. '
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
        picture: '',
        title: 'Jello',
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
];



import React, {Component} from 'react';
import './App.css';
import AddRecipe from './AddRecipe';
import Header from './Header';
import DisplayRecipe from './DisplayRecipe';

export default class App extends Component {

 constructor(props) {
    super(props);

    this.state = {
      recipelist
      //recipelist: recipelist.splice(2,1)
    }
    
 }
 
   
  render() {
    return (
      <div>
        <Header/>

        <main>
          <div className='container'>
            <div className="row">
              <div className="card-columns">
              { recipelist.map((item, index) => {
                    return <DisplayRecipe 
                    key={index}
                    elementNo={index}
                    title={item.title}
                    picture={item.picture}                        
                    directions={item.directions}
                    ingredients={item.ingredients}
                    />
                })}

              <AddRecipe/>
              </div>
            </div>
          </div>
        </main>

      </div>
    );
  }
}