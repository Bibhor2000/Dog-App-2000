import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BreedList from './components/BreedList';
import RandomDogs from './components/RandomDogs';
import {useParams} from 'react-router-dom';

function App() {

  const [dog, setDog] = useState()
  const [breed, setBreed] = useState()
  const [input, setInput] = useState('')

  useEffect(() => {
    async function getDogs () {
      const readDogs = await axios.get('https://dog.ceo/api/breeds/image/random')
      setDog(readDogs.data.message)
    }

    async function getBreed () {
      const readBreed = await axios.get('https://dog.ceo/api/breeds/list')
      setBreed(readBreed.data)
    }
    getDogs()
    getBreed()
  }, []); 

  async function getSpecificDog () {
    const specificDog = await axios.get(`https://dog.ceo/api/breed/${input}/images/random`)
    setDog(specificDog.data.message)
  }
  // console.log(dog, 'This is  from App.js')
  // console.log(breed, 'This is from App.js')
  console.log(input);
  
  return (
    <div>
      <RandomDogs dog={dog} setDog={setDog} input={input} setInput={setInput} getSpecificDog={getSpecificDog}/>
      <BreedList breed={breed} setBreed={setBreed}/>
    </div>
  );
}

export default App;
