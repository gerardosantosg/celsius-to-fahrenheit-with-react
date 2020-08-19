import React from 'react'
import './App.css'

//import components
import Input from './components/Input'

function App() {
  return (
    <div className='App'>
      <h1>
        Covert from Celsius to Fahrenheit{' '}
        <span role='img' aria-label='term'>
          🌡️
        </span>
      </h1>
      <Input />
    </div>
  )
}

export default App
