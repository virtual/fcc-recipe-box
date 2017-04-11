import React, { Component } from 'react'
import styled from 'styled-components';

class Jumbotron extends Component {


    render() {
        //https://github.com/styled-components/styled-components
        const JumboDiv = styled.div`
            background-image: url(${this.props.background});
            background-size:cover;
            background-position: center;
            font-size: 1.5em;
            text-shadow: 0 0 5px #585858;
            text-align: center;
            color: white;
            `;

        return (
            <div>
                <JumboDiv className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Discover the world of food</h1>
                        <p className="lead">Recipes for every occasion—big and small.</p>
                        <p>Browse recipes or add your own.</p>
                        <p className="lead">
                            <a id='jumbo-add-recipe' data-toggle="modal" data-target="#exampleModal" className="btn btn-primary btn-lg" href="#" role="button">Add Recipe</a>
                        </p>
                    </div>
                </JumboDiv>
            </div>
        )
    }
}

export default Jumbotron