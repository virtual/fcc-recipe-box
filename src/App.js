import React, {Component} from 'react';
import './App.css';
import AddRecipe from './AddRecipe';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>

        <main>
          <div class='container'>
            <div className="row">
              <AddRecipe/>
            </div>
          </div>
        </main>

      </div>
    );
  }
}