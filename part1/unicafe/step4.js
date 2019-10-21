import React, { useState } from 'react'
import ReactDOM from 'react-dom'
var stt=true
const Statistics = (props) => {
      const all= props.good+props.neutral+props.bad
      const average = (props.good-props.bad)/all
      const positive = (props.good/all)*100
      const nofeedback = 'No feedback given'
    if (props.stt){
        return <p>{nofeedback}</p>
    }
    else {
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

    
    const handleStatistics = () => {
        if (stt) {
            stt= false
        }
    }
    const feedback = 'give feedback'
    const statistic= 'statistic'
    
  return (
    <>
    <h2>{feedback}</h2>
    <Button onClick={function(event){ handleGoodClick(); handleStatistics()}} text='good' />
    <Button onClick={function(event){ handleNeutralClick(); handleStatistics()}} text='neutral' />
    <Button onClick={function(event){ handleBadClick(); handleStatistics()}} text='bad' />
    <h2>{statistic}</h2>
    <Statistics stt={stt} good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

//ReactDOM.render(<App />, document.getElementById('root'))
