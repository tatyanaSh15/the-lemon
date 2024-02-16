import { data } from './data';
import './App.css';
import { useState } from 'react';
import Food from './Food';
import Buttons from './Buttons';
import React from 'react';



function Home() {
    
    const [food, setFood] = useState(data);

    const chosenMeal = (searchTerm) => {
    const ourMeal = data.filter(element => element.searchTerm === searchTerm);
    setFood(ourMeal);
    }

  return (
    <div>
      <div className="container">
        <h2 className='top'>Life should be delicious</h2>
      </div>
        <Buttons filteredMeal = {chosenMeal}/>
        <Food itemsForMenu = {food}/>
        
    </div>
  );
}

export default Home;