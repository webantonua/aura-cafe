import React from 'react'
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='w-full xl:max-w-7xl  mx-auto px-2'>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
