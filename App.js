import React from 'react'
import Food from './Componenets/Food';
import HeadlineCards from './Componenets/HeadLineCards';
import Hero from './Componenets/Hero';
import Navbar from './Componenets/Navbar';
import Category from'./Componenets/Category';
import './App.css'
function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <HeadlineCards />
    <Food />
    <Category />
</div>
  );
}

export default App;
