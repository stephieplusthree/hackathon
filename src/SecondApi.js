import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const SecondApi = () => {
    const APP_ID = 'c7c0caf1';
    const APP_KEY = '72095a05def7bf86f62bcdc3aa6266ae';
        
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');
    
    useEffect( () => {
        getRecipes();
    }, [search]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
            <input 
                className="search-bar" 
                type="text" 
                value={search} 
                onChange={updateSearch}
            />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe =>(
                <Recipe 
                    title={recipe.recipe.label} 
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            ))}
            </div>
        </div>
    );
};

export default SecondApi;
