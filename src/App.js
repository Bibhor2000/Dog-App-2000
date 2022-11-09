import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BreedList from './components/BreedList';

function App() {

  const [dog, setDog] = useState()
  const [breed, setBreed] = useState()

  useEffect(() => {
    async function getDogs () {
      const readDogs = await axios.get('https://dog.ceo/api/breeds/image/random')
      setDog(readDogs.data)
    }

    async function getBreed () {
      const readBreed = await axios.get('https://dog.ceo/api/breeds/list')
      setBreed(readBreed.data)
    }
    getDogs()
    getBreed()
  //     axios.get('https://dog.ceo/api/breeds/list')
  //     .then((res) => {
  //     const readBreed = res.data
  //     setBreed(readBreed)
  // });
  }, []); 
  console.log(dog, 'This is  from App.js')
  console.log(breed, 'This is from App.js')
  
  return (
    <div>
      <BreedList breed ={breed} setBreed ={setBreed}/>
    </div>
  );
}

export default App;
