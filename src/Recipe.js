import React, { Component } from 'react';
import style from './recipe.module.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: 100vh;
`;

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <Wrapper>
        <div className={styled.recipe}>
            <img className={styled.image} src={image} alt="" />
            <br />
            <h1>{title}</h1>
            <br />
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li> 
                ))}
            </ul>
            <br />
            <p><strong>Total Calories:</strong> {calories}</p>
        </div>
        </Wrapper>
    );
}

export default Recipe;