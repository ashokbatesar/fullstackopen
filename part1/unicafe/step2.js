import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const Button = ({ onClick, text }) => (
        <button onClick={onClick}>
          {text}
        </button>
      )
    const handleGoodClick = () => {
        setGood(good + 1)
      }
    
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
      }
      const handleBadClick = () => {
        setBad(bad + 1)
      }
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const feedback = 'give feedback'
  const statistic= 'statistic'
  const all= good+neutral+bad
  const average = (good-bad)/all
  const positive = (good/all)*100

  return (
    <div>
        <h2>{feedback}</h2>
        <Button onClick={handleGoodClick} text='good' />
        <Button onClick={handleNeutralClick} text='neutral' />
        <Button onClick={handleBadClick} text='bad' />
        <h2>{statistic}</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

//ReactDOM.render(<App />, document.getElementById('root'))
