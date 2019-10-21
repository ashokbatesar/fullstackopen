import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const points= new Array(6+1).join('0').split('').map(parseFloat)
var k
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const Button = ({ onClick, text }) => (
        <button onClick={onClick}>
            {text}
        </button>
    )
  const handleAnecdotes = () =>{
      var x=Math.floor(Math.random() * 6)
    setSelected(x)
    }  
    const handlePoints = () =>{
        points[selected]+=1
        maxIndex()
        }

        
    const maxIndex = () =>{
        k=0
        var i
        for (i = 0; i < points.length; i++) {
            if (Math.max(...points)==points[i]){
                k=i
            }
        }
    }
  return (
    <div>
        <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <Button onClick={handlePoints} text='vote'/>
      <Button onClick={handleAnecdotes} text='next anecdotes'/>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[k]}
      
      
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