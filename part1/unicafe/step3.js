import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Statistics = (props) => {
    
      const all= props.good+props.neutral+props.bad
      const average = (props.good-props.bad)/all
      const positive = (props.good/all)*100

      return (
        <>
        
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
        </>

      )
  }
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
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
    const feedback = 'give feedback'
    const statistic= 'statistic'
  return (
    <>
    <h2>{feedback}</h2>
    <Button onClick={handleGoodClick} text='good' />
    <Button onClick={handleNeutralClick} text='neutral' />
    <Button onClick={handleBadClick} text='bad' />
    <h2>{statistic}</h2>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

//ReactDOM.render(<App />, document.getElementById('root'))
