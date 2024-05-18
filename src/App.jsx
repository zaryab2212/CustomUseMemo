import React, { useMemo, useState } from 'react'
import { useMyMemo } from './useMyMemo'

const App = () => {
  const [counter,setCounter] = useState(0)
  const [counterMinus,setCounterMinus] = useState(100)




  function countSquare(){
    console.log("squre runn")
  return  counter * counter
  }

  const Memoixed = useMyMemo(countSquare,[counter])
  console.log(Memoixed)

  return (
    <>
    <p>{counter}</p>
    <button onClick={()=> setCounter(counter +1) }>Add Count</button>
    <h4>Count Square: {Memoixed}</h4>

    <p>{counterMinus}</p>
    <button onClick={()=> setCounterMinus(counterMinus -1) }>Add Count</button>
    
    </>
  )
}

export default App