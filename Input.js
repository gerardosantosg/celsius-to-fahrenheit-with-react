import React, { useState } from 'react'

const Input = () => {
  //js code
  const [temp, setTemp] = useState('')
  let tempF = (temp * 1.8 + 32).toFixed(2)

  const message = (temp) => {
    if (temp !== '') {
      if (temp < -20) return 'You should stay home!'
      else if (temp < 0) return 'Wear a jacket!'
      else if (temp < 20) return 'Wonderful Weather!'
      else if (temp < 40) return "Let's go to the beach!"
      else if (temp > 40) return 'You could melt today!'
      else return
    }
  }
  return (
    <div>
      <input
        onKeyUp={(event) => setTemp(event.target.value)}
        type='number'
        placeholder='Enter °C'
      ></input>
      <h6>{temp === '' ? '' : `${tempF} °F`}</h6>
      <h6>{message(temp)}</h6>
    </div>
  )
}

export default Input
