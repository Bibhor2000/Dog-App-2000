import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

function RandomDogs ({dog, setDog, input, setInput, getSpecificDog}) {

    //console.log(dog);
    function dogImage () {
        return <img src={dog}/>
    }

    return (
        
        <div>
            <form onSubmit={(e) => {e.preventDefault()
            getSpecificDog()}}>
                <input onChange={(e) => setInput(e.target.value)}></input>
                <button type='submit'>Random Dog</button>
            </form>
            <img src={dog}/>
        </div>
    )
}

export default RandomDogs;