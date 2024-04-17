import React, { useState } from "react";
import image from "../images/react.png";
import recipes from "../recipes";
import Content from "./Content"
import { create } from "@mui/material/styles/createTransitions";



function Home() {
    const options = {"Non-Vegan":"Non-Vegan","Vegan":"Vegan","All":true}
    const [selection, setSelection] = useState(options["All"])
    const [searchTerm, setSearchTerm] = useState("");

    function handleSelect(event){
        const val = event.target.value
        console.log(val)
        setSelection(options[val])
    }

    function handleSearch(event) {
        const search = event.target.value
        
       
        setSearchTerm(search)

    }


    function createCard(item) {
    
        return(
        
        <Content
        image ={item.image}
        name ={item.name}
        description ={item.description}
        />
        )
    }

    return(
        <div className="overarching">
            <div className="left-side">
                <img className="react-image" src={image} alt="react pic"/>
                <div className="center-text">
                    <h1>Recipe App with ReactJS</h1>
                    <h2>Build and deploy</h2>
                </div>
                <h1 className="scratch"> ..from Scratch </h1>
            </div>
            <div className="right-side">
                <h1 className="recipe">Food Recipe Plaza </h1>
                <form className="form">
                    <input type="search" placeholder="Search" onChange={handleSearch}></input>
                    <button>Search</button>
                    <select onChange={handleSelect}>
                        <option value={"All"}>All</option>
                        <option value={"Vegan"}>Vegan</option>
                        <option value={"Non-Vegan"}>Non-Vegan</option>
                        <option>Drinks</option>
                    </select>
                </form>
                <div className="card-display">
                    { searchTerm === "" ?

                    selection === options['All'] ? recipes
                    .map(createCard) :
                    recipes.filter(item => item.category === selection).map(createCard)
                    
                    : selection === options['All'] ? recipes.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map(createCard) 
                     
                    : recipes.filter(item => item.category === selection && item.name.toLowerCase().includes(searchTerm.toLowerCase())).map(createCard) }
                
                </div>
            </div>
        </div>
    )
}

export default Home;