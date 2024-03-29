import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const points= new Array(6+1).join('0').split('').map(parseFloat)
  
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const Button = ({ onClick, text }) => (
        <button onClick={onClick}>
            {text}
        </button>
    )
  const handleAnecdotes = () =>{
    setSelected(Math.floor(Math.random() * 6))
    }  
    const handlePoints = () =>{
        points[selected]+=1
        console.log(points)
        }

  return (
    <div>
      {props.anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <Button onClick={handlePoints} text='vote'/>
      <Button onClick={handleAnecdotes} text='next anecdotes'/>
      
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)