// eslint-disable-next-line no-unused-vars
import React,{useEffect , useState} from 'react'

const App = () => {

  const [count, SetCount] = useState(0);
  useEffect (() => {
    console.log(`count is now ${count}`);
    document.title = count 
  } , [count] )

  return (
    <div>
      <h1>{count}</h1> 
      <button onClick= {
        () => SetCount(count + 1)  }> Increment </button>
      <button onClick= {() => SetCount(count - 1) } disabled = {count == 0} > Decrement </button>
      <button onClick= {() => SetCount(0) }> Reset </button>
    </div>
  )
}

export default App



