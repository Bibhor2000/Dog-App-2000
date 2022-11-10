import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function BreedList ({breed, setBreed}) {
    //let breedList = breed.message;
    //console.log (breed)
    let list = breed?.message.map(b => {
        return (
            <option value={b}>{b}</option>
        )
    })
    return(
        <select>{list}</select>
    )
}

export default BreedList;